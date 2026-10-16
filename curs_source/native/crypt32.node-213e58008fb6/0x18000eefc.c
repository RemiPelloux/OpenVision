
/* Address: 0x18000eefc; Evidence: ev_084b637a20ad1464608c04b38a58f828eefd5fdae2b4553ab7ba91401c194891 */

ulonglong FUN_18000eefc(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180021000 & 0x3f;
  uVar2 = DAT_180022c08 ^ DAT_180021000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

