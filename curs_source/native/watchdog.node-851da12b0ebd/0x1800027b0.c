
/* Address: 0x1800027b0; Evidence: ev_ae49b70506b102243b2af05faa6571de856b8fcc2d189b0e3a164eaf003d5ea6 */

void FUN_1800027b0(void)

{
  undefined *puVar1;
  
  if (DAT_18001a070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_18001a070);
    __vcrt_FlsSetValue(DAT_18001a070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001b090)) {
      thunk_FUN_180006d00(puVar1);
    }
  }
  return;
}

