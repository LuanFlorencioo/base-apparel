interface ValidateReturn {
  ok: boolean;
}

export const validateEmail = (userEmail: string): ValidateReturn => {
  const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  const isValidEmail = regex.test(userEmail)

  return {
    ok: isValidEmail
  }
}