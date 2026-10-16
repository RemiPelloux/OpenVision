
/* Address: 0x18000b980; Evidence: ev_25cb3b4fed2b8e2e849c743bd71657da5ee8fb67b8deb72da14c484e2a098e7f */

undefined8 thunk_FUN_18000b738(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180022418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_18000e4d8();
    if (pcVar2 == (char *)0x0) {
      FUN_18000c960((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000b7ac(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180022418;
        puVar1 = DAT_180022430;
      }
      DAT_180022430 = puVar1;
      DAT_180022418 = puVar4;
      FUN_18000c960((LPVOID)0x0);
      FUN_18000c960(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

