
/* Address: 0x1800069a8; Evidence: ev_14524ebe955a796b8f9cc62996b85fbf2a417b8b05121bf832324556077d5d6f */

undefined8 FUN_1800069a8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001c378 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_180009748();
    if (pcVar2 == (char *)0x0) {
      FUN_180007bd0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180006a1c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001c378;
        puVar1 = DAT_18001c390;
      }
      DAT_18001c390 = puVar1;
      DAT_18001c378 = puVar4;
      FUN_180007bd0((LPVOID)0x0);
      FUN_180007bd0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

