const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)} //El "+" convierte el string a number por el type "radio", si no, podría usar e.target.valueAsNumber
              checked={tip === tipOption.value} //Sirve para sacar el "checked" del radio button del tip cuando se guarda la orden
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentageForm;
