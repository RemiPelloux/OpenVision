
/* Address: 0x1800055dc; Evidence: ev_0c1a5eb63cd2736045337774d140688c1769f9e3e0517bf8b4321133dd4e417e */

undefined8 FUN_1800055dc(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001b2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_180008798();
    if (pcVar2 == (char *)0x0) {
      FUN_180006d00((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180005650(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001b2a8;
        puVar1 = DAT_18001b2c0;
      }
      DAT_18001b2c0 = puVar1;
      DAT_18001b2a8 = puVar4;
      FUN_180006d00((LPVOID)0x0);
      FUN_180006d00(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

