
/* Address: 0x18000a16c; Evidence: ev_7db2e75b1cf0e99fba4fa53f5bbe4320a33510ecbdd022a5260ce782c7f65eff */

ulonglong FUN_18000a16c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_18001b000 & 0x3f;
  uVar2 = DAT_18001cb68 ^ DAT_18001b000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}

