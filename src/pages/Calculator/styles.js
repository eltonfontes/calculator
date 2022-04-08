import styles from 'styled-components'


export const ContainerCalculator = styles.div`
    width: 268px;
    background-color: ${props => props.theme.bg_primary};
    border-radius: 5px;
    min-height:450px;
    height: 480px;  
    margin-right: 20px;
    box-shadow: 0.1em 0.1em 0.3em ${props => props.theme.bg_box_shadow};
`

export const ContainerHeader = styles.div`        
    display:flex;
`

export const Icon = styles.button`        
    height:10px;
    border:0px;
    width: 10px;
    border-radius:10px;
    margin-right:5px;
    cursor:pointer;
    transition: opacity 0.2s;

    background-color : ${props => props.color};

    &:hover {
        opacity : 0.8;
    }
`

export const ContainerTop = styles.div`
    padding: 10px;
    border-radius: 5px;    
    ${props => (props.background)
         ? 'background-color:  #e12e2e1a !important'
         : `background-image: linear-gradient(${props.theme.bg_degrade_from}, ${props.theme.bg_degrade_from}, ${props.theme.bg_degrade_from},${props.theme.bg_degrade_from},${props.theme.bg_degrade_from},${props.theme.bg_degrade_from},${props.theme.bg_degrade_to})`
    };
`

export const ContainerVisor = styles.div`
    margin-top:20px;
    min-height: 100px;    
`

export const LineHistory = styles.div`
    width:100%;
    min-height:17px;
    font-size: 12px;
    text-align:right;
    color: ${props => props.theme.txt_line_history};
`

export const ContainerAction = styles.div`
    display: flex;
    margin-top:10px;
    color: ${props => props.theme.txt_container_action};
`

export const Acao = styles.div`
    flex: 1;
    font-weight: 400;
    font-size:46px;
`

export const Value = styles.h1`
    flex:3;
    text-align:right;
    font-weight: 400;
    font-size:46px;

`

export const ContainerOptions = styles.div`
    display: flex;
    margin-top:20px;    
`


    
export const ButtonCopy = styles.button`
    flex: 1;
    margin-right:5px;
    border:0px;
    border-radius: 10px;
    background-color: ${props => props.theme.bg_button_action};
    
    color: ${props => props.theme.txt_line_history};
    cursor:pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
    
`

export const ButtonExport = styles.button`
    flex: 1;
    margin-right:5px;
    border:0px;
    border-radius: 10px;    
    background-color: ${props => props.theme.bg_button_action};

    color: ${props => props.theme.txt_line_history};
    cursor:pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`

export const ButtonBackspace = styles.button`
    flex:2;
    text-align:right;
    flex: 1;   
    font-size:22px; 
    border:0px;
    background-color:transparent;    
    color: ${props => props.theme.txt_line_history};
    cursor:pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`

export const ContainerButtons = styles.div`
    display : flex;    
    flex-direction:column;
    width:100%;

`

export const LineButtons = styles.div`    
    width:100%;    
    display:flex;

`

export const ButtonCustom = styles.div`
    width:67px;
    display:flex;
    align-items:center;
    justify-content:center;
    color : ${props =>  props.theme.txt_container_action};
    cursor:pointer;
    height: 55px;
    border:0px;  
    background-color: transparent;
    transition: opacity 0.2s;


    opacity : ${props => (props.opacity) ? '0.5' : '1'};

    &:hover {
        opacity: 0.8;
    }
`

export const Style = styles.button`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.bg_button_opcoes};
    width: 30px;
    height:30px;
    border-radius:30px;
    border:0px;
    cursor:pointer;

    transition: opacity 0.2s;
    

    &:hover {
        opacity: 0.8;
    }
`

