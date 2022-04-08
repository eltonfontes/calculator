import { useState, useEffect } from 'react';
import {FiDelete, FiTrash2} from 'react-icons/fi'
import {    
    ContainerCalculator,
    ContainerHeader,    
    Icon,
    ContainerVisor,
    LineHistory,
    ContainerAction,
    Acao,
    Value,
    ContainerOptions,
    ButtonCopy,
    ButtonExport,
    ButtonBackspace,
    ContainerTop,
    ContainerButtons,
    LineButtons,
    ButtonCustom,
    Style
} from './styles'

let historico = '';
const teclasPermitidas = ['0','1','2', '3', '4', '5', '6', '7', '8', '9', 'x', '-', '+', '/', '%', '(', ')', '*', '.']

export default () => {

    const [history, setHistory] = useState('');
    const [result, setResult] = useState(0);

    function observaTeclas(){

        window.addEventListener('keyup', (e) => {
            const { key } = e;
            setClick(key);
        })
    }

    function setClick(key){
        console.log(key);

        if(key === ',') key = '.'   
        if(key.toLowerCase() === 'x') key = '*'        

        if(key === 'Delete'){
            setHistory('');
            setResult(0);
        } else if(key === '=' || key === 'Enter'){
            try{
                let valor = eval(historico);
                setResult(valor.toFixed(2));
            } catch(e){
                setResult(undefined) 
                console.log(history, e);

            }
        } else if(key === 'Backspace'){
            historico = historico.trim();
            if(historico.length <= 0){
                setHistory('');
                setResult(0);
                return;
            }

            historico = historico.substring(0, historico.length - 1);
            setHistory(historico);
            
        }  else {

            if(!teclasPermitidas.includes(key.toLowerCase())) return;
            if(key === '*' || key === '-' || key === '+' || key === '/' || key === '(' || key === ')' || key === '%'){
                key = ` ${key} `;
                setClick('Enter');
            }
            historico += key.toString();
            setHistory(historico); return;
        }
    }

    useEffect(() => {
        observaTeclas();
    }, []);

    return (        
        <ContainerCalculator>
            <ContainerTop background={result === undefined}>
                <ContainerHeader>
                    <Icon color="#FF6158"></Icon>
                    <Icon color="#D1D1D1"></Icon>
                    <Icon color="#29CB41"></Icon>
                </ContainerHeader>

                
                <ContainerVisor>
                    <LineHistory>
                        {history}                     
                    </LineHistory>
                    <ContainerAction>
                        <Acao>=</Acao>
                        {result !== undefined && (<Value>{result}</Value>)}
                        {result === undefined && (<Value>&#128531;</Value>)}
                    </ContainerAction>
                </ContainerVisor>
                
                
                <ContainerOptions>
                    <ButtonCopy>COPY</ButtonCopy>
                    <ButtonExport>EXPORT</ButtonExport>                    
                    <ButtonBackspace onClick={e => setClick('Backspace')}>
                        <FiDelete />
                    </ButtonBackspace>
                </ContainerOptions>
            </ContainerTop>
        
            
            <ContainerButtons>
                <LineButtons>
                    <ButtonCustom onClick={e => setClick('Delete')}>
                        <FiTrash2  color="#FF8888" />
                    </ButtonCustom>
                    <ButtonCustom opacity="true">+/-</ButtonCustom>
                    <ButtonCustom opacity="true" onClick={e => setClick('%')}>%</ButtonCustom>
                    <ButtonCustom opacity="true" onClick={e => setClick('/')}>/</ButtonCustom>
                </LineButtons>
                <LineButtons>
                    <ButtonCustom onClick={e => setClick('7')}>7</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('8')}>8</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('9')}>9</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('*')}>
                        <Style>x</Style>
                    </ButtonCustom>
                </LineButtons>
                <LineButtons>
                    <ButtonCustom onClick={e => setClick('4')}>4</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('5')}>5</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('6')}>6</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('-')}>
                        <Style>-</Style>
                    </ButtonCustom>
                </LineButtons>
                <LineButtons>
                    <ButtonCustom onClick={e => setClick('1')}>1</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('2')}>2</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('3')}>3</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('+')}>
                        <Style>+</Style>
                    </ButtonCustom>
                </LineButtons>
                <LineButtons>
                    <ButtonCustom onClick={e => setClick('0')}>0</ButtonCustom>
                    <ButtonCustom>&nbsp;</ButtonCustom>
                    <ButtonCustom onClick={e => setClick(',')}>.</ButtonCustom>
                    <ButtonCustom onClick={e => setClick('=')}>
                        <Style>=</Style>
                    </ButtonCustom>
                </LineButtons>
            </ContainerButtons>

        </ContainerCalculator>
    )
}