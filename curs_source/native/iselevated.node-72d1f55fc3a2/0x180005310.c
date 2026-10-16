
/* Address: 0x180005310; Evidence: ev_8eeab50c6c5d2d7733896a03d592540797c9547a68a76e6bd716ce5356222430 */

undefined8 FUN_180005310(void)

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

