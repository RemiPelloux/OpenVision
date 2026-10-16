
/* Address: 0x18000910c; Evidence: ev_022891732e74b05e2e52a81665b0e1695a7426ff017a180bf06c3b5d8d052b27 */

ulonglong FUN_18000910c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_18001a000 & 0x3f;
  uVar2 = DAT_18001baa0 ^ DAT_18001a000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

