interface ICheckBox {
  children: string;
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({ children, disabled, checked, onChange }: ICheckBox) {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}

export default Checkbox;
