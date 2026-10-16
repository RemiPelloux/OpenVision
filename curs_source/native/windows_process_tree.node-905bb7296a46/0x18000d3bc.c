
/* Address: 0x18000d3bc; Evidence: ev_7ddab4fb68f2fd356b4fa8e7edccaecf7d1b32576d6fc48ea8723da67c813389 */

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
    FUN_180010604(0x16);
  }
  if ((DAT_180023080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000d407;
    FUN_18000c120(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000d411;
  FUN_18000c9f4(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

