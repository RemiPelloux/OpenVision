
/* Address: 0x180010afc; Evidence: ev_d5c3d6581dbf43490004fdd37adac273f4af977ca38fcdbfcc97ee6c4ec13d4c */

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
    FUN_180013cf0(0x16);
  }
  if ((DAT_1800280c0 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x180010b47;
    FUN_18000f650(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x180010b51;
  FUN_18000feb0(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

