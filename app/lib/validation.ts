export const validEmail = (input: string) => {
  if (input == '') {
    return '이메일을 입력해 주세요.'
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)) {
    return '이메일 형식에 맞게 입력해 주세요.'
  } else {
    return ''
  }
}

export const validPassword = (input: string) => {
  if (input == '') {
    return '비밀번호를 입력해 주세요'
  } else if (input.length < 6 || input.length > 10) {
    return '비밀번호를 6~10자리 사이로 입력해 주세요.'
  } else {
    return ''
  }
}
