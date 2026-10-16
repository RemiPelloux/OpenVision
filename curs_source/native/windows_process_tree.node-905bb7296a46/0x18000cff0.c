
/* Address: 0x18000cff0; Evidence: ev_c022987670fe59694dcf6d7a52abf184f38c1fdbf6c0f28af32964fa5531e0a2 */

undefined8 thunk_FUN_18000cda8(void)

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

