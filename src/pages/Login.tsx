import { useState } from "react";
import "../assets/logo_1747571827.png";
import "./Login.css"; // Importa o arquivo de estilos específico para essa tela

function Login() {
  // Define estados locais para armazenar o valor dos campos do formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função que será chamada quando o formulário for enviado
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

    // Aqui você pode fazer uma chamada para o backend (ex: PHP ou Node) para autenticar o usuário
    // Por enquanto, vamos apenas mostrar os dados no console
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <div className="login-container">
      {/* Logo do sistema */}
      <div className="text-center">
        <img
          src="src/assets/logo_1747571827.png" // Altere para o caminho correto do seu logo
          height="120px"
          className="rounded"
          alt="Logo"
        />
      </div>

      {/* Nome do sistema */}
      <div className="logo">NotifY 💬</div>

      {/* Formulário de login */}
      <form onSubmit={handleSubmit}>
        {/* Campo de e-mail */}
        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            required // Campo obrigatório
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail conforme o usuário digita
          />
        </div>

        {/* Campo de senha */}
        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            placeholder="******"
            required // Campo obrigatório
            value={senha}
            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha conforme o usuário digita
          />
        </div>

        {/* Botão de envio do formulário */}
        <button type="submit" className="btn-login">
          Entrar
        </button>
      </form>

      {/* Link para recuperação de senha */}
      <h6 style={{ textAlign: "right", marginTop: 10 }}>
        🔐 <a href="/recuperar-senha">Esqueceu sua senha?</a>
      </h6>

      {/* Rodapé com ano atual e créditos */}
      <p className="footer-text">
        &copy; {new Date().getFullYear()} <strong>NotifY 💬</strong> -{" "}
        <strong>Anderson A. Viana</strong>
      </p>
    </div>
  );
}

export default Login;
