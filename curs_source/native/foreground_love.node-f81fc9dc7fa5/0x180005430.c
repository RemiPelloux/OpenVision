
/* Address: 0x180005430; Evidence: ev_bdd14647d7f98abbecedf794b50ec6b49021954c70e2c935cfeb7df6169d2bfe */

undefined8 FUN_180005430(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001b2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800085e8();
    if (pcVar2 == (char *)0x0) {
      FUN_180006b50((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_1800054a4(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001b2a8;
        puVar1 = DAT_18001b2c0;
      }
      DAT_18001b2c0 = puVar1;
      DAT_18001b2a8 = puVar4;
      FUN_180006b50((LPVOID)0x0);
      FUN_180006b50(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

