
/* Address: 0x18000aef8; Evidence: ev_902cddaf91343f0da9eada44d168ea75c45ec5f55d513ff4cf3b8278a9561e1e */

undefined8 FUN_18000aef8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_1800283f8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800102f8();
    if (pcVar2 == (char *)0x0) {
      FUN_18000bff0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000af6c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_1800283f8;
        puVar1 = DAT_180028410;
      }
      DAT_180028410 = puVar1;
      DAT_1800283f8 = puVar4;
      FUN_18000bff0((LPVOID)0x0);
      FUN_18000bff0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

