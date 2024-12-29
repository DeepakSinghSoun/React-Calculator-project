import styles from "./ButtonContainer.module.css"

const ButtonContainer = ({onButtonClick}) => {

  const buttonName = ['7' ,'8' ,'9' ,'/' ,'4' ,'5' ,'6' ,'*' ,'1' ,'2' ,'3' ,'-' ,'0' ,'.' ,'C' ,'+' ,'=']

  return (
    <div className={styles.buttonsContainer}>

      {buttonName.map((buttonName) =>(
        <button className={styles.buttons} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
  </div>
  );
}

export default ButtonContainer;