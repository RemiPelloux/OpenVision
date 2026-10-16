
/* Address: 0x180005558; Evidence: ev_688a14c375bd00a361ed557d027479e3bdf79276e9b1b38c8f3b409a52799b7d */

undefined8 thunk_FUN_180005310(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001a2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800084c8();
    if (pcVar2 == (char *)0x0) {
      FUN_180006a30((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180005384(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001a2a8;
        puVar1 = DAT_18001a2c0;
      }
      DAT_18001a2c0 = puVar1;
      DAT_18001a2a8 = puVar4;
      FUN_180006a30((LPVOID)0x0);
      FUN_180006a30(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

