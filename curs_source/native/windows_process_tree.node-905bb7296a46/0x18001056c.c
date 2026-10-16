
/* Address: 0x18001056c; Evidence: ev_1a2e0b03336862140c391a88cdf848b9dd515e4623dc88fe0f03ff91ebe6dbf2 */

ulonglong FUN_18001056c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180023000 & 0x3f;
  uVar2 = DAT_180024c08 ^ DAT_180023000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

