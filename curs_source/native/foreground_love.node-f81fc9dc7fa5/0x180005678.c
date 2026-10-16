
/* Address: 0x180005678; Evidence: ev_fabbdd1bcca9b4a26d534c4ea01ba47d95a214017c3ea546fb50ef0ce52e87c5 */

undefined8 thunk_FUN_180005430(void)

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

