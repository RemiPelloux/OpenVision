
/* Address: 0x1800105e4; Evidence: ev_e6256cdecf22b0ca89ebad60f4f9f8d9df5ad36308a76cb3842cb927318b95d0 */

ulonglong FUN_1800105e4(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180027000 & 0x3f;
  uVar2 = DAT_180028c28 ^ DAT_180027000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

