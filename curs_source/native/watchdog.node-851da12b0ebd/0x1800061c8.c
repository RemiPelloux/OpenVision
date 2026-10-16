
/* Address: 0x1800061c8; Evidence: ev_c64cc0a6565d6ae2be3dd2b11b84ddd5421850c27df3771d91ebaa57106b3b5e */

/* Library Function - Single Match
    _invoke_watson
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
_invoke_watson(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5)

{
  code *pcVar1;
  BOOL BVar2;
  HANDLE hProcess;
  undefined1 *puVar3;
  undefined1 auStack_28 [8];
  undefined1 auStack_20 [32];
  
  puVar3 = auStack_28;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(5);
    puVar3 = auStack_20;
  }
  *(undefined8 *)(puVar3 + -8) = 0x1800061f6;
  FUN_180005edc(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x1800061fc;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x000180006208. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}

