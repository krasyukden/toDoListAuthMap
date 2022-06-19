import { FC } from 'react';// FC -функцирн компонент !!


interface InputProps {
  text: string,
  handleInput: (inputValue: string/* e: React.ChangeEvent<HTMLInputElement> */) => void;
  handleSubmit: () => void;

}

const InputField: FC<InputProps> = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e: any) => {
        let inputValue = e.target.value;
        handleInput(inputValue/* e.target.value */)
       /*  if (e.key === "Enter") {
          handleSubmit();
        } */
      }} />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  )
}

export default InputField;