
/* Address: 0x18000bc00; Evidence: ev_14daa765351f24ac66c9fe409e1abedbc55f75ae156577b85d027f27c33cb3db */

undefined8 thunk_FUN_18000b9b8(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180023418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_18000e758();
    if (pcVar2 == (char *)0x0) {
      FUN_18000cbe0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000ba2c(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180023418;
        puVar1 = DAT_180023430;
      }
      DAT_180023430 = puVar1;
      DAT_180023418 = puVar4;
      FUN_18000cbe0((LPVOID)0x0);
      FUN_18000cbe0(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

