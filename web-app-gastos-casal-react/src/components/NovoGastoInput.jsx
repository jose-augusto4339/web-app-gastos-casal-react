import { useState } from "react"

export default function NovoGastoModalInput({tag = "input", label, type, name, onValueChange,...props}) {

    const Tag = tag;
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event){
        const newValue = event.target.value;
        const inputName = event.target.name;
        setInputValue(newValue);
        onValueChange(inputName, newValue)
    }

    return (
        <div>
            <label
                className="
                            block 
                            font-bold 
                            text-xs 
                            mb-2
                        " 
                htmlFor={name}
            >
                {label}
            </label>
            <Tag 
                className="
                            border-2 
                            border-(--color-my-brown-100) 
                            rounded-md 
                            mb-10
                        "
                type={type} 
                name={name}
                value={inputValue}
                onChange={handleInputChange}
                {...props}
            >
            </Tag>
        </div>
    )
}