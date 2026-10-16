
/* Address: 0x180010264; Evidence: ev_61e8d59048d42fc1fba0fef1524a06c6d56bc61bf2842423c34672df77903b5b */

undefined8 FUN_180010264(void)

{
  undefined8 *puVar1;
  LPSTR pCVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180029548 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pCVar2 = FUN_18001324c();
    if (pCVar2 == (LPSTR)0x0) {
      FUN_1800116e0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_1800102d8(pCVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180029548;
        puVar1 = DAT_180029560;
      }
      DAT_180029560 = puVar1;
      DAT_180029548 = puVar4;
      FUN_1800116e0((LPVOID)0x0);
      FUN_1800116e0(pCVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

