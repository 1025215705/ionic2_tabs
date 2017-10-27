export interface UserInfo {
  id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  avatarId: string;
  avatarPath: string;
  description: string;
  token: string;
}


export interface LoginInfo {
  access_token: string;//��Ч��30����
  refresh_token: string;//��Ч��30��,30��������12�����.��Ҫ���µ�¼���ܻ�ȡ
  user: UserInfo;
}
