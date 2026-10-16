
/* Address: 0x180008fec; Evidence: ev_199812e2650413025395503b158a683d934185472a9356d880bfe5e08948da90 */

ulonglong FUN_180008fec(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180019000 & 0x3f;
  uVar2 = DAT_18001aaa0 ^ DAT_180019000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

