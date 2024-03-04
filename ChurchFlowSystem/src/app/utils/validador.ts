 export function validarEmail(email?: string): boolean {
  if (!email) {
    return false; // Retorno antecipado para casos de e-mail undefined ou null
  }

  const regexEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexEmail = new RegExp(regexEmailPattern);

  return regexEmail.test(email);
}


export function validarSenha(senha?: string): boolean {

  // Verifica se a senha está definida e possui tamanho suficiente
  const possuiTamanhoSuficiente = senha !== undefined && senha.length >= 8;

  // Verifica os outros critérios apenas se a senha tiver tamanho suficiente
  if (possuiTamanhoSuficiente) {
    const possuiNumeros = /[0-9]/.test(senha!);  // Adicionando "!" para indicar ao TypeScript que senha não é nula ou indefinida
    const possuiLetrasMaiusculas = /[A-Z]/.test(senha!);
    const possuiCaracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha!);

    // Verifica se todos os critérios são atendidos
    return possuiNumeros && possuiLetrasMaiusculas && possuiCaracteresEspeciais;
  }

  return false; // Retorna falso se a senha não tiver tamanho suficiente
}
