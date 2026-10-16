
/* Address: 0x1800059c0; Evidence: ev_de6e548227680941368df8c65bccbe35c597ab5da714cfd7350453dc8e18beef */

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
    FUN_180009084(0x16);
  }
  if ((DAT_180019080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x180005a0b;
    FUN_180005c0c(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x180005a15;
  FUN_180004f5c(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

