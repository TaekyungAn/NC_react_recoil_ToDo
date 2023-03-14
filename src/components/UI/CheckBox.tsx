// chindren type 변경: https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type
interface ICheckBox {
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
  checked?: boolean;
  id: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({
  id,
  children,
  disabled,
  checked,
  onChange,
  onInput,
}: ICheckBox) {
  return (
    <label>
      <input
        type="checkbox"
        id={`${id}`}
        disabled={disabled}
        // checked={checked}
        onChange={onChange}
        onInput={onInput}
      />
      {children}
    </label>
  );
}

export default Checkbox;
