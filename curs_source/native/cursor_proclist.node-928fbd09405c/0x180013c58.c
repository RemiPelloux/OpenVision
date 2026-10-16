
/* Address: 0x180013c58; Evidence: ev_0644de23450022d6bad4c02d4c63ff42cc8aa44ce68c96813cf8a6353ac29a17 */

ulonglong FUN_180013c58(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180028040 & 0x3f;
  uVar2 = DAT_180029d38 ^ DAT_180028040;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

