
/* Address: 0x18000bd4c; Evidence: ev_70e0ed154b73123cb747cbf76cb7a92a2199c2c43a85d93859ed99e092b8e3db */

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
    FUN_18000ef94(0x16);
  }
  if ((DAT_180021080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x18000bd97;
    FUN_18000aab0(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x18000bda1;
  FUN_18000b384(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

