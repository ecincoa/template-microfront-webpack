import Button from "../components/Button";
import Input from "../components/Input";

import "./styles.css";

export default function LoginLayout() {
  return (
    <div className="LoginLayout">
      <Input placeholder="Usuario" />
      <Input placeholder="Contraseña" />
      <Button text="Iniciar sesión" onClick={() => alert("Hello world")} />
    </div>
  );
}
