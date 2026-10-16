
/* Address: 0x18000bfcc; Evidence: ev_da5f1632ce64a0efc1a0f27d78ea69a4819a36691ad2a58692f1f353bd49c1fc */

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
    FUN_18000f214(0x16);
  }
  if ((DAT_180022080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000c017;
    FUN_18000ad30(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000c021;
  FUN_18000b604(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

