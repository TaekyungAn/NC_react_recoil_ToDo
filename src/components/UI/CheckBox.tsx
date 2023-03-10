interface ICheckBox {
  children: string;
  disabled?: boolean;
  checked: boolean;
  id: number;
  onChange: (checked: boolean) => void;
}

function Checkbox({ id, children, disabled, checked, onChange }: ICheckBox) {
  return (
    <label>
      <input
        type="checkbox"
        id={`${id}`}
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}

export default Checkbox;
