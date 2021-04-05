import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'エラー', description: '時間をおいてお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'メールアドレスが不正です';
      break;
    case 'auth/user-disabled':
      error.description = 'アカウントが向こうです';
      break;
    case 'auth/user-not-found':
      error.description = 'ユーザが見つかりませんでした';
      break;
    case 'auth/wrong-password':
      error.description = 'パスワードが間違っています';
      break;
    case 'auth/email-already-in-use':
      error.description = 'メアドが使われてます';
      break;
    case 'auth/operation-not-allowed':
      error.description = '開発者に聞いてください';
      break;
    case 'auth/weak-password':
      error.description = 'パスワードが簡単過ぎます';
      break;
    default:
  }
  return error;
}
