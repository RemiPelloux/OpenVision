
/* Address: 0x180005c90; Evidence: ev_d18b6f271366899654c5ad3336ae5f56143b095d640f563e89fc9fb6c8580b14 */

/* Library Function - Single Match
    abort
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl abort(void)

{
  code *pcVar1;
  BOOL BVar2;
  longlong lVar3;
  undefined1 *puVar4;
  undefined1 auStack_28 [8];
  undefined1 auStack_20 [32];
  
  puVar4 = auStack_28;
  lVar3 = __acrt_get_sigabrt_handler();
  if (lVar3 != 0) {
    FUN_180009354(0x16);
  }
  if ((DAT_18001a080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x180005cdb;
    FUN_180005edc(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x180005ce5;
  FUN_180005028(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

