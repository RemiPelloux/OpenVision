
/* Address: 0x18000cda8; Evidence: ev_b7b45a1dd60fe3e1e29a04d2ecb522b1302de09cad16f232207935a883dda93f */

undefined8 FUN_18000cda8(void)

{
  undefined8 *puVar1;
  LPSTR pCVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_180024418 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pCVar2 = FUN_18000fb48();
    if (pCVar2 == (LPSTR)0x0) {
      FUN_18000dfd0((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_18000ce1c(pCVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_180024418;
        puVar1 = DAT_180024430;
      }
      DAT_180024430 = puVar1;
      DAT_180024418 = puVar4;
      FUN_18000dfd0((LPVOID)0x0);
      FUN_18000dfd0(pCVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}

