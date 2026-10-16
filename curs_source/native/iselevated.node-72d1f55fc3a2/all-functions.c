/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_ae0014f880bd36e66baf1908782a80e1f34709b9829cac9383123e6950b560ea */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_180004950(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
    pHVar2 = GetModuleHandleA("libnode.dll");
    if (pHVar2 != (HMODULE)0x0) {
      return pHVar2;
    }
                    /* WARNING: Could not recover jumptable at 0x000180001038. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    pHVar2 = GetModuleHandleA((LPCSTR)0x0);
    return pHVar2;
  }
  return (HMODULE)0x0;
}


/* Address: 0x180001050; Evidence: ev_7cc02f200f3450bc08386f830ec2d8815942b3556bf9d0198010350a900f3c49 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180001050(undefined8 param_1)

{
  BOOL BVar1;
  undefined1 auStackY_98 [32];
  BOOL local_38 [2];
  PSID local_30;
  undefined8 local_28;
  _SID_IDENTIFIER_AUTHORITY local_20;
  ulonglong local_18;
  
  local_18 = DAT_180019000 ^ (ulonglong)auStackY_98;
  local_20.Value[4] = '\0';
  local_20.Value[5] = '\x05';
  local_38[0] = 0;
  local_30 = (PSID)0x0;
  local_20.Value[0] = '\0';
  local_20.Value[1] = '\0';
  local_20.Value[2] = '\0';
  local_20.Value[3] = '\0';
  BVar1 = AllocateAndInitializeSid(&local_20,'\x02',0x20,0x220,0,0,0,0,0,0,&local_30);
  if (BVar1 != 0) {
    CheckTokenMembership((HANDLE)0x0,local_30,local_38);
  }
  if (local_30 != (PSID)0x0) {
    FreeSid(local_30);
  }
  napi_get_boolean(param_1,local_38[0] != 0,&local_28);
  return local_28;
}


/* Address: 0x180001120; Evidence: ev_873875c815d274a5cdaea0bc6099c553a067599de07fb1579b261fa15ed93d05 */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x1120  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x180001130; Evidence: ev_2075bf4918e23151a8d2f49f1e626774a0d3b38d8370adc3324039d19a358bfa */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  undefined8 local_res10 [3];
  
                    /* 0x1130  1  napi_register_module_v1 */
  napi_create_function(param_1,"isElevated",0xffffffffffffffff,FUN_180001050,0,local_res10);
  napi_set_named_property(param_1,param_2,"isElevated",local_res10[0]);
  return param_2;
}


/* Address: 0x180001194; Evidence: ev_28589c0f1830cec79fbfd3a8c69570d8625e863fba946a71dbd42faeb8e94c0b */

void FUN_180001194(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  undefined8 in_XMM3_Qa;
  
  UNRECOVERED_JUMPTABLE = FUN_18000d470(&ImgDelayDescr_18001846c.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x00018000120b. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_2,param_3,in_XMM3_Qa);
  return;
}


/* Address: 0x18000120d; Evidence: ev_506fa3a32a9c3c03e3f6eeb89d5ba3f8086a95c277f499d0a2e85ba3b42aacda */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180001194(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001219; Evidence: ev_85e295f8050fe16f47324277546265c0e1fb62ecda65ac7929e182de8c334839 */

void DelayLoad_napi_get_boolean
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180001194(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001225; Evidence: ev_17b67ff5aa3a788c59769a0333fd54dd173f8f5fcc0ad910c699a446497915a8 */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_180001194(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001250; Evidence: ev_4e9ffbe9e2c08c95ac0716fdd996e7be65a71d2ffb86c9fd046a983e057b168f */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180019000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180001610();
  return;
}


/* Address: 0x180001270; Evidence: ev_43fee21d07d922ba5b702387972569c4970228e9f72d0295bd2fb9b23b6eaf6b */

ulonglong FUN_180001270(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800013d8(param_3 != 0);
    return uVar2;
  }
  if (param_2 != 1) {
    if (param_2 == 2) {
      bVar1 = __scrt_dllmain_crt_thread_attach();
    }
    else {
      if (param_2 != 3) {
        return 1;
      }
      bVar1 = FUN_180001908();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800012c0(param_1,param_3);
  return uVar2;
}


/* Address: 0x1800012c0; Evidence: ev_7d68ffd92ae5541d89b64610573c7859d029d891a8f6d515697ef3f070825782 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800012c0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_1800019c4(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001a030 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001b88(7);
    }
    DAT_18001a030 = 1;
    bVar2 = FUN_1800018c8();
    if (bVar2) {
      FUN_180001cd4();
      FUN_180001810();
      FUN_18000183c();
      uVar4 = FUN_180004b18((undefined8 *)&DAT_18000f2e0,(undefined8 *)&DAT_18000f300);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180004ae0((undefined8 *)&DAT_18000f2d0,(undefined8 *)&DAT_18000f2d8);
        DAT_18001a030 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180001b74();
      if ((*plVar5 != 0) && (uVar6 = FUN_180001a8c((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_180019a98 = DAT_180019a98 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800013d8; Evidence: ev_3dd86f6f67362489c31dd5b73d113d2f2e824836c9c24ea9cc83c903b247a061 */

ulonglong FUN_1800013d8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_180019a98 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_180019a98 = DAT_180019a98 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_18001a030 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180001b88(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180001820();
    FUN_180001d10();
    DAT_18001a030 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_1800019b0();
  }
  return uVar2;
}


/* Address: 0x18000145c; Evidence: ev_7b3f45628bb304782b67c03fa05fa18cbe70335fe833b31b3a6eb88bed1ba4a2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180001519) */
/* WARNING: Removing unreachable block (ram,0x0001800014aa) */
/* WARNING: Removing unreachable block (ram,0x000180001558) */

int FUN_18000145c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180019a98 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180001270(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_180001808();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_180001808();
      FUN_1800013d8(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180001270(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x180001590; Evidence: ev_9cd0f009710b6510ff77825bdb370808fd79aa17b9576ce0527b0f55a4c16e79 */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_180001758();
  }
  FUN_18000145c(param_1,param_2,param_3);
  return;
}


/* Address: 0x1800015d0; Evidence: ev_c4ff77a9833127956c9ab7f06085048c47a3d2e56f7f4bdbf767a0410882b6d0 */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x0001800015fd. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x180001610; Evidence: ev_5f687da7faa4d058b403440994a16d8709cb86737b9c48cfd883eb3ac639c671 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001610(void)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_38 [8];
  undefined1 auStack_30 [48];
  
  puVar3 = auStack_38;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(2);
    puVar3 = auStack_30;
  }
  *(undefined8 *)(puVar3 + -8) = 0x18000163b;
  FUN_1800016e4((PCONTEXT)&DAT_180019b40);
  _DAT_180019ab0 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180019bd8 = puVar3 + 0x40;
  _DAT_180019bc0 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180019aa0 = 0xc0000409;
  _DAT_180019aa4 = 1;
  _DAT_180019ab8 = 1;
  DAT_180019ac0 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180019000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180019040;
  *(undefined8 *)(puVar3 + -8) = 0x1800016dd;
  DAT_180019c38 = _DAT_180019ab0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_18000f458);
  return;
}


/* Address: 0x1800016e4; Evidence: ev_2f87d45286165faac8ab1e903b8c6ad7c975ce530dd9cc5a57aacf070be816f6 */

void FUN_1800016e4(PCONTEXT param_1)

{
  DWORD64 ControlPc;
  PRUNTIME_FUNCTION FunctionEntry;
  int iVar1;
  DWORD64 local_res8;
  ulonglong local_res10;
  PVOID local_res18 [2];
  
  RtlCaptureContext();
  ControlPc = param_1->Rip;
  iVar1 = 0;
  do {
    FunctionEntry = RtlLookupFunctionEntry(ControlPc,&local_res8,(PUNWIND_HISTORY_TABLE)0x0);
    if (FunctionEntry == (PRUNTIME_FUNCTION)0x0) {
      return;
    }
    RtlVirtualUnwind(0,local_res8,ControlPc,FunctionEntry,param_1,local_res18,&local_res10,
                     (PKNONVOLATILE_CONTEXT_POINTERS)0x0);
    iVar1 = iVar1 + 1;
  } while (iVar1 < 2);
  return;
}


/* Address: 0x180001758; Evidence: ev_2b754707a1406aff8f534ffa4bd2a1e488f2eb270c4cc139d87b9996801750af */

void FUN_180001758(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_180019000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_180019000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_180019000 == 0x2b992ddfa232) {
      DAT_180019000 = 0x2b992ddfa233;
    }
  }
  DAT_180019040 = ~DAT_180019000;
  return;
}


/* Address: 0x180001808; Evidence: ev_e5eeaac34672a8f44bdec1cfb3a9ae7f2fed34e2f5000df26e355a39a1734188 */

undefined8 FUN_180001808(void)

{
  return 1;
}


/* Address: 0x180001810; Evidence: ev_1b6311605ac1ea2de3ea49cb035558a8e2c5b72fdf3bc8f9f6ac8748b44102f6 */

void FUN_180001810(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180001817. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_18001a010);
  return;
}


/* Address: 0x180001820; Evidence: ev_7dcffaa26d2e4664636edc215b909db7104abb04ac670f8fe2fc0d9c24e961b8 */

void FUN_180001820(void)

{
  FUN_180002238((PSLIST_HEADER)&DAT_18001a010);
  return;
}


/* Address: 0x18000182c; Evidence: ev_5793811d1709a6bce49099899d593a884ddfa332037e1ab7722b9a082b2159da */

undefined * FUN_18000182c(void)

{
  return &DAT_18001a020;
}


/* Address: 0x180001834; Evidence: ev_89c78b48bbcc0d085930633b1864a2581ca9048863a26aa2fe1e96f7ce84d41b */

undefined * FUN_180001834(void)

{
  return &DAT_18001a028;
}


/* Address: 0x18000183c; Evidence: ev_9890c70d4f769119b1bbc9350b69038e473a32ed8423ffdd97bd35ff1c625587 */

void FUN_18000183c(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_18000182c();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180001834();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x180001858; Evidence: ev_4a56d03f3f8ca45b738f3936ddb662e3290c1912d896a2457637742df4f62434 */

/* Library Function - Single Match
    __scrt_acquire_startup_lock
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong __scrt_acquire_startup_lock(void)

{
  void *pvVar1;
  bool bVar2;
  undefined7 extraout_var;
  ulonglong uVar4;
  void *pvVar3;
  
  bVar2 = __scrt_is_ucrt_dll_in_use();
  pvVar3 = (void *)CONCAT71(extraout_var,bVar2);
  if ((int)pvVar3 == 0) {
LAB_180001886:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_18001a038 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_18001a038;
        pvVar1 = DAT_18001a038;
      }
      DAT_18001a038 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_180001886;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x180001894; Evidence: ev_7c740923105ae5e2d2a49267a19d3a9309b25fcd0ee4810b059d6298cd3f5a6b */

/* Library Function - Single Match
    __scrt_dllmain_after_initialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __scrt_dllmain_after_initialize_c(void)

{
  bool bVar1;
  undefined7 extraout_var;
  undefined8 uVar2;
  ulonglong uVar3;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((int)CONCAT71(extraout_var,bVar1) == 0) {
    uVar2 = FUN_180001808();
    uVar3 = FUN_180005190((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_180005310();
  }
  else {
    uVar2 = FUN_180001d54();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x1800018c8; Evidence: ev_ab88f14ec7da4483bc1d7157942e0c27cf7bcb2a2e5a57c376eff28a34758307 */

bool FUN_1800018c8(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180001a00(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x1800018e0; Evidence: ev_49f073d94daa98a15ae0e8383dd828ea4d4547e25e1db10d3025a5624d2d1a6c */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_18000228c();
  if (bVar1) {
    bVar1 = FUN_180005890();
    if (bVar1) {
      return 1;
    }
    FUN_1800022a0();
  }
  return 0;
}


/* Address: 0x180001908; Evidence: ev_187d596179bfbb177dc9654ebfdd85524040b7fccef97b9c3418e3445c905143 */

undefined1 FUN_180001908(void)

{
  FUN_1800058a4();
  FUN_1800022a0();
  return 1;
}


/* Address: 0x180001920; Evidence: ev_0c56289eef494a3c29daf4841de5972b8e72f233fe90ed63d3719f8769965d45 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* Library Function - Single Match
    __scrt_dllmain_exception_filter
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_dllmain_exception_filter
               (undefined8 param_1,int param_2,undefined8 param_3,undefined *param_4,int param_5,
               undefined8 param_6)

{
  bool bVar1;
  undefined7 extraout_var;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if (((int)CONCAT71(extraout_var,bVar1) == 0) && (param_2 == 1)) {
    (*(code *)param_4)(param_1,0,param_3);
  }
  _seh_filter_dll(param_5,param_6);
  return;
}


/* Address: 0x180001980; Evidence: ev_efd6ea12a8da8e9b110aa5e4cc1834913fc87ac9ee2464da23d7dadc0d1ebe76 */

/* Library Function - Single Match
    __scrt_dllmain_uninitialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_dllmain_uninitialize_c(void)

{
  bool bVar1;
  undefined3 extraout_var;
  int iVar2;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if (CONCAT31(extraout_var,bVar1) != 0) {
    FUN_1800056b4(&DAT_18001a048);
    return;
  }
  iVar2 = FUN_180004f68();
  if (iVar2 == 0) {
    FUN_180004f4c();
  }
  return;
}


/* Address: 0x1800019b0; Evidence: ev_fe588e167b553352c1b60ad9cfd77a503b6064aa9715da48e91829250eb5b0c5 */

void FUN_1800019b0(void)

{
  FUN_1800058ec();
  FUN_1800022cc();
  return;
}


/* Address: 0x1800019c4; Evidence: ev_269955c63b3fa69d80c2d758f316dcb9a1a0468ca9123c96f4f6f045d4f9625a */

ulonglong FUN_1800019c4(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001a040 = 1;
  }
  FUN_180001d54();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000587c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180001a00; Evidence: ev_13317bfcd4edf61a4feaba91b87a92ab8cd1cba50e002f281072f35205c7960b */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001a00(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_18001a041 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001b88(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_18001a048 = 0xffffffffffffffff;
      uRam000000018001a050 = 0xffffffffffffffff;
      _DAT_18001a058 = 0xffffffffffffffff;
      _DAT_18001a060 = 0xffffffffffffffff;
      uRam000000018001a068 = 0xffffffffffffffff;
      _DAT_18001a070 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_18001a048);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_18001a060), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_18001a041 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180001a8c; Evidence: ev_74d73aeee83a4ac1691a97450d3d29a024b6d062f0c54027b57c17478af726d1 */

/* WARNING: Removing unreachable block (ram,0x000180001b19) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180001a8c(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000218; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000358;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180001b02;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180001b02:
  if (pIVar3 == (IMAGE_SECTION_HEADER *)0x0) {
    uVar1 = uVar1 & 0xffffffffffffff00;
  }
  else {
    uVar2 = (uint7)(uVar1 >> 8);
    if ((int)pIVar3->Characteristics < 0) {
      uVar1 = (ulonglong)uVar2 << 8;
    }
    else {
      uVar1 = CONCAT71(uVar2,1);
    }
  }
  return uVar1;
}


/* Address: 0x180001b24; Evidence: ev_2581af563943e12b2e5fb654e3f71624421dce5343b66e42959413462ca7e5ad */

/* Library Function - Single Match
    __scrt_release_startup_lock
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __scrt_release_startup_lock(char param_1)

{
  bool bVar1;
  undefined3 extraout_var;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((CONCAT31(extraout_var,bVar1) != 0) && (param_1 == '\0')) {
    LOCK();
    DAT_18001a038 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x180001b48; Evidence: ev_600d23ea273dd81b65641c954e10b086937484638676f06df8df485074b59421 */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_18001a040 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180001b74; Evidence: ev_025704a62aefbb6ccea1f05eb212bc52fdb75ea325ae31eef1477990a28db28e */

undefined * FUN_180001b74(void)

{
  return &DAT_18001ab30;
}


/* Address: 0x180001b7c; Evidence: ev_4aab6cf3055995345b396a136e7c1e87002799bfa2f60db4dc4f044e49ffdff5 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001b7c(void)

{
  _DAT_18001a078 = 0;
  return;
}


/* Address: 0x180001b88; Evidence: ev_5dfe6f74c52bfdfd4d1792ad4af1bf3150771598872308087a87661dc25fb4c7 */

void FUN_180001b88(undefined4 param_1)

{
  code *pcVar1;
  BOOL BVar2;
  LONG LVar3;
  PRUNTIME_FUNCTION FunctionEntry;
  undefined1 *puVar4;
  undefined8 unaff_retaddr;
  DWORD64 local_res10;
  undefined1 local_res18 [8];
  undefined1 local_res20 [8];
  undefined1 auStack_5c8 [8];
  undefined1 auStack_5c0 [232];
  undefined1 local_4d8 [152];
  undefined1 *local_440;
  DWORD64 local_3e0;
  
  puVar4 = auStack_5c8;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(param_1);
    puVar4 = auStack_5c0;
  }
  *(undefined8 *)(puVar4 + -8) = 0x180001bbc;
  FUN_180001b7c();
  *(undefined8 *)(puVar4 + -8) = 0x180001bcd;
  FUN_18000dad0((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x180001bd7;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x180001bf1;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x180001c35;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x180001c67;
  FUN_18000dad0((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x180001c89;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x180001ca6;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x180001cb1;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x180001cc2;
    FUN_180001b7c();
  }
  return;
}


/* Address: 0x180001cd4; Evidence: ev_4e3eae552f498e46808f51f14a26ea20c679203b839af7fccbdaa643fb7e90d3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001cd4(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017568; puVar1 < &DAT_180017568; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180001d10; Evidence: ev_d93eb0448432bc4e39b32a3759164a35a68ee36b0c902f25983860174f2f9b93 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001d10(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017578; puVar1 < &DAT_180017578; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180001d50; Evidence: ev_25e4de8c3869474dc6ce8197ba3355d299262a1ee60fd79f2620f940c14e9d3a */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x180001d54; Evidence: ev_e58e0b80148c33e525c5d89c0d1e9e9dca559ffe1b6d37ea1552ebc5c6704bf2 */

/* WARNING: Removing unreachable block (ram,0x000180001e45) */
/* WARNING: Removing unreachable block (ram,0x000180001e35) */
/* WARNING: Removing unreachable block (ram,0x000180001e10) */
/* WARNING: Removing unreachable block (ram,0x000180001d8e) */
/* WARNING: Removing unreachable block (ram,0x000180001d6c) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001d54(void)

{
  int *piVar1;
  uint *puVar2;
  int *piVar3;
  longlong lVar4;
  uint uVar5;
  byte bVar6;
  ulonglong uVar7;
  uint uVar8;
  ulonglong uVar9;
  uint uVar10;
  uint uVar11;
  ulonglong uVar12;
  ulonglong in_XCR0;
  
  piVar1 = (int *)cpuid_basic_info(0);
  puVar2 = (uint *)cpuid_Version_info(1);
  uVar5 = puVar2[3];
  if ((piVar1[2] == 0x49656e69 && piVar1[3] == 0x6c65746e) && piVar1[1] == 0x756e6547) {
    uVar8 = *puVar2 & 0xfff3ff0;
    DAT_180019060 = 0x8000;
    DAT_180019068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_18001a080 = DAT_18001a080 | 1;
    }
  }
  uVar8 = 0;
  uVar10 = 0;
  uVar11 = 0;
  uVar12 = 0;
  if (6 < *piVar1) {
    piVar3 = (int *)cpuid_Extended_Feature_Enumeration_info(7);
    uVar8 = piVar3[1];
    uVar10 = piVar3[2];
    if ((uVar8 >> 9 & 1) != 0) {
      DAT_18001a080 = DAT_18001a080 | 2;
    }
    if (0 < *piVar3) {
      lVar4 = cpuid_Extended_Feature_Enumeration_info(7);
      uVar11 = *(uint *)(lVar4 + 8);
    }
    if (0x23 < *piVar1) {
      lVar4 = cpuid(0x24);
      uVar12 = (ulonglong)*(uint *)(lVar4 + 4);
    }
  }
  DAT_180019058 = 1;
  DAT_18001905c = 2;
  uVar9 = DAT_180019050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_180019058 = 2;
    DAT_18001905c = 6;
    uVar9 = DAT_180019050 & 0xffffffffffffffee;
  }
  DAT_180019050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_180019058 = 3;
      uVar7 = DAT_180019050;
      uVar5 = DAT_18001905c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_180019058 = 5;
        uVar7 = DAT_180019050 & 0xfffffffffffffffd;
        uVar5 = DAT_18001905c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18001905c = DAT_18001905c | 0x68;
          DAT_180019058 = 6;
          uVar7 = DAT_180019050 & 0xffffffffffffffd9;
          uVar5 = DAT_18001905c;
        }
      }
      DAT_18001905c = uVar5;
      DAT_180019050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_180019050 = DAT_180019050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_18001a07c = (uint)uVar12 & 0x400ff;
        DAT_180019050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_180019050;
        if (1 < (byte)_DAT_18001a07c) {
          DAT_180019050 = DAT_180019050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_180019050 = DAT_180019050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x180001fec; Evidence: ev_e515c862b246882fd9822b28772e44e35540e1d4a8e5eeddcecbc48a6dba45c9 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001ab2c != 0;
}


/* Address: 0x180002000; Evidence: ev_f4be45794e8d7390f2b36b4433c7e19f33129f71f02aabb0c8e82f7e39ee238a */

undefined8 FUN_180002000(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  uint uVar1;
  longlong lVar2;
  uint *puVar3;
  int iVar4;
  ulonglong uVar5;
  uint uVar6;
  ulonglong uVar7;
  uint uVar8;
  ulonglong uVar9;
  ulonglong uVar10;
  PEXCEPTION_RECORD local_38;
  longlong local_30;
  
  __except_validate_context_record(param_3);
  lVar2 = param_4[1];
  puVar3 = (uint *)param_4[7];
  uVar10 = *param_4 - lVar2;
  uVar8 = *(uint *)(param_4 + 9);
  local_38 = param_1;
  local_30 = param_3;
  if ((param_1->ExceptionFlags & 0x66) == 0) {
    for (; uVar8 < *puVar3; uVar8 = uVar8 + 1) {
      uVar5 = (ulonglong)uVar8;
      if (((puVar3[uVar5 * 4 + 1] <= uVar10) && (uVar10 < puVar3[uVar5 * 4 + 2])) &&
         (puVar3[uVar5 * 4 + 4] != 0)) {
        if (puVar3[uVar5 * 4 + 3] != 1) {
          iVar4 = (*(code *)((ulonglong)puVar3[uVar5 * 4 + 3] + lVar2))(&local_38,param_2);
          if (iVar4 < 0) {
            return 0;
          }
          if (iVar4 < 1) goto LAB_18000212e;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_18000d7c0(0x18000f480), (int)uVar5 != 0)) {
          FUN_1800022e0((int *)param_1);
        }
        FUN_180002460();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_180002490();
      }
LAB_18000212e:
    }
  }
  else {
    uVar5 = param_4[4] - lVar2;
    for (; uVar1 = *puVar3, uVar8 < uVar1; uVar8 = uVar8 + 1) {
      uVar9 = (ulonglong)uVar8;
      if ((puVar3[uVar9 * 4 + 1] <= uVar10) && (uVar10 < puVar3[uVar9 * 4 + 2])) {
        if ((param_1->ExceptionFlags & 0x20) != 0) {
          uVar7 = 0;
          if (uVar1 != 0) {
            do {
              if ((((puVar3[uVar7 * 4 + 1] <= uVar5) && (uVar5 < puVar3[uVar7 * 4 + 2])) &&
                  (puVar3[uVar7 * 4 + 4] == puVar3[uVar9 * 4 + 4])) &&
                 (puVar3[uVar7 * 4 + 3] == puVar3[uVar9 * 4 + 3])) break;
              uVar6 = (int)uVar7 + 1;
              uVar7 = (ulonglong)uVar6;
            } while (uVar6 < uVar1);
          }
          if ((uint)uVar7 != *puVar3) {
            return 1;
          }
        }
        if (puVar3[((ulonglong)uVar8 + 1) * 4] == 0) {
          *(uint *)(param_4 + 9) = uVar8 + 1;
          (*(code *)((ulonglong)puVar3[(ulonglong)uVar8 * 4 + 3] + lVar2))
                    (CONCAT71((int7)((ulonglong)uVar8 * 2 >> 8),1));
        }
        else if ((uVar5 == puVar3[((ulonglong)uVar8 + 1) * 4]) &&
                ((param_1->ExceptionFlags & 0x20) != 0)) {
          return 1;
        }
      }
    }
  }
  return 1;
}


/* Address: 0x180002220; Evidence: ev_a064afbe571942079595619bbe23dc9050e303a25b0e85a74e2b198428c4cd42 */

int FUN_180002220(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x180002238; Evidence: ev_1551bd0d414fe5f20ffa0b9781c2d47e4a3a00f9fe6638f9d34be42f780f1747 */

void FUN_180002238(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180006a30(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x180002264; Evidence: ev_50bc88dbb6a0d8f05b30fc48da1cc27b2906bca1f32a5d2900a4de2e4d72921c */

/* Library Function - Single Match
    __vcrt_initialize
   
   Library: Visual Studio 2019 Release */

ulonglong __vcrt_initialize(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  undefined4 extraout_var;
  
  uVar2 = __vcrt_initialize_locks();
  if ((char)uVar2 != '\0') {
    uVar1 = __vcrt_initialize_ptd();
    if ((char)uVar1 != '\0') {
      return CONCAT71((int7)(CONCAT44(extraout_var,uVar1) >> 8),1);
    }
    uVar2 = __vcrt_uninitialize_locks();
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x18000228c; Evidence: ev_85de0cbf2e8e95d94f1e207e410f1f6a35a32511b8e0ae30f07cf4c09cdaf1f2 */

bool FUN_18000228c(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180002554();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x1800022a0; Evidence: ev_a96a0d265bb998a1c23ed95ba8e7f37faf3e6010a908a5642f8f63a579548a47 */

undefined1 FUN_1800022a0(void)

{
  FUN_1800024f0();
  return 1;
}


/* Address: 0x1800022b0; Evidence: ev_a6b00144a1305ed5601c1f0280291bfe97cf50f411cf1dbdcd6d943e786b4902 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180002668();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800022cc; Evidence: ev_0e7a35c4d8fa8cb9c542ea1a9bbe50089a4cccbaeada94f100f014a576f808bc */

undefined1 FUN_1800022cc(void)

{
  FUN_180002668();
  return 1;
}


/* Address: 0x1800022e0; Evidence: ev_5afd9af35d703497082d33fb092c53273d216aef5d81df5cc30c1d9b1450708b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800022e0(int *param_1)

{
  byte *pbVar1;
  
  if (((((param_1 != (int *)0x0) && (*param_1 == -0x1f928c9d)) && (param_1[6] == 4)) &&
      ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
     (pbVar1 = *(byte **)(param_1 + 0xc), pbVar1 != (byte *)0x0)) {
    if (*(int *)(pbVar1 + 4) == 0) {
      if (((*pbVar1 & 0x10) != 0) && ((longlong *)**(longlong **)(param_1 + 10) != (longlong *)0x0))
      {
        (**(code **)(*(longlong *)**(longlong **)(param_1 + 10) + 0x10))();
      }
    }
    else {
      FUN_180002354(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x180002354; Evidence: ev_99f7a039c5d05a16a89fa5f2c9a65f6acfa591e5c7cde941c4ef2daa02c72988 */

void FUN_180002354(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x000180002354. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180002358; Evidence: ev_6f20d705345a23b8f3f738d9b0ffec862e9b32b9ac637f6d500a98386f247c3f */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180002538();
  plVar2 = *(longlong **)(lVar1 + 0x58);
  while( true ) {
    if (plVar2 == (longlong *)0x0) {
      return 1;
    }
    if (*plVar2 == param_1) break;
    plVar2 = (longlong *)plVar2[1];
  }
  return 0;
}


/* Address: 0x180002388; Evidence: ev_3efaf39c416d785821687419066377dc4bc6be97137201503f6b99785eac9fe3 */

longlong FUN_180002388(longlong param_1,int *param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = param_2[1];
  lVar2 = *param_2 + param_1;
  if (-1 < iVar1) {
    lVar2 = lVar2 + (longlong)*(int *)((longlong)param_2[2] + *(longlong *)(iVar1 + param_1)) +
                    (longlong)iVar1;
  }
  return lVar2;
}


/* Address: 0x1800023b0; Evidence: ev_17c52bbc2e81e0d56f21f5b98b3becc950952ebc43b28b2bc44d1be699ac5cf5 */

undefined8 FUN_1800023b0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180002538();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180002538();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180002538();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180002538();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_1800058fc();
  }
  return 0;
}


/* Address: 0x180002418; Evidence: ev_ac6e260a4959a751293fc65b1b6bee6e466e3e6341cdff425ac8ad29a5bd1d49 */

void Unwind_180002418(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_1800058fc();
}


/* Address: 0x180002460; Evidence: ev_bc8d347427e766462084bc7e031b9bd2abe1921bc4b1a4730e95f0a65d45f831 */

void FUN_180002460(void)

{
  FUN_180002480();
  return;
}


/* Address: 0x180002480; Evidence: ev_8c8577849c47b22f963ff8dc296a0484a39448583b7084b68f6671bbab1ba635 */

void FUN_180002480(void)

{
  return;
}


/* Address: 0x180002490; Evidence: ev_f74ffdaae04b0bac32cb7e0f57e45e4ee6f372cf4f684b33d4bed7c313594594 */

void FUN_180002490(void)

{
  return;
}


/* Address: 0x180002494; Evidence: ev_d040ea2d2f5198a5157bc3ffb52166a92448cab525dc7215e310dae76274b157 */

/* WARNING: Removing unreachable block (ram,0x0001800024a7) */
/* WARNING: Removing unreachable block (ram,0x0001800024bd) */
/* WARNING: Removing unreachable block (ram,0x0001800024c3) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x1800024d0; Evidence: ev_e7a071e50dd798b0a20e5ecb7e47714d768e5b62ad22c5bf7d35aeb57e901fdc */

void FUN_1800024d0(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_18001a090)) {
    thunk_FUN_180006a30(param_1);
  }
  return;
}


/* Address: 0x1800024f0; Evidence: ev_c91026d855b9fce2dec22f8c2a602d5d199d8ed5ec95f4e053d6e84f399de06e */

void FUN_1800024f0(void)

{
  undefined *puVar1;
  
  if (DAT_180019070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_180019070);
    __vcrt_FlsSetValue(DAT_180019070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001a090)) {
      thunk_FUN_180006a30(puVar1);
    }
  }
  return;
}


/* Address: 0x180002538; Evidence: ev_24631b04f6559dcd14f6a4d8fd70a9301f84adb12973749f6856d2e67426a897 */

void FUN_180002538(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180002554();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180002554; Evidence: ev_2213ad6037a4cbbf5724be21277108b4f4744905af33810fe1ec07404a55be98 */

LPVOID FUN_180002554(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_180019070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_180019070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_180019070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_180019070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_180019070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_180006a30(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180002620; Evidence: ev_3774a212d800a087497e00b0258cf8f73c4fb65f92ab6e582794878af56d4477 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_1800024d0);
  DAT_180019070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_18001a090);
    if (iVar2 != 0) {
      _DAT_18001a108 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180002668();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180002668; Evidence: ev_c63e345cd604c91b32edf1d440f0920df05badb8f4d6d2e9069b1f7b790ae473 */

undefined1 FUN_180002668(void)

{
  if (DAT_180019070 != -1) {
    __vcrt_FlsFree(DAT_180019070);
    DAT_180019070 = -1;
  }
  return 1;
}


/* Address: 0x180002690; Evidence: ev_1c8e0958f33d81189efb4fb6e3c1a12b1f5d7584428b90fd216d2d035957b73f */

/* Library Function - Single Match
    __vcrt_initialize_locks
   
   Library: Visual Studio 2017 Release */

undefined8 __vcrt_initialize_locks(void)

{
  undefined8 uVar1;
  ulonglong uVar2;
  uint uVar3;
  
  uVar2 = 0;
  do {
    uVar1 = __vcrt_InitializeCriticalSectionEx
                      ((LPCRITICAL_SECTION)(&DAT_18001a110 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_18001a138 = DAT_18001a138 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x1800026d8; Evidence: ev_483502fdcbb459daad61f12baa3451b25c11b09cde1579521017f728ad4b8023 */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_18001a138;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_18001a110 + uVar1 * 0x28));
    DAT_18001a138 = DAT_18001a138 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180002710; Evidence: ev_5e440dfce8959a63d3eeb13b8796980e9c404088af985d27c1f6bce3d29eb31f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180002710(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180002538();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180002764; Evidence: ev_bdf6030869b872a2e55ca61040280fd53c80ded07688e1ebac32a4a1fd8cf648 */

longlong FUN_180002764(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180002538();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x1800027c8; Evidence: ev_3ffce5edc46faeb21bdb5da68a840844f6b458a6c9a59794be87e5c6e27df909 */

bool FUN_1800027c8(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_18000306c(param_2,param_1);
  lVar2 = FUN_180002764(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x1800027f4; Evidence: ev_47744a1175e628993f66d61b2da71f3c26b11f5186ab1366c696ccc10d874538 */

/* Library Function - Single Match
    public: static void __cdecl __FrameHandler3::FrameUnwindToEmptyState(unsigned __int64 *
   __ptr64,struct _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl
__FrameHandler3::FrameUnwindToEmptyState
          (__uint64 *param_1,_xDISPATCHER_CONTEXT *param_2,_s_FuncInfo *param_3)

{
  int iVar1;
  longlong *plVar2;
  longlong lVar3;
  longlong local_res20;
  
  plVar2 = FUN_180002858((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000306c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180002764((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_1800042b4(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180002858; Evidence: ev_056f8d3141fe91e4715a252f6fcd1030de804a91f4fd2ddf6ec39fd7ed90ac64 */

longlong * FUN_180002858(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

{
  longlong lVar1;
  uint uVar2;
  ulonglong uVar3;
  int iVar4;
  PRUNTIME_FUNCTION p_Var5;
  uint uVar6;
  ulonglong uVar7;
  int *piVar8;
  uint uVar9;
  longlong lVar10;
  ulonglong local_res8;
  
  uVar9 = *(uint *)(param_3 + 0xc);
  iVar4 = FUN_18000306c(param_3,param_2);
  *param_4 = *param_1;
  do {
    do {
      if (uVar9 == 0) {
        return param_4;
      }
      uVar9 = uVar9 - 1;
      uVar3 = param_2[1];
      lVar1 = (longlong)*(int *)(param_3 + 0x10) + (ulonglong)uVar9 * 0x14;
    } while ((iVar4 <= *(int *)(lVar1 + 4 + uVar3)) || (*(int *)(lVar1 + 8 + uVar3) < iVar4));
    p_Var5 = RtlLookupFunctionEntry(*param_2,&local_res8,(PUNWIND_HISTORY_TABLE)0x0);
    uVar7 = 0;
    lVar10 = (longlong)*(int *)(lVar1 + 0x10 + uVar3) + local_res8;
    uVar2 = *(uint *)(lVar1 + 0xc + uVar3);
    if (uVar2 != 0) {
      piVar8 = (int *)(lVar10 + 0xc);
      do {
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x00018000290f;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x00018000290f:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180002944; Evidence: ev_c90ee5568cc12528d4ed9681ca12c8d988691db1ab8ed8d29cbb31fc9ee875a0 */

undefined8 *
FUN_180002944(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
             )

{
  uint uVar1;
  longlong lVar2;
  uint uVar3;
  ulonglong uVar4;
  int iVar5;
  int *piVar6;
  uint uVar7;
  int iVar9;
  ulonglong uVar10;
  int iVar11;
  longlong lVar12;
  ulonglong uVar13;
  undefined4 uStack_3c;
  undefined4 uStack_2c;
  ulonglong uVar8;
  
  uVar3 = *(uint *)(param_5 + 0xc);
  iVar5 = FUN_18000306c(param_5,param_4);
  uVar8 = 0;
  if (uVar3 == 0) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  uVar4 = param_4[1];
  lVar12 = (longlong)*(int *)(param_5 + 0x10);
  iVar9 = -1;
  uVar13 = 0xffffffff;
  uVar7 = uVar3;
  while( true ) {
    uVar1 = uVar7 - 1;
    lVar2 = uVar4 + (ulonglong)uVar1 * 0x14;
    if ((*(int *)(lVar2 + 4 + lVar12) < iVar5) && (iVar5 <= *(int *)(lVar2 + 8 + lVar12))) break;
    uVar10 = uVar8;
    uVar7 = uVar1;
    if (uVar1 == 0) {
LAB_1800029cc:
      piVar6 = (int *)(uVar4 + lVar12);
      do {
        if ((((uVar10 == 0) ||
             ((*(int *)(uVar10 + 4) < *piVar6 && (piVar6[1] <= *(int *)(uVar10 + 8))))) &&
            (*piVar6 <= param_3)) && ((param_3 <= piVar6[1] && (uVar13 = uVar8, iVar9 == -1)))) {
          iVar9 = (int)uVar8;
        }
        uVar7 = (int)uVar8 + 1;
        uVar8 = (ulonglong)uVar7;
        piVar6 = piVar6 + 5;
      } while (uVar7 < uVar3);
      iVar5 = 0;
      if (iVar9 != -1) {
        iVar5 = iVar9;
      }
      iVar11 = 0;
      if (iVar9 != -1) {
        iVar11 = (int)uVar13 + 1;
      }
      *param_1 = param_2;
      param_1[1] = CONCAT44(uStack_3c,iVar5);
      param_1[2] = param_2;
      param_1[3] = CONCAT44(uStack_2c,iVar11);
      return param_1;
    }
  }
  uVar10 = uVar4 + (ulonglong)(uVar7 - 1) * 0x14 + lVar12;
  goto LAB_1800029cc;
}


/* Address: 0x180002a7c; Evidence: ev_ae38aaff2643a268da97b78be66d16e416c4afec3c7e626d32ac860762e2ee69 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180002a7c(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_180019000 ^ (ulonglong)auStackY_e8;
  local_b8.ExceptionCode = 0x80000029;
  local_b8.ExceptionFlags = 1;
  local_b8.ExceptionRecord = (_EXCEPTION_RECORD *)0x0;
  local_b8.ExceptionAddress = (PVOID)0x0;
  local_b8.NumberParameters = 0xf;
  local_b8._28_4_ = 0;
  local_b8.ExceptionInformation[9] = 0;
  local_b8.ExceptionInformation[10]._0_4_ = 0;
  local_b8.ExceptionInformation[10]._4_4_ = 0;
  local_b8.ExceptionInformation[0xb]._0_4_ = 0;
  local_b8.ExceptionInformation[0xb]._4_4_ = 0;
  local_b8.ExceptionInformation[0xc]._0_4_ = 0;
  local_b8.ExceptionInformation[0xc]._4_4_ = 0;
  local_b8.ExceptionInformation[0xd]._0_4_ = 0;
  local_b8.ExceptionInformation[0xd]._4_4_ = 0;
  local_b8.ExceptionInformation[0xe] = 0;
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_180004030;
  local_b8.ExceptionInformation[2] = param_5;
  local_b8.ExceptionInformation[3] = (ULONG_PTR)param_7;
  local_b8.ExceptionInformation[5] = param_6;
  local_b8.ExceptionInformation[7] = (ULONG_PTR)param_11;
  local_b8.ExceptionInformation[8] = 0x19930520;
  local_b8.ExceptionInformation[1] = param_4;
  local_b8.ExceptionInformation[4] = param_3;
  local_b8.ExceptionInformation[6] = param_2;
  RtlUnwindEx((PVOID)*param_1,(PVOID)*param_10,&local_b8,(PVOID)0x0,(PCONTEXT)param_10[5],
              (PUNWIND_HISTORY_TABLE)param_10[8]);
  return;
}


/* Address: 0x180002b80; Evidence: ev_92766327d14054f2c338bafdde65224adf347992c6d4aba553e422684002898d */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180002538();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180002538();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180002538();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x180002bbc; Evidence: ev_444dc092cddef7a66e33effe3b68b55fdb12371a681e0864d1979f370672ed9e */

void FUN_180002bbc(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180002538();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180002538();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180002538();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180002c10; Evidence: ev_adb88542e111bff80ea6fb67d2aad202f88471ebfb343e05f2008080240ffc3c */

undefined8 FUN_180002c10(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002538();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x180002c24; Evidence: ev_fda5f72351abc9ae6e3c4d774ca88f852752ad354e6d094365288cdfed525ecb */

undefined8 FUN_180002c24(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002538();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x180002c38; Evidence: ev_2afc0e31501380c3a5971f0a4c4f48c110c1b6559ee9dbefffe1dd191e4ffecb */

void FUN_180002c38(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180002538();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x180002c50; Evidence: ev_b4ac28e59df16a4ad83fdc8d608af28a92d8191a0a730e91286ef1728610ed07 */

void FUN_180002c50(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180002538();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x180002c68; Evidence: ev_8c88bb2c001be4b038e4a654723de8877850b5956fcf4d553fe80750bdf9d6cd */

/* Library Function - Single Match
    __CxxFrameHandler3
   
   Library: Visual Studio 2019 Release */

void __CxxFrameHandler3(int *param_1,__uint64 param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  __uint64 local_res8;
  
  uVar1 = *(undefined8 *)(param_4 + 8);
  local_res8 = param_2;
  lVar2 = FUN_180002538();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180002538();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180002538();
  thunk_FUN_180003cf0(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180002cf0; Evidence: ev_2365a6c38c8072f2085edc0988a1cc075c6b7a5a5c4cdad79ae40bdfe53f0445 */

FARPROC FUN_180002cf0(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

{
  longlong lVar1;
  wchar_t *lpLibFileName;
  DWORD DVar2;
  int iVar3;
  HMODULE hLibModule;
  FARPROC pFVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar6 = (ulonglong)param_1;
  pFVar4 = *(FARPROC *)(&DAT_18001a158 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_18001a140 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_180010308)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_18001a140 + uVar5 * 8);
          *(HMODULE *)(&DAT_18001a140 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_180002e21;
        }
        LOCK();
        *(undefined8 *)(&DAT_18001a140 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180002e21:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_18001a158 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_18001a158 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x180002e40; Evidence: ev_3084184778530be07e0f243ddb445a26822c8d6e19656ee56e0aec8548220d53 */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180002cf0(0,"FlsAlloc",(uint *)&DAT_1800103c8,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x000180002e7e. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x180002e88; Evidence: ev_0a2ab3db81aedea100049ce4d3059a847c11160552e14d1ddc780e05af48fd4b */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180002cf0(1,"FlsFree",(uint *)&DAT_1800103e0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x000180002ec7. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180002ed0; Evidence: ev_e0de9cd8a09779f0b2f08592876076a620f9e590e02fcfef2f96a882664ac125 */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_180002cf0(2,"FlsGetValue",(uint *)&DAT_1800103f0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x000180002f0f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180002f18; Evidence: ev_fe8bb361dc58c0e3e45cc3bff320a805a5c27c78769f80de070e5c0bed3d3fd0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180002cf0(3,"FlsSetValue",(uint *)&DAT_180010408,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x180002f6c; Evidence: ev_e24c8a93cd41f1f5ed444d9bf57c3a8a519b9c772c6b31479bd43165474dfb12 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180002cf0(4,"InitializeCriticalSectionEx",(uint *)&DAT_180010420,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x180002fd0; Evidence: ev_3a70b539098a4e0d30e498da1e5d5afe636695d4db6af517f4a35cdb83b9a2f3 */

void FUN_180002fd0(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_180003074(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x180002ff8; Evidence: ev_118f8c4b7b8e73f9ad4db72d01d0b05fa25ca798ce56b2ca29e1f6f77642167c */

/* Library Function - Multiple Matches With Same Base Name
    public: static int __cdecl __FrameHandler3::GetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64)
    int __cdecl __GetUnwindTryBlock(unsigned __int64 * __ptr64,struct _xDISPATCHER_CONTEXT *
   __ptr64,struct _s_FuncInfo const * __ptr64)
   
   Library: Visual Studio */

undefined4 GetUnwindTryBlock(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_180002858(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x180003024; Evidence: ev_616a4874b33f3cf542b1942705e03da3441aec075fca9a2d1f4b7da7e301fe5a */

void FUN_180003024(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180003030; Evidence: ev_c1a833414b07e0d24077d9001bef531c6c24132f3d92bd90857dbd35ace028f4 */

/* Library Function - Multiple Matches With Same Base Name
    public: static void __cdecl __FrameHandler3::SetUnwindTryBlock(unsigned __int64 * __ptr64,struct
   _xDISPATCHER_CONTEXT * __ptr64,struct _s_FuncInfo const * __ptr64,int)
    void __cdecl __SetUnwindTryBlock(unsigned __int64 * __ptr64,struct _xDISPATCHER_CONTEXT *
   __ptr64,struct _s_FuncInfo const * __ptr64,int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void SetUnwindTryBlock(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  longlong *plVar1;
  longlong local_res18 [2];
  
  plVar1 = FUN_180002858(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x18000306c; Evidence: ev_1643625484bfca0bbe3c8ee41562de7c5846bf550a50b73b14310b6abe8e170d */

void FUN_18000306c(longlong param_1,ulonglong *param_2)

{
  FUN_180003074(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x180003074; Evidence: ev_b1a794b0a161a962b47a3d29d0e949265069a02a028e78832e8a10f1db6e3b18 */

undefined4 FUN_180003074(longlong param_1,longlong param_2,ulonglong param_3)

{
  longlong lVar1;
  uint uVar2;
  ulonglong uVar3;
  longlong lVar4;
  
  if (param_1 != 0) {
    lVar4 = (longlong)*(int *)(param_1 + 0x18);
    lVar1 = *(longlong *)(param_2 + 8);
    if (lVar1 + lVar4 != 0) {
      uVar3 = 0;
      if (*(uint *)(param_1 + 0x14) != 0) {
        do {
          if (param_3 < (ulonglong)(*(int *)(lVar4 + uVar3 * 8 + lVar1) + lVar1)) break;
          uVar2 = (int)uVar3 + 1;
          uVar3 = (ulonglong)uVar2;
        } while (uVar2 < *(uint *)(param_1 + 0x14));
        if ((int)uVar3 != 0) {
          return *(undefined4 *)(lVar1 + (ulonglong)((int)uVar3 - 1) * 8 + 4 + lVar4);
        }
      }
      return 0xffffffff;
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800030dc; Evidence: ev_a04c830bbfaed35ce180aa68198cada51388fb1cb7faf32d615a577c0636b864 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_1800030dc(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

{
  int iVar1;
  longlong lVar2;
  undefined1 (*pauVar3) [32];
  ulonglong uVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  
  uVar5 = 0;
  uVar6 = 0;
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180002c10();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180002c10();
    uVar4 = iVar1 + lVar2;
  }
  if (*(char *)(uVar4 + 0x10) == '\0') {
    return '\0';
  }
  if ((*(int *)(param_3 + 8) == 0) && (-1 < *(int *)param_3)) {
    return '\0';
  }
  if (-1 < *(int *)param_3) {
    param_2 = (undefined1 (*) [32])((longlong)*(int *)(param_3 + 8) + *(longlong *)*param_2);
  }
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_18001a088 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180002c24();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180002c24();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_18000328e;
            }
          }
                    /* WARNING: Subroutine does not return */
          abort();
        }
        if ((*(longlong *)(param_1 + 0x28) == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
          abort();
        }
        iVar1 = *(int *)(param_4 + 0x14);
        pauVar3 = (undefined1 (*) [32])
                  FUN_180002388(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_18000de90(param_2,pauVar3,(longlong)iVar1);
        goto LAB_18000328e;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_18000de90(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_18000328e;
      lVar2 = *(longlong *)*param_2;
    }
    else {
      lVar2 = *(longlong *)(param_1 + 0x28);
      if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      *(longlong *)*param_2 = lVar2;
    }
  }
  else {
    lVar2 = (*(code *)DAT_18001a088)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_180002388(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_18000328e:
  return (char)uVar6;
}


/* Address: 0x1800032d0; Evidence: ev_b3e0e5c77e0edac0e915ec402e5029b01ff7dd00a212e60b45580035f06c4246 */

void FUN_1800032d0(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

{
  char cVar1;
  int iVar2;
  undefined7 extraout_var;
  longlong lVar3;
  longlong lVar4;
  undefined *UNRECOVERED_JUMPTABLE;
  undefined1 (*pauVar5) [32];
  
  UNRECOVERED_JUMPTABLE = (undefined *)0x0;
  pauVar5 = param_2;
  if (-1 < *(int *)param_3) {
    pauVar5 = (undefined1 (*) [32])((longlong)*(int *)(param_3 + 8) + *(longlong *)*param_2);
  }
  cVar1 = FUN_1800030dc(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_180002388(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180002c24();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000464c(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_180002388(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180002c24();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180004658(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x180003390; Evidence: ev_9bd3b3371367ae337bd0f867ecb3ab1341b0c00348e3dd235ded3969c609e1c2 */

void FUN_180003390(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
                  ULONG_PTR param_5,byte *param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  undefined4 in_stack_ffffffffffffffa4;
  
  local_res18 = param_3;
  pauVar4 = (undefined1 (*) [32])FUN_180002858(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_1800032d0(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180002c10();
  FUN_180002a7c(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180003468; Evidence: ev_fc1941282d4e314ee59c277c6d45e5a87f875b84174f09e6ad3573506f379316 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003468(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
                  ,byte param_6,undefined8 param_7,longlong param_8)

{
  undefined8 *puVar1;
  int iVar2;
  code *pcVar3;
  char cVar4;
  bool bVar5;
  int iVar6;
  uint uVar7;
  longlong lVar8;
  ulonglong uVar9;
  undefined8 uVar10;
  longlong *plVar11;
  int *piVar12;
  uint uVar13;
  int iVar14;
  undefined1 auStackY_168 [32];
  int *in_stack_fffffffffffffed0;
  undefined4 uVar15;
  ULONG_PTR local_100;
  longlong local_e0;
  uint local_d8;
  undefined4 uStack_d4;
  longlong local_d0;
  undefined8 local_c8;
  int iStack_c0;
  uint uStack_bc;
  int local_b8;
  uint *local_b0;
  ulonglong local_a8;
  longlong *local_a0;
  undefined8 uStack_98;
  longlong *local_90;
  undefined8 uStack_88;
  uint local_78;
  undefined8 local_70;
  undefined8 uStack_68;
  undefined4 local_60;
  ulonglong local_58;
  
  local_58 = DAT_180019000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar6 = FUN_180004440(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar6) && (iVar6 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar8 = FUN_180002538();
      if (*(longlong *)(lVar8 + 0x20) == 0) {
        return;
      }
      lVar8 = FUN_180002538();
      param_1 = *(int **)(lVar8 + 0x20);
      lVar8 = FUN_180002538();
      local_100 = *(ULONG_PTR *)(lVar8 + 0x28);
      FUN_180002c50(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_180003963;
      lVar8 = FUN_180002538();
      if (*(longlong *)(lVar8 + 0x38) != 0) {
        lVar8 = FUN_180002538();
        piVar12 = *(int **)(lVar8 + 0x38);
        lVar8 = FUN_180002538();
        *(undefined8 *)(lVar8 + 0x38) = 0;
        cVar4 = FUN_1800044dc((longlong)param_1,piVar12);
        if (cVar4 == '\0') {
          uVar9 = FUN_1800045c4(piVar12);
          if ((char)uVar9 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_1800058fc();
          }
          FUN_1800022e0(param_1);
          FUN_180003f68(&local_c8);
          FUN_1800047b8(&local_c8,&DAT_1800183e8);
          pcVar3 = (code *)swi(3);
          (*pcVar3)();
          return;
        }
      }
    }
    uVar15 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = param_4[1];
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5[3] != 0) {
        FUN_180002944(&local_90,&local_b0,iVar6,param_4,(longlong)param_5);
        uVar15 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
        uVar7 = (uint)uStack_88;
        local_a0 = local_90;
        uStack_98 = uStack_88;
        if (uVar7 < local_78) {
          do {
            lVar8 = (longlong)*(int *)(*local_a0 + 0x10) + (ulonglong)uVar7 * 0x14;
            piVar12 = (int *)(lVar8 + local_90[1]);
            local_c8._0_4_ = *piVar12;
            local_c8._4_4_ = piVar12[1];
            iStack_c0 = piVar12[2];
            uStack_bc = piVar12[3];
            local_b8 = *(int *)(lVar8 + 0x10 + local_90[1]);
            if (((int)local_c8 <= iVar6) && (iVar6 <= local_c8._4_4_)) {
              local_d0 = (longlong)local_b8 + param_4[1];
              uVar9 = 0;
              uStack_d4 = 0;
              local_d8 = uStack_bc;
              if (uStack_bc != 0) {
                do {
                  puVar1 = (undefined8 *)(local_d0 + uVar9 * 0x14);
                  local_70 = *puVar1;
                  uStack_68 = puVar1[1];
                  local_60 = *(undefined4 *)(local_d0 + 0x10 + uVar9 * 0x14);
                  iVar14 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar8 = FUN_180002c24();
                  piVar12 = (int *)(lVar8 + 4 + (longlong)iVar14);
                  iVar14 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar8 = FUN_180002c24();
                  for (iVar14 = *(int *)(lVar8 + iVar14); 0 < iVar14; iVar14 = iVar14 + -1) {
                    iVar2 = *piVar12;
                    lVar8 = FUN_180002c24();
                    uVar10 = FUN_180003bd0((byte *)&local_70,(byte *)(iVar2 + lVar8),
                                           *(byte **)(param_1 + 0xc));
                    if ((int)uVar10 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_180003390((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar8),
                                    in_stack_fffffffffffffed0);
                      goto LAB_1800037d3;
                    }
                    piVar12 = piVar12 + 1;
                  }
                  uVar13 = (int)uVar9 + 1;
                  uVar9 = (ulonglong)uVar13;
                } while (uVar13 != local_d8);
              }
            }
LAB_1800037d3:
            uVar15 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar7 = uVar7 + 1;
          } while (uVar7 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar7 = param_5[8], uVar7 != 0 && (lVar8 = FUN_180002c10(), lVar8 + (int)uVar7 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar5 = FUN_1800027c8(param_4,(longlong)param_5), !bVar5))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar8 = FUN_180002538();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_180002538();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_1800058fc();
        }
        uVar7 = param_5[8];
        if (uVar7 == 0) {
          piVar12 = (int *)0x0;
        }
        else {
          lVar8 = FUN_180002c10();
          piVar12 = (int *)((int)uVar7 + lVar8);
        }
        cVar4 = FUN_1800044dc((longlong)param_1,piVar12);
        if (cVar4 == '\0') {
          plVar11 = FUN_180002858(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_180002a7c(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar11,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar15,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_180003963;
      FUN_18000396c(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar6);
    }
    lVar8 = FUN_180002538();
    if (*(longlong *)(lVar8 + 0x38) == 0) {
      return;
    }
  }
LAB_180003963:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x18000396c; Evidence: ev_e4b835aa633c75df4a79465f75ed83de9d70bec0eadfb997be1ea2e87be84dc7 */

void FUN_18000396c(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
                  ULONG_PTR param_5,int param_6)

{
  int iVar1;
  uint uVar2;
  longlong lVar3;
  PVOID pvVar4;
  byte *pbVar5;
  ULONG_PTR local_98;
  ulonglong local_90;
  longlong *local_88;
  undefined8 uStack_80;
  undefined1 local_78 [16];
  int local_68;
  longlong *local_60;
  undefined8 uStack_58;
  uint local_48;
  
  if (*param_1 != -0x7ffffffd) {
    lVar3 = FUN_180002538();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180002538();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180002710(param_1,param_2,param_3), iVar1 != 0)
         ) {
        return;
      }
    }
    local_90 = param_4[1];
    local_98 = param_5;
    if (*(int *)(param_5 + 0xc) == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_180002944(&local_60,&local_98,param_6,param_4,param_5);
    uVar2 = (uint)uStack_58;
    local_88 = local_60;
    uStack_80 = uStack_58;
    if (uVar2 < local_48) {
      do {
        lVar3 = (longlong)*(int *)(*local_88 + 0x10) + (ulonglong)uVar2 * 0x14;
        local_78 = *(undefined1 (*) [16])(lVar3 + local_60[1]);
        local_68 = *(int *)(lVar3 + 0x10 + local_60[1]);
        if ((local_78._0_4_ <= param_6) && (param_6 <= local_78._4_4_)) {
          pbVar5 = (byte *)((param_4[1] - 0x14) +
                           (longlong)local_68 + (local_78._8_8_ >> 0x20) * 0x14);
          iVar1 = *(int *)(pbVar5 + 4);
          if ((iVar1 != 0) && (lVar3 = FUN_180002c10(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_180002c10();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_180003b95;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_180003390((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_180003b95:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180003bd0; Evidence: ev_1b6f0e8099c97a9917fead1aad9b7300f69001221aeed3aa0f3be2f8608d4b55 */

undefined8 FUN_180003bd0(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180002c10(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180002c10();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180002c10();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_180002c24();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_180002c10();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180002c24();
        iVar1 = strcmp((char *)(lVar4 + 0x10),(char *)((longlong)iVar1 + 0x10 + lVar2));
        if (iVar1 != 0) {
          return 0;
        }
      }
      if (((*param_2 & 2) != 0) && ((*param_1 & 8) == 0)) {
        return 0;
      }
      if (((*param_3 & 1) != 0) && ((*param_1 & 1) == 0)) {
        return 0;
      }
      if (((*param_3 & 4) != 0) && ((*param_1 & 4) == 0)) {
        return 0;
      }
      if (((*param_3 & 2) != 0) && ((*param_1 & 2) == 0)) {
        return 0;
      }
      return 1;
    }
  }
  return 1;
}


/* Address: 0x180003cf0; Evidence: ev_a338439c1842c0b61c09d2f4f4f673918a2a69476ccf70d7e113fb559d3a0982 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180003cf0(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
             _s_FuncInfo *param_5,int param_6,longlong param_7,byte param_8)

{
  int iVar1;
  longlong lVar2;
  undefined8 uVar3;
  code *pcVar4;
  bool bVar5;
  undefined8 in_stack_ffffffffffffffc8;
  undefined4 uVar6;
  undefined8 in_stack_ffffffffffffffd0;
  undefined4 uVar7;
  
  uVar6 = (undefined4)((ulonglong)in_stack_ffffffffffffffc8 >> 0x20);
  uVar7 = (undefined4)((ulonglong)in_stack_ffffffffffffffd0 >> 0x20);
  __except_validate_context_record(param_3);
  lVar2 = FUN_180002538();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180003d5e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180003d5e:
      if (bVar5) goto LAB_180003d75;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180003d75:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180002c10(), lVar2 + iVar1 == 0)))) {
      if ((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930522) {
        return 1;
      }
      if ((param_5->EHFlags & 4) == 0) {
        return 1;
      }
    }
    if (((*param_1 == -0x1f928c9d) && (2 < (uint)param_1[6])) &&
       ((0x19930522 < (uint)param_1[8] &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180002c24();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180003468(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
                  &param_5->magicNumber_and_bbtFlags,param_8,CONCAT44(uVar6,param_6),param_7);
    return 1;
  }
  if (param_5->maxState == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_180003e01:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_180003074((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_180003f1d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180003e01;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_180003f1d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_1800042b4((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180003f24; Evidence: ev_221fad4abca10a4ada5d0c067a79cf4db2a6e326f73e2e168497150d39d9e3ed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_180003cf0(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
                   _s_FuncInfo *param_5,int param_6,longlong param_7,byte param_8)

{
  int iVar1;
  longlong lVar2;
  undefined8 uVar3;
  code *pcVar4;
  bool bVar5;
  undefined4 uVar6;
  undefined8 in_stack_ffffffffffffffc8;
  undefined4 uVar7;
  undefined8 in_stack_ffffffffffffffd0;
  
  uVar6 = (undefined4)((ulonglong)in_stack_ffffffffffffffc8 >> 0x20);
  uVar7 = (undefined4)((ulonglong)in_stack_ffffffffffffffd0 >> 0x20);
  __except_validate_context_record(param_3);
  lVar2 = FUN_180002538();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180003d5e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180003d5e:
      if (bVar5) goto LAB_180003d75;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180003d75:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180002c10(), lVar2 + iVar1 == 0)))) {
      if ((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930522) {
        return 1;
      }
      if ((param_5->EHFlags & 4) == 0) {
        return 1;
      }
    }
    if (((*param_1 == -0x1f928c9d) && (2 < (uint)param_1[6])) &&
       ((0x19930522 < (uint)param_1[8] &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180002c24();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180003468(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
                  &param_5->magicNumber_and_bbtFlags,param_8,CONCAT44(uVar6,param_6),param_7);
    return 1;
  }
  if (param_5->maxState == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_180003e01:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_180003074((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_180003f1d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180003e01;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_180003f1d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_1800042b4((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180003f2c; Evidence: ev_521e892327c6fd7008731dcf72c51d7f6456fc4f21203d216fdca156d883429c */

undefined8 * FUN_180003f2c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180004710((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x180003f68; Evidence: ev_cf1a42cc10999cff5ec70f718043dc035314ea945782613dcc837229a7dff9f4 */

undefined8 * FUN_180003f68(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x180003f8c; Evidence: ev_9559f981771764929d96bda818194e81e3ce306740ac4dc80a71b3c93fa4286a */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180004710((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x180003fe0; Evidence: ev_f10d22a4a9f2784f282b9b73e282c70850ba62add6ac902c1513c9f7deba4c52 */

undefined8 * FUN_180003fe0(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_180004790(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_180006a30(param_1);
  }
  return param_1;
}


/* Address: 0x180004030; Evidence: ev_7a19da5775bdd2468e17ba159920a7ae7ea7953bedcb094770edf241ebca759f */

undefined8 FUN_180004030(longlong param_1)

{
  undefined8 uVar1;
  undefined8 uVar2;
  int *piVar3;
  longlong *plVar4;
  int iVar5;
  longlong lVar6;
  longlong lVar7;
  longlong lVar8;
  undefined8 *puVar9;
  undefined8 uVar10;
  undefined8 local_48 [2];
  
  lVar6 = FUN_180002538();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180002538();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180002538();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180002538();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180002538();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180002538();
  }
  uVar10 = _CallSettingFrame();
  FUN_180002bbc((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_1800022e0(piVar3);
  }
  lVar8 = FUN_180002538();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180002538();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x18000421c; Evidence: ev_1790676a24af4287be9fa8a9edac09b5f41df74d1d6da80ace2969ddc15668bd */

undefined8 FUN_18000421c(undefined8 *param_1,longlong param_2,undefined4 *param_3)

{
  int *piVar1;
  longlong lVar2;
  
  piVar1 = (int *)*param_1;
  *param_3 = 0;
  if (*piVar1 == -0x1f928c9d) {
    if ((piVar1[6] == 4) &&
       (((piVar1[8] == 0x19930520 || (piVar1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(piVar1 + 10) == *(longlong *)(param_2 + 0x28))))) {
      *param_3 = 1;
    }
    if ((((*piVar1 == -0x1f928c9d) && (piVar1[6] == 4)) &&
        ((piVar1[8] == 0x19930520 || (piVar1[8] + 0xe66cfadfU < 2)))) &&
       (*(longlong *)(piVar1 + 0xc) == 0)) {
      lVar2 = FUN_180002538();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800042b4; Evidence: ev_430933aefdac2f6a0f0930375364886b58323b289068d357028b90f5e6dccae7 */

void FUN_1800042b4(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180002c10();
  iVar2 = FUN_180002fd0(param_1,param_2,param_3);
  lVar4 = FUN_180002538();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180002c10();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180002c10();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002c10();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180002c10();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180003024(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002c10();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180002c10();
        FUN_180002c10();
      }
      _CallSettingFrame();
      FUN_180002c38(uVar3);
    }
  }
  lVar4 = FUN_180002538();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180002538();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180003024(param_1,param_3,iVar2);
  return;
}


/* Address: 0x180004440; Evidence: ev_5f628d2b719268a6842d5538227e74ea932216088b9eefc863ec2107f13aa33b */

int FUN_180004440(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000306c(param_3,param_2);
  FUN_180002858(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180003024(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x1800044dc; Evidence: ev_eafd9491c7c4c3308372cfd230198f0a69acdcb1aef59913965e0e517cae047c */

undefined1 FUN_1800044dc(longlong param_1,int *param_2)

{
  int iVar1;
  int iVar2;
  byte *pbVar3;
  longlong lVar4;
  longlong lVar5;
  undefined8 uVar6;
  int iVar7;
  int *piVar8;
  undefined1 uVar9;
  int iVar10;
  
  if (param_2 == (int *)0x0) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  uVar9 = 0;
  iVar7 = 0;
  if (0 < *param_2) {
    do {
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180002c24();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180002c24();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_180002c24();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_180002c10();
          uVar6 = FUN_180003bd0((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
                                (byte *)(iVar1 + lVar4),pbVar3);
          if ((int)uVar6 != 0) {
            uVar9 = 1;
            break;
          }
          iVar10 = iVar10 + -1;
          piVar8 = piVar8 + 1;
        } while (0 < iVar10);
      }
      iVar7 = iVar7 + 1;
    } while (iVar7 < *param_2);
  }
  return uVar9;
}


/* Address: 0x1800045c4; Evidence: ev_542d6468d38b09776ac03d9fc65f299aeedad893caa4a4d8046089a6570e0ea1 */

ulonglong FUN_1800045c4(int *param_1)

{
  int iVar1;
  ulonglong in_RAX;
  longlong lVar2;
  undefined4 extraout_var;
  int iVar3;
  longlong lVar4;
  
  iVar3 = 0;
  if (0 < *param_1) {
    lVar4 = 0;
    do {
      iVar1 = param_1[1];
      lVar2 = FUN_180002c10();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180002c10();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180002c10();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180002220(lVar2 + 8,0x180019a28);
      in_RAX = CONCAT44(extraout_var,iVar1);
      if (iVar1 == 0) {
        return CONCAT71((int7)(in_RAX >> 8),1);
      }
      iVar3 = iVar3 + 1;
      lVar4 = lVar4 + 0x14;
    } while (iVar3 < *param_1);
  }
  return in_RAX & 0xffffffffffffff00;
}


/* Address: 0x18000464c; Evidence: ev_2c5674f4a52dc714ce990687038368ea8c947e4da62c54345c17779fa29e2181 */

void FUN_18000464c(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x000180004652. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x180004658; Evidence: ev_afee374feee34e88a54c1b856abe971a051ee2da91a31ba0ea6d6f1a92b8c9d3 */

void FUN_180004658(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x000180004664. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x180004670; Evidence: ev_3eb6c1fbc20732889532bf87e3f74495823a3433dab06f4e4c1aaa849ee68586 */

char * FUN_180004670(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x1800046d0; Evidence: ev_b695cc620670b094709e4a370fc8c3d31229e75b0466c4e9affecd5d348c171e */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_180002460();
  (*pcVar1)();
  FUN_180002490();
  FUN_180002460();
  return;
}


/* Address: 0x180004710; Evidence: ev_5dea01339321aa1355dce03d42c06c416913da82897cb4d37fb42814c2e2ae3a */

void FUN_180004710(longlong *param_1,longlong *param_2)

{
  size_t sVar1;
  char *pcVar2;
  
  if (((char)param_1[1] == '\0') || ((char *)*param_1 == (char *)0x0)) {
    *param_2 = *param_1;
    *(undefined1 *)(param_2 + 1) = 0;
  }
  else {
    sVar1 = strlen((char *)*param_1);
    pcVar2 = _malloc_base(sVar1 + 1);
    if (pcVar2 != (char *)0x0) {
      FUN_180005940(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_180006a30((LPVOID)0x0);
  }
  return;
}


/* Address: 0x180004790; Evidence: ev_08aa04374e9972eedbfee122c20ab20e7d4215d0bf363a70d53555915477c577 */

void FUN_180004790(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180006a30((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x1800047b8; Evidence: ev_a7be7b094dbb6aa0c7c052ce02a2f6b2cfc0d69954b0fd93e58e11b9f68dced4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800047b8(longlong *param_1,byte *param_2)

{
  ULONG_PTR UVar1;
  PVOID local_38;
  ULONG_PTR local_30;
  longlong *local_28;
  byte *local_20;
  PVOID local_18;
  
  UVar1 = 0x19930520;
  if ((param_2 != (byte *)0x0) && ((*param_2 & 0x10) != 0)) {
    param_2 = *(byte **)(*(longlong *)(*param_1 + -8) + 0x30);
    (**(code **)(*(longlong *)(*param_1 + -8) + 0x40))();
  }
  local_38 = (PVOID)0x0;
  if (param_2 != (byte *)0x0) {
    local_38 = RtlPcToFileHeader(param_2,&local_38);
    if (((*param_2 & 8) != 0) || (local_38 == (PVOID)0x0)) {
      UVar1 = 0x1994000;
    }
  }
  local_30 = UVar1;
  local_28 = param_1;
  local_20 = param_2;
  local_18 = local_38;
  RaiseException(0xe06d7363,1,4,&local_30);
  return;
}


/* Address: 0x180004860; Evidence: ev_1b84b59c75d96f16ad4e5c7d47231082f133f9b0fdda1d4697efb222fd3b7bf9 */

longlong * FUN_180004860(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_180019200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18001a304 == 0) {
    param_1[1] = (longlong)PTR_PTR_1800191f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_180006528();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_180006760(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x180004920; Evidence: ev_b9ec0b16f1e3bea939f7aca0277e4f0788911a3f4b45ffe02b7663def3e9bcdc */

undefined8 FUN_180004920(longlong param_1,longlong param_2)

{
  undefined4 *puVar1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 0x16;
    FUN_180005ed8();
  }
  return 0x7fffffff;
}


/* Address: 0x180004950; Evidence: ev_c9ef35985d5535682ae7049597f18c6b6e2bc66ab8fb3511562ea3ea50f4019d */

void FUN_180004950(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18001a304 != 0) {
    FUN_1800049c0(param_1,param_2,(undefined8 *)0x0);
    return;
  }
  if ((param_1 != (byte *)0x0) && (param_2 != (byte *)0x0)) {
    while( true ) {
      bVar1 = *param_1;
      uVar3 = (uint)bVar1;
      param_1 = param_1 + 1;
      bVar2 = *param_2;
      uVar4 = (uint)bVar2;
      param_2 = param_2 + 1;
      if ((uint)bVar1 != (uint)bVar2) {
        uVar3 = bVar1 + 0x20;
        if (0x19 < bVar1 - 0x41) {
          uVar3 = (uint)bVar1;
        }
        if (bVar2 - 0x41 < 0x1a) {
          uVar4 = bVar2 + 0x20;
        }
      }
      if (uVar3 != uVar4) break;
      if (uVar3 == 0) {
        return;
      }
    }
    return;
  }
  FUN_180004920((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x1800049c0; Evidence: ev_b44debf44ba27af96a9a0924a5e6e96217cbe11d55d59a983ff86840eea673c0 */

int FUN_1800049c0(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  undefined4 *puVar3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    puVar3 = (undefined4 *)FUN_180006080();
    *puVar3 = 0x16;
    FUN_180005ed8();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18001a304 == 0) {
      local_20 = PTR_PTR_1800191f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_180006528();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_180006760(local_28,&lStack_18);
      if ((*(uint *)(local_28 + 0x3a8) & 2) == 0) {
        local_10 = '\x01';
        *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) | 2;
      }
    }
  }
  else {
    local_20 = (undefined *)*param_3;
    local_10 = '\0';
  }
  do {
    bVar1 = *param_1;
    param_1 = param_1 + 1;
    bVar1 = *(byte *)((ulonglong)bVar1 + *(longlong *)(local_20 + 0x110));
    iVar2 = (uint)bVar1 - (uint)*(byte *)((ulonglong)*param_2 + *(longlong *)(local_20 + 0x110));
    if (iVar2 != 0) break;
    param_2 = param_2 + 1;
  } while (bVar1 != 0);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return iVar2;
}


/* Address: 0x180004ae0; Evidence: ev_6f4e5d2273549ae82593b413c36cab4f880fe6843fb7e06e0969d937cb431f0e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004ae0(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x180004b18; Evidence: ev_6ad54a95ffcb571a698d80d53c821949f3a066ae8e742b8d5bdd02203dfd84b4 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180004b18(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  while( true ) {
    if (param_1 == param_2) {
      return 0;
    }
    if (((code *)*param_1 != (code *)0x0) && (uVar1 = (*(code *)*param_1)(), (int)uVar1 != 0))
    break;
    param_1 = param_1 + 1;
  }
  return uVar1;
}


/* Address: 0x180004b54; Evidence: ev_1dba6b395c98bdb30ed1e4fbd5d8511d45c856f49e9fb72dee2db6526d37ad4b */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_180004b68(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x180004b68; Evidence: ev_1517090e0645fc24cb348765aaa6fabbec5d5f104353b43c5d9362776cd9a895 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180004b68(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  __acrt_ptd *p_Var5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  p_Var5 = FUN_180006588();
  if (p_Var5 != (__acrt_ptd *)0x0) {
    piVar2 = *(int **)p_Var5;
    for (piVar6 = piVar2; piVar6 != piVar2 + 0x30; piVar6 = piVar6 + 4) {
      if (*piVar6 == param_1) {
        if (piVar6 == (int *)0x0) {
          return 0;
        }
        pcVar3 = *(code **)(piVar6 + 2);
        if (pcVar3 == (code *)0x0) {
          return 0;
        }
        if (pcVar3 == (code *)0x5) {
          piVar6[2] = 0;
          piVar6[3] = 0;
          return 1;
        }
        if (pcVar3 != (code *)0x1) {
          uVar4 = *(undefined8 *)(p_Var5 + 8);
          *(undefined8 *)(p_Var5 + 8) = param_2;
          if (piVar6[1] == 8) {
            for (piVar7 = piVar2 + 0xc; piVar7 != piVar2 + 0x30; piVar7 = piVar7 + 4) {
              piVar7[2] = 0;
              piVar7[3] = 0;
            }
            uVar1 = *(undefined4 *)(p_Var5 + 0x10);
            if (*piVar6 == -0x3fffff73) {
              uVar8 = 0x82;
LAB_180004ca6:
              *(undefined4 *)(p_Var5 + 0x10) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_180004ca6;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_180004ca6;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_180004ca6;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_180004ca6;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_180004ca6;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_180004ca6;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_180004ca6;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_180004ca6;
              }
            }
            (*pcVar3)(8,uVar8);
            *(undefined4 *)(p_Var5 + 0x10) = uVar1;
          }
          else {
            piVar6[2] = 0;
            piVar6[3] = 0;
            (*pcVar3)(piVar6[1]);
          }
          *(undefined8 *)(p_Var5 + 8) = uVar4;
        }
        return 0xffffffff;
      }
    }
  }
  return 0;
}


/* Address: 0x180004cd4; Evidence: ev_52018b63199f6ff929f0dcba2213cf9c89bace0ebcb99f780c0a0270c9c5a787 */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_99476a1ad63dd22509b5d3e65b0ffc95>,class <lambda_ad1ced32f4ac17aa236e5ef05d6b3b7c> &
   __ptr64,class <lambda_f7424dd8d45958661754dc4f2697e9c3> >(class
   <lambda_99476a1ad63dd22509b5d3e65b0ffc95> && __ptr64,class
   <lambda_ad1ced32f4ac17aa236e5ef05d6b3b7c> & __ptr64,class
   <lambda_f7424dd8d45958661754dc4f2697e9c3> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_d80eeec6fff315bfe5c115232f3240e3>,class <lambda_6e4b09c48022b2350581041d5f6b0c4c> &
   __ptr64,class <lambda_2358e3775559c9db80273638284d5e45> >(class
   <lambda_d80eeec6fff315bfe5c115232f3240e3> && __ptr64,class
   <lambda_6e4b09c48022b2350581041d5f6b0c4c> & __ptr64,class
   <lambda_2358e3775559c9db80273638284d5e45> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  FUN_180004d0c(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180004d0c; Evidence: ev_60ec54a9f8e2f9fa04db14c621ace9357bc21612383ae13dbc3e876bba1dc501 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004d0c(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_18001a198 != '\0') {
    return;
  }
  LOCK();
  DAT_18001a188 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_18001a190 != DAT_180019000) {
      bVar1 = (byte)DAT_180019000 & 0x3f;
      (*(code *)((DAT_180019000 ^ DAT_18001a190) >> bVar1 |
                (DAT_180019000 ^ DAT_18001a190) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_18001a2c8;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_180004d7b;
    puVar2 = &DAT_18001a2e0;
  }
  FUN_1800056b4(puVar2);
LAB_180004d7b:
  if (*(int *)*param_1 == 0) {
    FUN_180004ae0((undefined8 *)&DAT_18000f308,(undefined8 *)&DAT_18000f328);
  }
  FUN_180004ae0((undefined8 *)&DAT_18000f330,(undefined8 *)&DAT_18000f338);
  if (*(int *)param_1[1] == 0) {
    DAT_18001a198 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x180004dcc; Evidence: ev_fe8ef98252048fee4658167087010948bf396af8615ee8121343413454bf7081 */

void FUN_180004dcc(uint param_1,undefined4 param_2,int param_3)

{
  code *pcVar1;
  bool bVar2;
  uint uVar3;
  HMODULE pHVar4;
  undefined7 extraout_var;
  int *piVar5;
  undefined4 local_res10 [2];
  int local_res18 [2];
  undefined1 local_res20 [8];
  undefined1 local_38 [4];
  int local_34 [3];
  undefined8 local_28;
  undefined4 *local_20;
  int *local_18;
  undefined1 *local_10;
  
  local_28 = 0xfffffffffffffffe;
  local_res10[0] = param_2;
  local_res18[0] = param_3;
  if (param_3 == 0) {
    pHVar4 = GetModuleHandleW((LPCWSTR)0x0);
    if ((((pHVar4 != (HMODULE)0x0) && ((short)pHVar4->unused == 0x5a4d)) &&
        (piVar5 = (int *)((longlong)&pHVar4->unused + (longlong)pHVar4[0xf].unused),
        *piVar5 == 0x4550)) &&
       ((((short)piVar5[6] == 0x20b && (0xe < (uint)piVar5[0x21])) && (piVar5[0x3e] != 0)))) {
      FUN_180004ee0(param_1);
    }
  }
  local_res20[0] = 0;
  local_20 = local_res10;
  local_18 = local_res18;
  local_10 = local_res20;
  local_34[0] = 2;
  local_34[1] = 2;
  operator()<>(local_38,local_34 + 1,&local_20,local_34);
  if (local_res18[0] == 0) {
    bVar2 = FUN_180006978();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_180006944();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_180004eb0(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x180004eb0; Evidence: ev_e1832710d006849296ca21f97d413f1d201d5ae57347a7a42aa13d88ba36dd77 */

void FUN_180004eb0(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180004ee0(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x180004ee0; Evidence: ev_478918ac9f0deba96bb2448a3f251680df1a0f4275fb4b22514236c155469ec3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004ee0(uint param_1)

{
  BOOL BVar1;
  FARPROC pFVar2;
  HMODULE local_res10 [3];
  
  local_res10[0] = (HMODULE)0x0;
  BVar1 = GetModuleHandleExW(0,L"mscoree.dll",local_res10);
  if ((BVar1 != 0) &&
     (pFVar2 = GetProcAddress(local_res10[0],"CorExitProcess"), pFVar2 != (FARPROC)0x0)) {
    (*pFVar2)((ulonglong)param_1);
  }
  if (local_res10[0] != (HMODULE)0x0) {
    FreeLibrary(local_res10[0]);
  }
  return;
}


/* Address: 0x180004f44; Evidence: ev_4917d88a4ab64a9227bd65ba6e2843ec7881a641b8cefc62bd560ef11abe3242 */

void FUN_180004f44(undefined8 param_1)

{
  DAT_18001a190 = param_1;
  return;
}


/* Address: 0x180004f4c; Evidence: ev_cd5716acc555fd7d9f7ad0d1d2bbfdf90c9cfdd920be54d2f5bd52233bc14078 */

void FUN_180004f4c(void)

{
  FUN_180004dcc(0,0,1);
  return;
}


/* Address: 0x180004f5c; Evidence: ev_d842c1c980950781e3165511dee4cb8d8b954a72eb87b4e85af020f0a0beca73 */

void FUN_180004f5c(uint param_1)

{
  FUN_180004dcc(param_1,2,0);
  return;
}


/* Address: 0x180004f68; Evidence: ev_24df0d69702ae26e6f629e74c68ce87dcccccb617641dee7fd36987564e377fe */

undefined4 FUN_180004f68(void)

{
  return DAT_18001a188;
}


/* Address: 0x180004f70; Evidence: ev_390a2bdd53a7bcb1903bdf9fb56846d8ed293b11005d962476503d618592804c */

void FUN_180004f70(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
                  longlong *param_5)

{
  bool bVar1;
  bool bVar2;
  char cVar3;
  uint uVar4;
  int iVar5;
  char *pcVar6;
  
  *param_5 = 0;
  *param_4 = 1;
  if (param_2 != (undefined8 *)0x0) {
    *param_2 = param_3;
    param_2 = param_2 + 1;
  }
  bVar2 = false;
  do {
    if (*param_1 == '\"') {
      bVar2 = !bVar2;
      cVar3 = '\"';
      pcVar6 = param_1 + 1;
    }
    else {
      *param_5 = *param_5 + 1;
      if (param_3 != (char *)0x0) {
        *param_3 = *param_1;
        param_3 = param_3 + 1;
      }
      cVar3 = *param_1;
      pcVar6 = param_1 + 1;
      iVar5 = FUN_180008318((int)cVar3);
      if (iVar5 != 0) {
        *param_5 = *param_5 + 1;
        if (param_3 != (char *)0x0) {
          *param_3 = *pcVar6;
          param_3 = param_3 + 1;
        }
        pcVar6 = param_1 + 2;
      }
      if (cVar3 == '\0') {
        pcVar6 = pcVar6 + -1;
        goto LAB_180005022;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_180005022:
  bVar2 = false;
  while (cVar3 = *pcVar6, cVar3 != '\0') {
    while ((cVar3 == ' ' || (cVar3 == '\t'))) {
      pcVar6 = pcVar6 + 1;
      cVar3 = *pcVar6;
    }
    if (cVar3 == '\0') break;
    if (param_2 != (undefined8 *)0x0) {
      *param_2 = param_3;
      param_2 = param_2 + 1;
    }
    *param_4 = *param_4 + 1;
    while( true ) {
      bVar1 = true;
      uVar4 = 0;
      while( true ) {
        if (*pcVar6 != '\\') break;
        pcVar6 = pcVar6 + 1;
        uVar4 = uVar4 + 1;
      }
      if (*pcVar6 == '\"') {
        if ((uVar4 & 1) == 0) {
          if ((bVar2) && (pcVar6[1] == '\"')) {
            pcVar6 = pcVar6 + 1;
          }
          else {
            bVar1 = false;
            bVar2 = !bVar2;
          }
        }
        uVar4 = uVar4 >> 1;
      }
      while (uVar4 != 0) {
        uVar4 = uVar4 - 1;
        if (param_3 != (char *)0x0) {
          *param_3 = '\\';
          param_3 = param_3 + 1;
        }
        *param_5 = *param_5 + 1;
      }
      cVar3 = *pcVar6;
      if ((cVar3 == '\0') || ((!bVar2 && ((cVar3 == ' ' || (cVar3 == '\t')))))) break;
      if (bVar1) {
        if (param_3 != (char *)0x0) {
          *param_3 = cVar3;
          param_3 = param_3 + 1;
        }
        iVar5 = FUN_180008318((int)*pcVar6);
        if (iVar5 != 0) {
          *param_5 = *param_5 + 1;
          pcVar6 = pcVar6 + 1;
          if (param_3 != (char *)0x0) {
            *param_3 = *pcVar6;
            param_3 = param_3 + 1;
          }
        }
        *param_5 = *param_5 + 1;
      }
      pcVar6 = pcVar6 + 1;
    }
    if (param_3 != (char *)0x0) {
      *param_3 = '\0';
      param_3 = param_3 + 1;
    }
    *param_5 = *param_5 + 1;
  }
  if (param_2 != (undefined8 *)0x0) {
    *param_2 = 0;
  }
  *param_4 = *param_4 + 1;
  return;
}


/* Address: 0x180005130; Evidence: ev_bb7da3d77641f03835c9d915822f04a7219dbc299f4774d78e59d40c869ed27a */

/* Library Function - Single Match
    __acrt_allocate_buffer_for_argv
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID __acrt_allocate_buffer_for_argv(ulonglong param_1,ulonglong param_2,ulonglong param_3)

{
  undefined1 auVar1 [16];
  LPVOID pvVar2;
  
  if ((param_1 < 0x1fffffffffffffff) &&
     (auVar1._8_8_ = 0, auVar1._0_8_ = param_3,
     param_2 < SUB168((ZEXT816(0) << 0x40 | ZEXT816(0xffffffffffffffff)) / auVar1,0))) {
    if (param_2 * param_3 < ~(param_1 * 8)) {
      pvVar2 = _calloc_base(param_1 * 8 + param_2 * param_3,1);
      FUN_180006a30((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x180005190; Evidence: ev_11af7020367eb9b0524d29d747401b59875de2c3bf6e58546437bbc136a55c6e */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_180005190(int param_1)

{
  longlong lVar1;
  longlong *plVar2;
  undefined4 *puVar3;
  longlong *plVar4;
  ulonglong uVar5;
  char *pcVar6;
  ulonglong uVar7;
  longlong *local_res10;
  ulonglong local_res18;
  ulonglong local_res20;
  
  uVar7 = 0;
  if (param_1 == 0) {
    return 0;
  }
  if (1 < param_1 - 1U) {
    puVar3 = (undefined4 *)FUN_180006080();
    *puVar3 = 0x16;
    FUN_180005ed8();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_180007634((HMODULE)0x0,&DAT_18001a1a0,0x104);
  _DAT_18001a590 = &DAT_18001a1a0;
  if ((DAT_18001a5b0 == (char *)0x0) || (pcVar6 = DAT_18001a5b0, *DAT_18001a5b0 == '\0')) {
    pcVar6 = &DAT_18001a1a0;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_180004f70(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    puVar3 = (undefined4 *)FUN_180006080();
    uVar7 = 0xc;
    *puVar3 = 0xc;
  }
  else {
    FUN_180004f70(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180006df0(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_180006a30(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_180006a30(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_18001a598 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_18001a598 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_18001a5a0 = plVar2;
      FUN_180006a30((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_1800052f5;
    }
    _DAT_18001a598 = (int)local_res18 + -1;
    DAT_18001a5a0 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_1800052f5:
  FUN_180006a30(plVar4);
  return uVar7;
}


/* Address: 0x180005310; Evidence: ev_8eeab50c6c5d2d7733896a03d592540797c9547a68a76e6bd716ce5356222430 */

undefined8 FUN_180005310(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001a2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800084c8();
    if (pcVar2 == (char *)0x0) {
      FUN_180006a30((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180005384(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001a2a8;
        puVar1 = DAT_18001a2c0;
      }
      DAT_18001a2c0 = puVar1;
      DAT_18001a2a8 = puVar4;
      FUN_180006a30((LPVOID)0x0);
      FUN_180006a30(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x180005384; Evidence: ev_f8c233a13ab6e1fa1bebc6f63576f53ac7df5452cbb58715163f46c9e3cc31aa */

undefined8 * FUN_180005384(char *param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined8 *puVar3;
  char *pcVar4;
  undefined8 uVar5;
  char cVar6;
  longlong lVar7;
  ulonglong uVar8;
  undefined8 *puVar9;
  
  cVar6 = *param_1;
  lVar7 = 0;
  pcVar4 = param_1;
  while (cVar6 != '\0') {
    lVar1 = lVar7 + 1;
    if (cVar6 == '=') {
      lVar1 = lVar7;
    }
    lVar7 = -1;
    do {
      lVar2 = lVar7;
      lVar7 = lVar2 + 1;
    } while (pcVar4[lVar7] != '\0');
    pcVar4 = pcVar4 + lVar2 + 2;
    lVar7 = lVar1;
    cVar6 = *pcVar4;
  }
  puVar3 = _calloc_base(lVar7 + 1,8);
  puVar9 = puVar3;
  if (puVar3 == (undefined8 *)0x0) {
LAB_1800053e7:
    FUN_180006a30((LPVOID)0x0);
    puVar3 = (undefined8 *)0x0;
  }
  else {
    for (; *param_1 != '\0'; param_1 = param_1 + uVar8) {
      lVar7 = -1;
      do {
        lVar1 = lVar7;
        lVar7 = lVar1 + 1;
      } while (param_1[lVar7] != '\0');
      uVar8 = lVar1 + 2;
      if (*param_1 != '=') {
        pcVar4 = _calloc_base(uVar8,1);
        if (pcVar4 == (char *)0x0) {
          free_environment<>(puVar3);
          FUN_180006a30((LPVOID)0x0);
          goto LAB_1800053e7;
        }
        uVar5 = FUN_180005940(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_180006a30((LPVOID)0x0);
      }
    }
    FUN_180006a30((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x180005498; Evidence: ev_c4e957c11f79ca0237779e60b9d2eedc480674074b0dc8395444f3ab3b710529 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl free_environment<char>(char * __ptr64 * __ptr64 const)
    void __cdecl free_environment<wchar_t>(wchar_t * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void free_environment<>(undefined8 *param_1)

{
  LPVOID pvVar1;
  undefined8 *puVar2;
  
  if (param_1 != (undefined8 *)0x0) {
    pvVar1 = (LPVOID)*param_1;
    puVar2 = param_1;
    while (pvVar1 != (LPVOID)0x0) {
      FUN_180006a30(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_180006a30(param_1);
  }
  return;
}


/* Address: 0x1800054dc; Evidence: ev_2e35f870e890fdf9f40e439d4ccb17a5ec0c07786c2ae35adb5e578db8f86d38 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001a2c0) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x1800054f8; Evidence: ev_de16bb44b71713079569c91eff2cb0ba0a2efef9359e35786ef030d75c4c7fd2 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001a2b8) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x180005514; Evidence: ev_344583ceedb9a9782381c158d46f34dcbf6fdb31e6ad7a157c4a55fa3ab6f846 */

void FUN_180005514(void)

{
  uninitialize_environment_internal<>(&DAT_18001a2a8);
  uninitialize_environment_internal<>((undefined8 *)&DAT_18001a2b0);
  free_environment<>(DAT_18001a2c0);
  free_environment<>(DAT_18001a2b8);
  return;
}


/* Address: 0x180005558; Evidence: ev_688a14c375bd00a361ed557d027479e3bdf79276e9b1b38c8f3b409a52799b7d */

undefined8 thunk_FUN_180005310(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001a2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800084c8();
    if (pcVar2 == (char *)0x0) {
      FUN_180006a30((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_180005384(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001a2a8;
        puVar1 = DAT_18001a2c0;
      }
      DAT_18001a2c0 = puVar1;
      DAT_18001a2a8 = puVar4;
      FUN_180006a30((LPVOID)0x0);
      FUN_180006a30(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x180005560; Evidence: ev_038ab9f955cb592ffc98b2d8c03d88e3cdf42b690f08be6f0854bc27eda18dea */

/* Library Function - Multiple Matches With Same Base Name
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_638799b9deba96c50f710eeac98168cd>,class <lambda_22ebabd17bc4fa466a2aca6d8deb888d> &
   __ptr64,class <lambda_a6f7d7db0129f75315ebf26d50c089f1> >(class
   <lambda_638799b9deba96c50f710eeac98168cd> && __ptr64,class
   <lambda_22ebabd17bc4fa466a2aca6d8deb888d> & __ptr64,class
   <lambda_a6f7d7db0129f75315ebf26d50c089f1> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_7777bce6b2f8c936911f934f8298dc43>,class <lambda_f03950bc5685219e0bcd2087efbe011e> &
   __ptr64,class <lambda_3883c3dff614d5e0c5f61bb1ac94921c> >(class
   <lambda_7777bce6b2f8c936911f934f8298dc43> && __ptr64,class
   <lambda_f03950bc5685219e0bcd2087efbe011e> & __ptr64,class
   <lambda_3883c3dff614d5e0c5f61bb1ac94921c> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_8b90c8310d35b3462fe809c44bbb350d>,class <lambda_c1ccdfe150d00dafd355d15f2a9edeaa> &
   __ptr64,class <lambda_e797892004ba4c0bb152531b9d8c3715> >(class
   <lambda_8b90c8310d35b3462fe809c44bbb350d> && __ptr64,class
   <lambda_c1ccdfe150d00dafd355d15f2a9edeaa> & __ptr64,class
   <lambda_e797892004ba4c0bb152531b9d8c3715> && __ptr64) __ptr64
    public: int __cdecl __crt_seh_guarded_call<int>::operator()<class
   <lambda_b8c45f8f788dd370798f47cfe8ac3a86>,class <lambda_4e60a939b0d047cfe11ddc22648dfba9> &
   __ptr64,class <lambda_332c3edc96d0294ec56c57d38c1cdfd5> >(class
   <lambda_b8c45f8f788dd370798f47cfe8ac3a86> && __ptr64,class
   <lambda_4e60a939b0d047cfe11ddc22648dfba9> & __ptr64,class
   <lambda_332c3edc96d0294ec56c57d38c1cdfd5> && __ptr64) __ptr64
     5 names - too many to list
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  ulonglong uVar1;
  
  __acrt_lock(*param_2);
  uVar1 = FUN_18000559c(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000559c; Evidence: ev_a9c98a50400fd405ab3892f81c695e4f1de33263dba998841e721998a6a1ed8b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000559c(undefined8 *param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  ulonglong *puVar4;
  byte bVar5;
  sbyte sVar6;
  uint uVar7;
  ulonglong *puVar8;
  ulonglong *puVar9;
  ulonglong *puVar10;
  ulonglong uVar11;
  ulonglong *puVar12;
  ulonglong *puVar13;
  
  uVar1 = DAT_180019000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_180019000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_180019000 ^ *puVar8) >> bVar5 | (DAT_180019000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_180019000 ^ puVar8[1]) >> bVar5 | (DAT_180019000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_180019000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_180019000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_180019000 & 0x3f;
          uVar11 = DAT_180019000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_180019000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_180019000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_180006a30(puVar10);
        uVar3 = DAT_180019000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x1800056b4; Evidence: ev_d6a8e3088c1b8be89fa2036a12f6fd44b6d296b3fafe7aca68232bd2281a75cd */

void FUN_1800056b4(undefined8 param_1)

{
  undefined8 local_res8;
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  undefined8 *local_18;
  undefined8 local_10;
  
  local_10 = 0xfffffffffffffffe;
  local_18 = &local_res8;
  local_res18[0] = 2;
  local_res20[0] = 2;
  local_res8 = param_1;
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  return;
}


/* Address: 0x1800056f8; Evidence: ev_1e91306ba5e231595dc9b5d2c70c88136f6906cb4b32682d517102cd825ae466 */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_180019000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_180019000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x180005720; Evidence: ev_c1a2465b3b399825067ed52ce434c6d2bd2b0cf90413dd76f4e0b9d4750cdfc5 */

undefined8 FUN_180005720(void)

{
  DAT_18001a308 = &PTR_DAT_1800190a0;
  return 0x180019001;
}


/* Address: 0x180005740; Evidence: ev_db7c358c67cd894b98f40006f71f2bcbfc2d5a6eef6067ed46a9565d92417a72 */

undefined8 FUN_180005740(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_18001a2c8);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_18001a2e0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x180005770; Evidence: ev_dcc66e90013e034575c05a20589f658bc24756b4816710416eb21d8f07a7ecae */

undefined1 FUN_180005770(void)

{
  return 1;
}


/* Address: 0x180005780; Evidence: ev_8055cf80f884c4ec3b8b0080145445986216945b39b7d671f4707bbb3559a04e */

undefined1 FUN_180005780(void)

{
  FUN_180005514();
  return 1;
}


/* Address: 0x180005790; Evidence: ev_2374b1fea368d0acf8d5be2d0d3c1a75a004e10632dee1ace0a0af6d2cca1d90 */

undefined1 FUN_180005790(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_180019000;
  FUN_180005d7c(DAT_180019000);
  FUN_180008f30(uVar1);
  FUN_180009064(uVar1);
  FUN_1800092e0(uVar1);
  FUN_180004f44(uVar1);
  return 1;
}


/* Address: 0x1800057d0; Evidence: ev_f2bf4f7055666ddc9702535d6261308e00fc133ee0c5751fd1a2db514213cc43 */

void FUN_1800057d0(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x1800057e0; Evidence: ev_76ed5751f407df28cfd5dac25531d2dc382156ba4b22d9b51c6b6e2076775b98 */

undefined8 FUN_1800057e0(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001a580;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001a580 = *DAT_18001a580 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001a580 != (uint *)&DAT_180019210)) {
    uVar2 = FUN_180006a30(DAT_18001a580);
    DAT_18001a580 = (uint *)&DAT_180019210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x180005820; Evidence: ev_43622c90fdcdaedd812b69a5f76e19a869518e147bce3d291c025b8fbb7ec87c */

undefined1 FUN_180005820(void)

{
  FUN_180006a30(DAT_18001aac8);
  DAT_18001aac8 = (LPVOID)0x0;
  FUN_180006a30(DAT_18001aad0);
  DAT_18001aad0 = (LPVOID)0x0;
  FUN_180006a30(DAT_18001a5a0);
  DAT_18001a5a0 = (LPVOID)0x0;
  FUN_180006a30(DAT_18001a5a8);
  DAT_18001a5a8 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x18000587c; Evidence: ev_edc72279455f702babf615d76c3c8f678422724c2846224fc1fbad38cf1364b1 */

void FUN_18000587c(void)

{
  FUN_180008e30(&PTR_FUN_180010640,(undefined8 *)&DAT_180010740);
  return;
}


/* Address: 0x180005890; Evidence: ev_c13d58ba0cd5ad21ca404035bf806621d24120c411ae64c4ac42fd4caf488fa2 */

bool FUN_180005890(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_180006588();
  return p_Var1 != (__acrt_ptd *)0x0;
}


/* Address: 0x1800058a4; Evidence: ev_7b30752dd5bd28ee0a926a5f3134dff77b360ed0348243cb33019d2d0d1bbeee */

undefined1 FUN_1800058a4(void)

{
  FUN_1800064d8();
  return 1;
}


/* Address: 0x1800058b4; Evidence: ev_92fccb1772deed388cfa77f9d1f6f7045b780041a8a8ac27c2fc0507c4571f6a */

/* Library Function - Single Match
    __acrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __acrt_uninitialize(bool param_1)

{
  int iVar1;
  undefined8 in_RAX;
  undefined4 extraout_var;
  undefined8 uVar2;
  
  if (param_1) {
    if (DAT_18001aac0 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_180008eb0(0x180010640,0x180010740);
  return uVar2;
}


/* Address: 0x1800058ec; Evidence: ev_e1a6a852a904297308c5b561a4dc4d0da0218ce24976235b9298343f3bf3273c */

undefined4 FUN_1800058ec(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_1800066d0();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x1800058fc; Evidence: ev_ac6abe3247ed22b167adccd0c33db241b9fe6100352c37b11470f6c44301c98c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800058fc(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006528();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180005920; Evidence: ev_d33d856f25fe352de85b0b26593ac723b01f415fdb9f88dcc0b67e7c8a4201d4 */

void thunk_FUN_180006a30(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001a678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180005f40(DVar2);
    puVar4 = (uint *)FUN_180006080();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x180005930; Evidence: ev_bf8f04b37887a85d0a35cd745f28a6e3e6c078d93728cac1be10005963a4c0a1 */

LPVOID _malloc_base(ulonglong param_1)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  undefined4 *puVar4;
  
  if (param_1 < 0xffffffffffffffe1) {
    if (param_1 == 0) {
      param_1 = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_18001a678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a620();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180008ef0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_180006080();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180005940; Evidence: ev_40adb8bda14b02a833ba67f99324f1ea494920be986a08251fce78c82c868a17 */

undefined8 FUN_180005940(char *param_1,longlong param_2,longlong param_3)

{
  char cVar1;
  undefined4 *puVar2;
  char *pcVar3;
  
  if ((param_1 != (char *)0x0) && (param_2 != 0)) {
    if (param_3 != 0) {
      pcVar3 = param_1;
      do {
        cVar1 = pcVar3[param_3 - (longlong)param_1];
        *pcVar3 = cVar1;
        pcVar3 = pcVar3 + 1;
        if (cVar1 == '\0') {
          return 0;
        }
        param_2 = param_2 + -1;
      } while (param_2 != 0);
      *param_1 = '\0';
      puVar2 = (undefined4 *)FUN_180006080();
      *puVar2 = 0x22;
      FUN_180005ed8();
      return 0x22;
    }
    *param_1 = '\0';
  }
  puVar2 = (undefined4 *)FUN_180006080();
  *puVar2 = 0x16;
  FUN_180005ed8();
  return 0x16;
}


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


/* Address: 0x180005a20; Evidence: ev_5fae835b2647f0c309777f1b2ffa5ff81c1869c60e9728133282ea6e96b70154 */

longlong FUN_180005a20(longlong *param_1)

{
  __acrt_ptd *p_Var1;
  longlong lVar2;
  DWORD local_res8 [2];
  
  if (*param_1 == 0) {
    local_res8[0] = GetLastError();
    if ((char)param_1[2] == '\0') {
      lVar2 = 0;
      *(undefined1 *)(param_1 + 2) = 1;
      param_1[1] = 0;
    }
    else {
      lVar2 = param_1[1];
    }
    p_Var1 = FUN_180006618(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x180005a90; Evidence: ev_a7985332a80b7aacbe701454c7f16e918a44ddf7a4901f20fc917da8850f5fb7 */

void FUN_180005a90(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a20(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180006728(lVar1,param_1 + 3,param_1[1]);
  FUN_180006794(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x180005b10; Evidence: ev_7aa844e1207cc4e4bcda4fb062526650557976e6818b7479f7ab163312c0c362 */

LPVOID _calloc_base(ulonglong param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  undefined4 *puVar4;
  SIZE_T dwBytes;
  
  if ((param_1 == 0) || (param_2 <= 0xffffffffffffffe0 / param_1)) {
    dwBytes = param_1 * param_2;
    if (dwBytes == 0) {
      dwBytes = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_18001a678,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a620();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180008ef0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_180006080();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180005b20; Evidence: ev_b0f6b9173b0d5de4c4249d4e6b655465edd2412c024d0479f3fdca3147a5ed44 */

/* Library Function - Single Match
    wcsncmp
   
   Library: Visual Studio 2005 Release */

int __cdecl wcsncmp(wchar_t *_Str1,wchar_t *_Str2,size_t _MaxCount)

{
  if (_MaxCount == 0) {
    return 0;
  }
  for (; ((_MaxCount = _MaxCount - 1, _MaxCount != 0 && (*_Str1 != L'\0')) && (*_Str1 == *_Str2));
      _Str1 = _Str1 + 1) {
    _Str2 = _Str2 + 1;
  }
  return (uint)(ushort)*_Str1 - (uint)(ushort)*_Str2;
}


/* Address: 0x180005b54; Evidence: ev_b81c973428d8533c095b9ac4b8220730963f03b5ac2741d5d8f4ae6cf5da160d */

__acrt_ptd * FUN_180005b54(longlong *param_1)

{
  __acrt_ptd *p_Var1;
  longlong lVar2;
  DWORD local_res8 [2];
  
  p_Var1 = (__acrt_ptd *)*param_1;
  lVar2 = 0;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    local_res8[0] = GetLastError();
    if ((char)param_1[2] == '\0') {
      param_1[1] = 0;
      *(undefined1 *)(param_1 + 2) = 1;
    }
    else {
      lVar2 = param_1[1];
    }
    p_Var1 = FUN_180006618(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x180005bc0; Evidence: ev_82ae6c323a3103a14a6ec343489df2ea876b9133f466d9adf15a9e275066e045 */

longlong FUN_180005bc0(longlong param_1,longlong param_2)

{
  DWORD dwErrCode;
  longlong lVar1;
  
  lVar1 = 0;
  if (*(char *)(param_2 + 0x10) == '\0') {
    dwErrCode = GetLastError();
    *(undefined8 *)(param_2 + 8) = 0;
    *(undefined1 *)(param_2 + 0x10) = 1;
    SetLastError(dwErrCode);
  }
  else {
    lVar1 = *(longlong *)(param_2 + 8);
  }
  return param_1 + lVar1 * 8;
}


/* Address: 0x180005c0c; Evidence: ev_e1409ced4529bbea867d3cd7eab131abf3fb8fa42a43e235b512619429007402 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005c0c(int param_1,DWORD param_2,DWORD param_3)

{
  BOOL BVar1;
  LONG LVar2;
  PRUNTIME_FUNCTION FunctionEntry;
  undefined1 local_res8 [8];
  undefined1 auStackY_608 [32];
  ulonglong local_5c8 [2];
  PVOID local_5b8;
  _EXCEPTION_POINTERS local_5b0;
  EXCEPTION_RECORD local_598;
  _CONTEXT local_4f8;
  ulonglong local_28;
  
  local_28 = DAT_180019000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180001b7c();
  }
  FUN_18000dad0((undefined1 (*) [32])&local_598,0,0x98);
  FUN_18000dad0((undefined1 (*) [32])&local_4f8,0,0x4d0);
  local_5c8[1] = 0;
  local_5b0.ExceptionRecord = &local_598;
  local_5c8[0] = 0;
  local_5b8 = (PVOID)0x0;
  local_5b0.ContextRecord = &local_4f8;
  RtlCaptureContext(&local_4f8);
  FunctionEntry = RtlLookupFunctionEntry(local_4f8.Rip,local_5c8,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    RtlVirtualUnwind(0,local_5c8[0],local_4f8.Rip,FunctionEntry,&local_4f8,&local_5b8,local_5c8 + 1,
                     (PKNONVOLATILE_CONTEXT_POINTERS)0x0);
  }
  local_4f8.Rsp = (DWORD64)local_res8;
  local_598.ExceptionCode = param_2;
  local_598.ExceptionFlags = param_3;
  BVar1 = IsDebuggerPresent();
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  LVar2 = UnhandledExceptionFilter(&local_5b0);
  if (((LVar2 == 0) && (BVar1 == 0)) && (param_1 != -1)) {
    FUN_180001b7c();
  }
  return;
}


/* Address: 0x180005d7c; Evidence: ev_2d1364bffa145b5c4c1358189e0364329c918b24e222b9a23894c842c46f15cd */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005d7c(undefined8 param_1)

{
  _DAT_18001a2f8 = param_1;
  return;
}


/* Address: 0x180005d84; Evidence: ev_e492d6ee9c42b45704b1e545a89ddb27aa713bb35bbe42ced075390d4e91ce62 */

void FUN_180005d84(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  )

{
  longlong lVar1;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18001a304 == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800191f8;
    puStack_28 = PTR_DAT_180019200;
  }
  FUN_180005e20(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_180005a20(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_180005a20(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x180005e20; Evidence: ev_4c9d2dfb6a0aebbda46a2e31cb2b264851dca0d4c6def5158abba923bf9fa25f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005e20(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180005b54(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180005bc0(0x18001a2f8,(longlong)param_6);
    bVar3 = (byte)DAT_180019000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_180019000) >> bVar3 | (*puVar2 ^ DAT_180019000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x180005ed8; Evidence: ev_0e1d686ebae527612a2db6fb36f710d76e7c3eb900201d485ed1c758465385fe */

void FUN_180005ed8(void)

{
  FUN_180005d84((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x180005ef8; Evidence: ev_bd2dd95e9c210f50c4f6e977e5fe52da64074dd02101357d4bcfa9342fcaebd5 */

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
  *(undefined8 *)(puVar3 + -8) = 0x180005f26;
  FUN_180005c0c(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x180005f2c;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x000180005f38. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x180005f40; Evidence: ev_f945c7ea751a3f63030d362deec91dd22356398ba798238ae002404866b09498 */

uint FUN_180005f40(uint param_1)

{
  longlong lVar1;
  uint uVar2;
  ulonglong uVar3;
  uint *puVar4;
  ulonglong uVar5;
  ulonglong uVar6;
  ulonglong uVar7;
  ulonglong uVar8;
  ulonglong uVar9;
  
  if (param_1 != 0) {
    if (param_1 < 0xe) {
      return *(uint *)(&DAT_180010744 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_180010740 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_180005fe1:
            if (puVar4 != (uint *)0x0) {
              return puVar4[1];
            }
          }
          break;
        }
        uVar6 = uVar9 - 1;
        if ((uVar5 & 1) != 0) {
          uVar6 = uVar9;
        }
        lVar1 = uVar6 + uVar7;
        puVar4 = (uint *)(&DAT_180010740 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_180005fe1;
        uVar3 = lVar1 - 1;
        uVar5 = uVar6;
        if (*puVar4 <= param_1) {
          uVar7 = lVar1 + 1;
          uVar3 = uVar8;
          uVar5 = uVar9;
        }
        uVar8 = uVar3;
      } while (uVar7 <= uVar3);
    }
  }
  if (param_1 - 0x13 < 0x12) {
    uVar2 = 0xd;
  }
  else {
    uVar2 = 0x16;
    if (param_1 - 0xbc < 0xf) {
      uVar2 = 8;
    }
  }
  return uVar2;
}


/* Address: 0x180006010; Evidence: ev_4f4f03880ce8621997108699a311475456b13e583a0c85b0f6a4f805f9ac6119 */

void FUN_180006010(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  uint *puVar3;
  
  p_Var2 = FUN_18000605c();
  *(uint *)p_Var2 = param_1;
  uVar1 = FUN_180005f40(param_1);
  puVar3 = (uint *)FUN_180006080();
  *puVar3 = uVar1;
  return;
}


/* Address: 0x180006038; Evidence: ev_ccc106d92e99d3b695c648640ca766877d75eaa07c52baa6a6076a42a97f7eef */

void FUN_180006038(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_180005f40(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x18000605c; Evidence: ev_2d6e0da5aac08e2022cfad4243607d27d8ce063d54746391c3966ec96d2c4617 */

__acrt_ptd * FUN_18000605c(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_180006588();
  p_Var2 = p_Var1 + 0x24;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180019094;
  }
  return p_Var2;
}


/* Address: 0x180006080; Evidence: ev_e2ba28ba5b480fe0e3aad18be1d3539f73488e82e14d9a3ecec29007225f64bb */

undefined * FUN_180006080(void)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var1 = FUN_180006588();
  p_Var2 = p_Var1 + 0x20;
  if (p_Var1 == (__acrt_ptd *)0x0) {
    p_Var2 = (__acrt_ptd *)&DAT_180019090;
  }
  return p_Var2;
}


/* Address: 0x1800060a4; Evidence: ev_425a61495a3917414f3b4941ae6ca64be0fbcbc4bad46a21fd6679151a667e7e */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_0ae27a3a962d80f24befdcbee591983d>,class <lambda_8d0ee55de4b1038c4002e0adecdf1839> &
   __ptr64,class <lambda_dc504788e8f1664fe9b84e20bfb512f2> >(class
   <lambda_0ae27a3a962d80f24befdcbee591983d> && __ptr64,class
   <lambda_8d0ee55de4b1038c4002e0adecdf1839> & __ptr64,class
   <lambda_dc504788e8f1664fe9b84e20bfb512f2> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_72d1df2b273a38828b1ce30cbf4cdab5>,class <lambda_876a65b173b8412d3a47c70a915b0cf4> &
   __ptr64,class <lambda_41932305e351933ebe8f8be3ed8bb5dc> >(class
   <lambda_72d1df2b273a38828b1ce30cbf4cdab5> && __ptr64,class
   <lambda_876a65b173b8412d3a47c70a915b0cf4> & __ptr64,class
   <lambda_41932305e351933ebe8f8be3ed8bb5dc> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800060e4; Evidence: ev_44d9231456f2294b05b8fd266f68f1a541a67d0f1d78c56aee8ebcb06eb7bd65 */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_2d41944a1d46af3157314b8a01080d33>,class <lambda_8f455de75cd7d7f24b4096f044d8b9e6> &
   __ptr64,class <lambda_aa500f224e6afead328df44964fe2772> >(class
   <lambda_2d41944a1d46af3157314b8a01080d33> && __ptr64,class
   <lambda_8f455de75cd7d7f24b4096f044d8b9e6> & __ptr64,class
   <lambda_aa500f224e6afead328df44964fe2772> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_fb3a7dec4e47f37f22dae91bb15c9095>,class <lambda_698284760c8add0bfb0756c19673e34b> &
   __ptr64,class <lambda_dfb8eca1e75fef3034a8fb18dd509707> >(class
   <lambda_fb3a7dec4e47f37f22dae91bb15c9095> && __ptr64,class
   <lambda_698284760c8add0bfb0756c19673e34b> & __ptr64,class
   <lambda_dfb8eca1e75fef3034a8fb18dd509707> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  replace_current_thread_locale_nolock(*(__acrt_ptd **)*param_3,(__crt_locale_data *)0x0);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180006124; Evidence: ev_65aeecb2e0ed6679ca27b09afc4a27e80837ce49d59027c521d4b806e38a3f7b */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_5e887d1dcbef67a5eb4283622ba103bf>,class <lambda_4466841279450cc726390878d4a41900> &
   __ptr64,class <lambda_341c25c0346d94847f1f3c463c57e077> >(class
   <lambda_5e887d1dcbef67a5eb4283622ba103bf> && __ptr64,class
   <lambda_4466841279450cc726390878d4a41900> & __ptr64,class
   <lambda_341c25c0346d94847f1f3c463c57e077> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_aa87e3671a710a21b5dc78c0bdf72e11>,class <lambda_92619d2358a28f41a33ba319515a20b9> &
   __ptr64,class <lambda_6992ecaafeb10aed2b74cb1fae11a551> >(class
   <lambda_aa87e3671a710a21b5dc78c0bdf72e11> && __ptr64,class
   <lambda_92619d2358a28f41a33ba319515a20b9> & __ptr64,class
   <lambda_6992ecaafeb10aed2b74cb1fae11a551> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  __acrt_lock(*param_2);
  replace_current_thread_locale_nolock
            (*(__acrt_ptd **)*param_3,(__crt_locale_data *)**(undefined8 **)param_3[1]);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x18000616c; Evidence: ev_4f71b8fa16a8cb3ceb7ee54cf325b2dd713e342be7564070e916f59ab10715e1 */

/* Library Function - Multiple Matches With Same Base Name
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_46352004c1216016012b18bd6f87e700>,class <lambda_3bd07e1a1191394380780325891bf33f> &
   __ptr64,class <lambda_334532d3f185bcaa59b5be82d7d22bff> >(class
   <lambda_46352004c1216016012b18bd6f87e700> && __ptr64,class
   <lambda_3bd07e1a1191394380780325891bf33f> & __ptr64,class
   <lambda_334532d3f185bcaa59b5be82d7d22bff> && __ptr64) __ptr64
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_f2e299630e499de9f9a165e60fcd3db5>,class <lambda_2ae9d31cdba2644fcbeaf08da7c24588> &
   __ptr64,class <lambda_40d01ff24d0e7b3814fdbdcee8eab3c7> >(class
   <lambda_f2e299630e499de9f9a165e60fcd3db5> && __ptr64,class
   <lambda_2ae9d31cdba2644fcbeaf08da7c24588> & __ptr64,class
   <lambda_40d01ff24d0e7b3814fdbdcee8eab3c7> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void operator()<>(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  int iVar1;
  int *piVar2;
  
  __acrt_lock(*param_2);
  piVar2 = *(int **)(*(longlong *)*param_3 + 0x88);
  if (piVar2 != (int *)0x0) {
    LOCK();
    iVar1 = *piVar2;
    *piVar2 = *piVar2 + -1;
    UNLOCK();
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_180019210)) {
      FUN_180006a30(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800061cc; Evidence: ev_325e1a41c714076fb9b4056f30a70dff4a9f906ebdbf7e64914239993f46be7a */

/* Library Function - Single Match
    void __cdecl construct_ptd_array(struct __acrt_ptd * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl construct_ptd_array(__acrt_ptd *param_1)

{
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  int local_38 [2];
  __acrt_ptd *local_30;
  undefined8 *local_28;
  __acrt_ptd **local_20;
  __acrt_ptd **local_18;
  undefined8 **local_10;
  
  local_20 = &local_30;
  local_res18[0] = 5;
  local_res20[0] = 5;
  local_18 = &local_30;
  local_10 = &local_28;
  local_38[0] = 4;
  local_38[1] = 4;
  local_28 = &DAT_18001a308;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_1800104a0;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_180019210;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x1800062a0; Evidence: ev_6adf6fdaab6a31b17457382372ed8478f8331624245d2b471d4e6f998aeedc8b */

void FUN_1800062a0(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_180006a30(param_1);
  }
  return;
}


/* Address: 0x1800062c0; Evidence: ev_470b4fa6ce9cc20b627f8ea4ba5e8a13cb7a3c2b01e5b2d2e90b3475c3cf81e3 */

/* Library Function - Single Match
    void __cdecl destroy_ptd_array(struct __acrt_ptd * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl destroy_ptd_array(__acrt_ptd *param_1)

{
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  int local_28 [2];
  __acrt_ptd *local_20;
  __acrt_ptd **local_18;
  __acrt_ptd **local_10;
  
  local_18 = &local_20;
  local_res18[0] = 5;
  local_res20[0] = 5;
  local_10 = &local_20;
  local_28[0] = 4;
  local_28[1] = 4;
  local_20 = param_1;
  if (*(undefined **)param_1 != &DAT_1800104a0) {
    FUN_180006a30(*(undefined **)param_1);
  }
  FUN_180006a30(*(LPVOID *)(local_20 + 0x70));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x58));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x60));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x68));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x48));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x50));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x78));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x80));
  FUN_180006a30(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x1800063b8; Evidence: ev_97cca0bd41e1c233a1ff117e1b660c5205406cbb0917c2a127573a0abe4e0db9 */

__acrt_ptd * FUN_1800063b8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_180019098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_180019098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_180019098,(PVOID)0x0);
        FUN_180006a30(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180006a30((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_180019098,(PVOID)0x0);
    FUN_180006a30((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x180006470; Evidence: ev_63d8ba00154ac679dad46fda277360e76361a3b19d4e7a382959b143d194b2c6 */

/* Library Function - Single Match
    void __cdecl replace_current_thread_locale_nolock(struct __acrt_ptd * __ptr64 const,struct
   __crt_locale_data * __ptr64 const)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl replace_current_thread_locale_nolock(__acrt_ptd *param_1,__crt_locale_data *param_2)

{
  undefined **ppuVar1;
  
  if (*(longlong *)(param_1 + 0x90) != 0) {
    __acrt_release_locale_ref(*(longlong *)(param_1 + 0x90));
    ppuVar1 = *(undefined ***)(param_1 + 0x90);
    if (((ppuVar1 != DAT_18001a308) && (ppuVar1 != &PTR_DAT_1800190a0)) &&
       (*(int *)(ppuVar1 + 2) == 0)) {
      __acrt_free_locale(ppuVar1);
    }
  }
  *(__crt_locale_data **)(param_1 + 0x90) = param_2;
  if (param_2 != (__crt_locale_data *)0x0) {
    __acrt_add_locale_ref((longlong)param_2);
  }
  return;
}


/* Address: 0x1800064d8; Evidence: ev_559fbdceecc6b5528372eb98aac48234ae1cbdd93d6097175995182a3c50a886 */

void FUN_1800064d8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_180019098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_180019098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_180019098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_180006a30(p_Var1);
  }
  return;
}


/* Address: 0x180006528; Evidence: ev_e7cb79fbbfd26595e3fd3f816181b993eef5dd23a3914336dd6e513346078ff0 */

void FUN_180006528(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = FUN_180006588();
  if (p_Var1 != (__acrt_ptd *)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006544; Evidence: ev_6c3476b57e56da5ae1a0a7dbeb860f84fc94600d24ad43eb8e9db9f8ec572982 */

void FUN_180006544(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_180019098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_180019098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_1800063b8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_180006580;
    }
    return;
  }
LAB_180006580:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006588; Evidence: ev_6e7ce91480a573da224b84243353d1bc6185b5c296db27be87c04075716c9964 */

__acrt_ptd * FUN_180006588(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_18001a300 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_180019098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_180019098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800063b8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_180019098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_1800088fc();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800063b8();
    }
  }
  return p_Var2;
}


/* Address: 0x180006618; Evidence: ev_ce687fa02fd68749e4f422649343d9c5f4e028726fc827c4f0f70ef7c3f88c3b */

__acrt_ptd * FUN_180006618(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_180019098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_180019098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_1800063b8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x180006680; Evidence: ev_c1cb9765c1e1a195392c5cd343fae1d9f4edce3c6b4c4b53a36da779344d5cb1 */

ulonglong FUN_180006680(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001a300 = FUN_180008aa0();
  DAT_180019098 = FlsAlloc(FUN_1800062a0);
  uVar2 = CONCAT44(extraout_var,DAT_180019098);
  if (DAT_180019098 != 0xffffffff) {
    p_Var3 = FUN_180006588();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_1800066d0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x1800066d0; Evidence: ev_951c7b5939a9d2b4df46a605f0392c6137b87bd402dc300968d658d12509c300 */

undefined4 FUN_1800066d0(void)

{
  BOOL in_EAX;
  
  if (DAT_180019098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_180019098);
    DAT_180019098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x1800066f4; Evidence: ev_371bd153d063d4711e43f8eae19266965e7d87337571613b9c5439d2834d750c */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_18001a308) && ((DAT_180019858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180006728; Evidence: ev_146db5bb1c14af6535965af8fb3249fa9af8c469ca2b6abac59e618db05ccb88 */

void FUN_180006728(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001a308)[param_3]) && ((DAT_180019858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180006760; Evidence: ev_d13ff9f0b93d74efdf9aaf5e728dd7067f83757debe46ad28aee19adf864b6c4 */

void FUN_180006760(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001a580) && ((DAT_180019858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_180007fc0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x180006794; Evidence: ev_277b68ed99390f7f40bb20db0b89b1ad2757b408c7beef3a0f606cc7a3db52e1 */

void FUN_180006794(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_18001a580)[param_3]) && ((DAT_180019858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_180007fc0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x1800067cc; Evidence: ev_c634749848ca377fb7929d6bc76d2d3c65ccd0fde1cca55c03be65ca967f249e */

/* Library Function - Single Match
    public: void __cdecl __crt_seh_guarded_call<void>::operator()<class
   <lambda_410d79af7f07d98d83a3f525b3859a53>,class <lambda_3e16ef9562a7dcce91392c22ab16ea36> &
   __ptr64,class <lambda_38119f0e861e05405d8a144b9b982f0a> >(class
   <lambda_410d79af7f07d98d83a3f525b3859a53> && __ptr64,class
   <lambda_3e16ef9562a7dcce91392c22ab16ea36> & __ptr64,class
   <lambda_38119f0e861e05405d8a144b9b982f0a> && __ptr64) __ptr64
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __thiscall
__crt_seh_guarded_call<void>::
operator()<<lambda_410d79af7f07d98d83a3f525b3859a53>,<lambda_3e16ef9562a7dcce91392c22ab16ea36>&___ptr64,<lambda_38119f0e861e05405d8a144b9b982f0a>_>
          (__crt_seh_guarded_call<void> *this,<lambda_410d79af7f07d98d83a3f525b3859a53> *param_1,
          <lambda_3e16ef9562a7dcce91392c22ab16ea36> *param_2,
          <lambda_38119f0e861e05405d8a144b9b982f0a> *param_3)

{
  undefined **ppuVar1;
  longlong *plVar2;
  
  __acrt_lock(*(int *)param_1);
  for (plVar2 = &DAT_18001a308; plVar2 != &DAT_18001a310; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_1800190a0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_1800190a0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x18000683c; Evidence: ev_f788335aefa3c83d86f24becb63909b49919c3c3117ed6ff8e34dde97727606c */

undefined4 FUN_18000683c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001a304;
  LOCK();
  DAT_18001a304 = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x180006850; Evidence: ev_e0f68b22c944b76dae140de3c2cdaaa6f6569df9c36df7c21286c596fcb570cd */

/* Library Function - Single Match
    __acrt_uninitialize_locale
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_uninitialize_locale(void)

{
  <lambda_3e16ef9562a7dcce91392c22ab16ea36> local_res8 [8];
  undefined4 local_res10 [2];
  undefined4 local_res18 [4];
  
  local_res10[0] = 4;
  local_res18[0] = 4;
  __crt_seh_guarded_call<void>::
  operator()<<lambda_410d79af7f07d98d83a3f525b3859a53>,<lambda_3e16ef9562a7dcce91392c22ab16ea36>&___ptr64,<lambda_38119f0e861e05405d8a144b9b982f0a>_>
            ((__crt_seh_guarded_call<void> *)local_res8,
             (<lambda_410d79af7f07d98d83a3f525b3859a53> *)local_res18,local_res8,
             (<lambda_38119f0e861e05405d8a144b9b982f0a> *)local_res10);
  return;
}


/* Address: 0x180006880; Evidence: ev_9d306ac3d9118a942674fc35c762cecabcac66f092a00d3792d908db1d9e6920 */

/* Library Function - Single Match
    __acrt_initialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong __acrt_initialize_locks(void)

{
  BOOL BVar1;
  undefined4 extraout_var;
  ulonglong uVar2;
  uint uVar3;
  
  uVar2 = 0;
  do {
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_18001a310 + uVar2 * 5),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_18001a568 = DAT_18001a568 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x1800068c8; Evidence: ev_ef3847d58ae487116494770a946361a9afea913c6afd669c58682b0420b642f6 */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800068da. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001a310 + (longlong)param_1 * 5);
  return;
}


/* Address: 0x1800068f0; Evidence: ev_f2d05e2bb211d69a619ca439d3aaf4426c6bc0bc39e7f012532f4fe0aa7181c7 */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_18001a568;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_18001a310 + uVar1 * 5));
    DAT_18001a568 = DAT_18001a568 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180006928; Evidence: ev_c869b4c4fdf1c0daa4bddf62f820cf265392d18759f0ba54a72fccf9827e43d6 */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000693a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001a310 + (longlong)param_1 * 5);
  return;
}


/* Address: 0x180006944; Evidence: ev_f89baa7c8a2d52c5fde5fad893fc51df3e7506fff614f289c9acc7671ec1501f */

uint FUN_180006944(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x180006960; Evidence: ev_537053db3d0b4e21b0a88fc35debc8759e36eb9381c7072fa925811f9a6df678 */

uint FUN_180006960(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x180006978; Evidence: ev_e0b3ba19addcec7acbf9e1c5da57a7d204b4b375c9de0cb69a36dcf05b837c3e */

bool FUN_180006978(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_180006960();
  if ((char)uVar1 == '\0') {
    FUN_18000883c(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x1800069b0; Evidence: ev_a2ed388a039d0afa1a0f53e7e76e59df47a59e673ca99038634b8b46633f5413 */

/* Library Function - Single Match
    _calloc_base
   
   Library: Visual Studio 2019 Release */

LPVOID _calloc_base(ulonglong param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  undefined4 *puVar4;
  SIZE_T dwBytes;
  
  if ((param_1 == 0) || (param_2 <= 0xffffffffffffffe0 / param_1)) {
    dwBytes = param_1 * param_2;
    if (dwBytes == 0) {
      dwBytes = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_18001a678,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a620();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180008ef0(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_180006080();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180006a30; Evidence: ev_d0de22e8133599d7c5cd37750d2d32f0f29eec0357ed9e3d7056fe9cb959ed0e */

void FUN_180006a30(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001a678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180005f40(DVar2);
    puVar4 = (uint *)FUN_180006080();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x180006a90; Evidence: ev_1f44964171c5b5d0c639332a69f463f40f8af22fca8fea5193023df351a4de3f */

ulonglong FUN_180006a90(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x180006aa4; Evidence: ev_a3023b9db23b8f460686374103533cf12da5beb2188a859689ba7f002ee2ed48 */

uint FUN_180006aa4(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  LPVOID pvVar3;
  uint *puVar4;
  uint uVar5;
  ulonglong uVar6;
  bool bVar7;
  
  if (param_1 == (char *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      FUN_180006a30(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_180008358(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180006a30(*(LPVOID *)(param_2 + 0x10));
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          pvVar3 = _malloc_base(uVar6 * 2);
          *(LPVOID *)(param_2 + 0x10) = pvVar3;
          uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
          if (pvVar3 != (LPVOID)0x0) {
            uVar5 = 0;
          }
          *(bool *)(param_2 + 0x28) = pvVar3 != (LPVOID)0x0;
          *(ulonglong *)(param_2 + 0x18) = -(ulonglong)(pvVar3 != (LPVOID)0x0) & uVar6;
          if (uVar5 != 0) {
            return uVar5;
          }
        }
        iVar1 = FUN_180008358(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180006010(DVar2);
      puVar4 = (uint *)FUN_180006080();
      return *puVar4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180006a30(*(LPVOID *)(param_2 + 0x10));
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
      pvVar3 = _malloc_base(2);
      *(LPVOID *)(param_2 + 0x10) = pvVar3;
      bVar7 = pvVar3 != (LPVOID)0x0;
      uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
      if (bVar7) {
        uVar5 = 0;
      }
      *(bool *)(param_2 + 0x28) = bVar7;
      *(ulonglong *)(param_2 + 0x18) = (ulonglong)bVar7;
      if (uVar5 != 0) {
        return uVar5;
      }
    }
    **(undefined2 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x180006c44; Evidence: ev_a4e1e8bade77e00e8f2840433e57340b3058fca0406807f3bafdcc69eb2fc742 */

uint FUN_180006c44(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  LPVOID pvVar3;
  uint *puVar4;
  uint uVar5;
  ulonglong uVar6;
  bool bVar7;
  
  if (param_1 == (short *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      FUN_180006a30(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_1800083e8(param_4,0,param_1,0xffffffff);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180006a30(*(LPVOID *)(param_2 + 0x10));
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          pvVar3 = _malloc_base(uVar6);
          *(LPVOID *)(param_2 + 0x10) = pvVar3;
          uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
          if (pvVar3 != (LPVOID)0x0) {
            uVar5 = 0;
          }
          *(bool *)(param_2 + 0x28) = pvVar3 != (LPVOID)0x0;
          *(ulonglong *)(param_2 + 0x18) = -(ulonglong)(pvVar3 != (LPVOID)0x0) & uVar6;
          if (uVar5 != 0) {
            return uVar5;
          }
        }
        iVar1 = FUN_1800083e8(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180006010(DVar2);
      puVar4 = (uint *)FUN_180006080();
      return *puVar4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180006a30(*(LPVOID *)(param_2 + 0x10));
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
      pvVar3 = _malloc_base(1);
      *(LPVOID *)(param_2 + 0x10) = pvVar3;
      bVar7 = pvVar3 != (LPVOID)0x0;
      uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
      if (bVar7) {
        uVar5 = 0;
      }
      *(bool *)(param_2 + 0x28) = bVar7;
      *(ulonglong *)(param_2 + 0x18) = (ulonglong)bVar7;
      if (uVar5 != 0) {
        return uVar5;
      }
    }
    **(undefined1 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x180006df0; Evidence: ev_9c77577afd7308a003078449ea072472928c35138c67790e7ae088985902c4c4 */

ulonglong FUN_180006df0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined4 *puVar2;
  ulonglong uVar3;
  byte *pbVar4;
  LPVOID pvVar5;
  longlong lVar6;
  longlong *plVar7;
  longlong *plVar8;
  char *pcVar9;
  ulonglong uVar10;
  longlong *plVar11;
  longlong lVar12;
  longlong local_res10;
  ulonglong local_res18;
  char *local_res20;
  longlong *local_58;
  longlong *plStack_50;
  undefined8 local_48;
  
  if (param_2 == (undefined8 *)0x0) {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 0x16;
    FUN_180005ed8();
    uVar3 = 0x16;
  }
  else {
    *param_2 = 0;
    pbVar4 = (byte *)*param_1;
    local_58 = (longlong *)0x0;
    plStack_50 = (longlong *)0x0;
    local_48 = 0;
    while (plVar7 = plStack_50, plVar8 = local_58, pbVar4 != (byte *)0x0) {
      local_res10 = CONCAT53(local_res10._3_5_,0x3f2a);
      pbVar4 = FUN_18000abd0(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000702c((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_180006a30((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180006f3f;
        }
      }
      else {
        uVar10 = FUN_1800071b0((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_180006a30((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180006f3f;
        }
      }
      param_1 = param_1 + 1;
      pbVar4 = (byte *)*param_1;
    }
    uVar10 = ((longlong)plStack_50 - (longlong)local_58 >> 3) + 1;
    local_res18 = 0;
    for (plVar11 = local_58; plVar11 != plStack_50; plVar11 = plVar11 + 1) {
      lVar6 = -1;
      do {
        lVar6 = lVar6 + 1;
      } while (*(char *)(*plVar11 + lVar6) != '\0');
      local_res18 = local_res18 + 1 + lVar6;
    }
    pvVar5 = __acrt_allocate_buffer_for_argv(uVar10,local_res18,1);
    if (pvVar5 == (LPVOID)0x0) {
      FUN_180006a30((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006a30((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_180006f3f:
      FUN_180006a30(plVar8);
    }
    else {
      pcVar9 = (char *)((longlong)pvVar5 + uVar10 * 8);
      local_res20 = pcVar9;
      if (plVar8 != plVar7) {
        local_res10 = (longlong)pvVar5 - (longlong)plVar8;
        plVar11 = plVar8;
        do {
          lVar6 = -1;
          do {
            lVar12 = lVar6;
            lVar6 = lVar12 + 1;
          } while (*(char *)(*plVar11 + lVar6) != '\0');
          lVar12 = lVar12 + 2;
          iVar1 = FUN_18000aa00(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
                                *plVar11,lVar12);
          if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
            _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
          }
          *(char **)(local_res10 + (longlong)plVar11) = pcVar9;
          pcVar9 = pcVar9 + lVar12;
          plVar11 = plVar11 + 1;
        } while (plVar11 != plVar7);
      }
      *param_2 = pvVar5;
      FUN_180006a30((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006a30((LPVOID)*plVar11);
      }
      FUN_180006a30(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000702c; Evidence: ev_966116ead37741d19e12c01a2e922181b639960f610f680b3f00f88986ba851d */

undefined8 FUN_18000702c(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

{
  int iVar1;
  char *pcVar2;
  LPVOID pvVar3;
  longlong lVar4;
  ulonglong uVar6;
  undefined8 uVar7;
  ulonglong uVar8;
  longlong lVar5;
  
  uVar7 = 0;
  lVar4 = -1;
  do {
    lVar5 = lVar4;
    lVar4 = lVar5 + 1;
  } while (*(char *)(param_1 + lVar4) != '\0');
  uVar6 = lVar5 + 2;
  if (~param_3 < uVar6) {
    return 0xc;
  }
  uVar8 = param_3 + 1 + uVar6;
  pcVar2 = _calloc_base(uVar8,1);
  if (((param_3 != 0) && (iVar1 = FUN_18000aa00(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_18000aa00(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_180006a30((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_180007182;
      }
    }
    else {
      uVar6 = param_4[2] - *param_4 >> 3;
      if (uVar6 < 0x8000000000000000) {
        pvVar3 = _recalloc_base((LPVOID)*param_4,uVar6 * 2,8);
        if (pvVar3 != (LPVOID)0x0) {
          *param_4 = (longlong)pvVar3;
          param_4[1] = (longlong)((longlong)pvVar3 + uVar6 * 8);
          param_4[2] = (longlong)((longlong)pvVar3 + uVar6 * 0x10);
          FUN_180006a30((LPVOID)0x0);
          goto LAB_180007182;
        }
        FUN_180006a30((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_180006a30(pcVar2);
  }
  else {
LAB_180007182:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_180006a30((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x1800071b0; Evidence: ev_646f50b6dcfe9a55553e7e481a7498f0c5cb775a3f4da706c6fb3230e3e8c23c */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800071b0(uchar *param_1,uchar *param_2,longlong *param_3)

{
  byte bVar1;
  char *pcVar2;
  uint uVar3;
  BOOL BVar4;
  ulonglong uVar5;
  HANDLE hFindFile;
  INT_PTR IVar6;
  ulonglong uVar7;
  LPCWSTR lpFileName;
  char *pcVar8;
  longlong lVar9;
  longlong lVar10;
  byte bVar11;
  undefined1 auStackY_378 [32];
  undefined1 local_348 [8];
  ulonglong local_340;
  undefined8 local_338;
  undefined8 local_330;
  LPCWSTR local_328;
  undefined8 local_320;
  undefined8 local_318;
  char local_310;
  longlong local_308;
  longlong local_300;
  char local_2f0;
  longlong local_2e8;
  longlong local_2e0;
  char local_2d0;
  undefined8 local_2c8;
  undefined8 local_2c0;
  char *local_2b8;
  undefined8 local_2b0;
  undefined8 local_2a8;
  char local_2a0;
  _WIN32_FIND_DATAW local_298;
  ulonglong local_48;
  
  local_48 = DAT_180019000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_18000af88(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_18000702c((longlong)param_1,0,0,param_3);
  }
  else {
    bVar11 = *param_2 - 0x2f;
    uVar3 = 0;
    if ((0x2d < bVar11) ||
       (bVar1 = 1, (0x200000000801U >> ((longlong)(char)bVar11 & 0x3fU) & 1) == 0)) {
      bVar1 = 0;
    }
    uVar5 = -(ulonglong)bVar1 & (ulonglong)(param_2 + (1 - (longlong)param_1));
    local_340 = uVar5;
    FUN_18000dad0((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_180004860(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_180008898();
      if ((int)IVar6 == 0) {
        if (local_2f0 != '\0') {
          *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
        }
        uVar3 = 1;
      }
      else if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
    }
    uVar3 = FUN_180006aa4((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_18000702c((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_180006a30(local_328);
      }
    }
    else {
      lVar10 = param_3[1] - *param_3 >> 3;
      do {
        local_2c8 = 0;
        local_2c0 = 0;
        local_2b8 = (char *)0x0;
        local_2b0 = 0;
        local_2a8 = 0;
        local_2a0 = '\0';
        FUN_180004860(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_180008898();
          if ((int)IVar6 == 0) {
            if (local_2d0 != '\0') {
              *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
            }
            uVar3 = 1;
          }
          else {
            if (local_2d0 != '\0') {
              *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
            }
            uVar3 = 0;
          }
        }
        uVar3 = FUN_180006c44(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_180006a30(local_2b8);
          }
        }
        else {
          uVar7 = FUN_18000702c((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_180006a30(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_180006a30(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_180006a30(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_18000a660((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_180006a90);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_180006a30(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x180007510; Evidence: ev_c8a827d2a9864ddc822a4bab950d8f2a938574a882ea29468494b8f9c7225cc4 */

ulonglong thunk_FUN_180006df0(undefined8 *param_1,undefined8 *param_2)

{
  int iVar1;
  undefined4 *puVar2;
  ulonglong uVar3;
  byte *pbVar4;
  LPVOID pvVar5;
  longlong lVar6;
  longlong *plVar7;
  longlong *plVar8;
  char *pcVar9;
  ulonglong uVar10;
  longlong *plVar11;
  longlong lVar12;
  longlong lStackX_10;
  ulonglong uStackX_18;
  char *pcStackX_20;
  longlong *plStack_58;
  longlong *plStack_50;
  undefined8 uStack_48;
  
  if (param_2 == (undefined8 *)0x0) {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 0x16;
    FUN_180005ed8();
    uVar3 = 0x16;
  }
  else {
    *param_2 = 0;
    pbVar4 = (byte *)*param_1;
    plStack_58 = (longlong *)0x0;
    plStack_50 = (longlong *)0x0;
    uStack_48 = 0;
    while (plVar7 = plStack_50, plVar8 = plStack_58, pbVar4 != (byte *)0x0) {
      lStackX_10 = CONCAT53(lStackX_10._3_5_,0x3f2a);
      pbVar4 = FUN_18000abd0(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000702c((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_180006a30((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180006f3f;
        }
      }
      else {
        uVar10 = FUN_1800071b0((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_180006a30((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_180006f3f;
        }
      }
      param_1 = param_1 + 1;
      pbVar4 = (byte *)*param_1;
    }
    uVar10 = ((longlong)plStack_50 - (longlong)plStack_58 >> 3) + 1;
    uStackX_18 = 0;
    for (plVar11 = plStack_58; plVar11 != plStack_50; plVar11 = plVar11 + 1) {
      lVar6 = -1;
      do {
        lVar6 = lVar6 + 1;
      } while (*(char *)(*plVar11 + lVar6) != '\0');
      uStackX_18 = uStackX_18 + 1 + lVar6;
    }
    pvVar5 = __acrt_allocate_buffer_for_argv(uVar10,uStackX_18,1);
    if (pvVar5 == (LPVOID)0x0) {
      FUN_180006a30((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006a30((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_180006f3f:
      FUN_180006a30(plVar8);
    }
    else {
      pcVar9 = (char *)((longlong)pvVar5 + uVar10 * 8);
      pcStackX_20 = pcVar9;
      if (plVar8 != plVar7) {
        lStackX_10 = (longlong)pvVar5 - (longlong)plVar8;
        plVar11 = plVar8;
        do {
          lVar6 = -1;
          do {
            lVar12 = lVar6;
            lVar6 = lVar12 + 1;
          } while (*(char *)(*plVar11 + lVar6) != '\0');
          lVar12 = lVar12 + 2;
          iVar1 = FUN_18000aa00(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
                                *plVar11,lVar12);
          if (iVar1 != 0) {
                    /* WARNING: Subroutine does not return */
            _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
          }
          *(char **)(lStackX_10 + (longlong)plVar11) = pcVar9;
          pcVar9 = pcVar9 + lVar12;
          plVar11 = plVar11 + 1;
        } while (plVar11 != plVar7);
      }
      *param_2 = pvVar5;
      FUN_180006a30((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006a30((LPVOID)*plVar11);
      }
      FUN_180006a30(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x180007518; Evidence: ev_1ba6c5068883e3770a167ed772fe0bb94a6cafb763b8981dd3c4d684e5019bf8 */

undefined4 FUN_180007518(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  undefined4 *puVar3;
  
  if (param_1 == (short *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_1800083e8(param_4,0,param_1,0xffffffff);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_18000756c;
        }
        iVar1 = FUN_1800083e8(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180006010(DVar2);
      puVar3 = (undefined4 *)FUN_180006080();
      return *puVar3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_18000756c:
      puVar3 = (undefined4 *)FUN_180006080();
      *puVar3 = 0x22;
      *(undefined1 *)(param_2 + 0x28) = 0;
      *(undefined8 *)(param_2 + 0x18) = 0;
      return 0x22;
    }
    **(undefined1 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}


/* Address: 0x180007634; Evidence: ev_6e229171e5c13a307a66f2a5836c8fe6f4f84a704b598cd823c2ee8191851d45 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180007634(HMODULE param_1,undefined8 param_2,ulonglong param_3)

{
  DWORD DVar1;
  INT_PTR IVar2;
  uint uVar3;
  undefined1 auStack_2a8 [32];
  undefined1 local_288 [8];
  longlong local_280;
  longlong local_278;
  char local_268;
  undefined8 local_260;
  ulonglong local_258;
  undefined8 local_250;
  ulonglong local_248;
  ulonglong local_240;
  undefined1 local_238;
  WCHAR local_228 [264];
  ulonglong local_18;
  
  local_18 = DAT_180019000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_180006010(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_180004860(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_180008898();
      if ((int)IVar2 == 0) {
        if (local_268 != (char)IVar2) {
          *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
        }
        uVar3 = 1;
      }
      else {
        if (local_268 != '\0') {
          *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
        }
        uVar3 = 0;
      }
    }
    FUN_180007518(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x180007758; Evidence: ev_1a290cc08ef6df830efb43717b0cc5d0fc5844ac115468ed2f9331e5d8ddee45 */

void FUN_180007758(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  int iVar1;
  int *piVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined4 *puVar5;
  undefined1 (*pauVar6) [32];
  undefined1 (*pauVar7) [32];
  longlong lVar8;
  
  __acrt_lock(*param_2);
  puVar4 = (undefined8 *)(*(longlong *)(*(longlong *)*param_3 + 0x88) + 0x18);
  if (DAT_18001a570 == (undefined1 (*) [32])0x0) {
LAB_18000780b:
    puVar5 = (undefined4 *)FUN_180006080();
    *puVar5 = 0x16;
    FUN_180005ed8();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_18000dad0(DAT_18001a570,0,0x101);
      goto LAB_18000780b;
    }
    lVar8 = 2;
    pauVar7 = DAT_18001a570;
    do {
      uVar3 = puVar4[1];
      *(undefined8 *)*pauVar7 = *puVar4;
      *(undefined8 *)(*pauVar7 + 8) = uVar3;
      uVar3 = puVar4[3];
      *(undefined8 *)(*pauVar7 + 0x10) = puVar4[2];
      *(undefined8 *)(*pauVar7 + 0x18) = uVar3;
      uVar3 = puVar4[5];
      *(undefined8 *)pauVar7[1] = puVar4[4];
      *(undefined8 *)(pauVar7[1] + 8) = uVar3;
      uVar3 = puVar4[7];
      *(undefined8 *)(pauVar7[1] + 0x10) = puVar4[6];
      *(undefined8 *)(pauVar7[1] + 0x18) = uVar3;
      uVar3 = puVar4[9];
      *(undefined8 *)pauVar7[2] = puVar4[8];
      *(undefined8 *)(pauVar7[2] + 8) = uVar3;
      uVar3 = puVar4[0xb];
      *(undefined8 *)(pauVar7[2] + 0x10) = puVar4[10];
      *(undefined8 *)(pauVar7[2] + 0x18) = uVar3;
      uVar3 = puVar4[0xd];
      *(undefined8 *)pauVar7[3] = puVar4[0xc];
      *(undefined8 *)(pauVar7[3] + 8) = uVar3;
      pauVar6 = pauVar7 + 4;
      uVar3 = puVar4[0xf];
      *(undefined8 *)(pauVar7[3] + 0x10) = puVar4[0xe];
      *(undefined8 *)(pauVar7[3] + 0x18) = uVar3;
      puVar4 = puVar4 + 0x10;
      lVar8 = lVar8 + -1;
      pauVar7 = pauVar6;
    } while (lVar8 != 0);
    (*pauVar6)[0] = *(undefined1 *)puVar4;
  }
  lVar8 = 2;
  puVar4 = (undefined8 *)(*(longlong *)(*(longlong *)*param_3 + 0x88) + 0x119);
  if (DAT_18001a578 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_18001a578;
    if (puVar4 != (undefined8 *)0x0) {
      do {
        uVar3 = puVar4[1];
        *(undefined8 *)*pauVar7 = *puVar4;
        *(undefined8 *)(*pauVar7 + 8) = uVar3;
        uVar3 = puVar4[3];
        *(undefined8 *)(*pauVar7 + 0x10) = puVar4[2];
        *(undefined8 *)(*pauVar7 + 0x18) = uVar3;
        uVar3 = puVar4[5];
        *(undefined8 *)pauVar7[1] = puVar4[4];
        *(undefined8 *)(pauVar7[1] + 8) = uVar3;
        uVar3 = puVar4[7];
        *(undefined8 *)(pauVar7[1] + 0x10) = puVar4[6];
        *(undefined8 *)(pauVar7[1] + 0x18) = uVar3;
        uVar3 = puVar4[9];
        *(undefined8 *)pauVar7[2] = puVar4[8];
        *(undefined8 *)(pauVar7[2] + 8) = uVar3;
        uVar3 = puVar4[0xb];
        *(undefined8 *)(pauVar7[2] + 0x10) = puVar4[10];
        *(undefined8 *)(pauVar7[2] + 0x18) = uVar3;
        uVar3 = puVar4[0xd];
        *(undefined8 *)pauVar7[3] = puVar4[0xc];
        *(undefined8 *)(pauVar7[3] + 8) = uVar3;
        uVar3 = puVar4[0xf];
        *(undefined8 *)(pauVar7[3] + 0x10) = puVar4[0xe];
        *(undefined8 *)(pauVar7[3] + 0x18) = uVar3;
        puVar4 = puVar4 + 0x10;
        lVar8 = lVar8 + -1;
        pauVar7 = pauVar7 + 4;
      } while (lVar8 != 0);
      goto LAB_1800078bc;
    }
    FUN_18000dad0(DAT_18001a578,0,0x100);
  }
  puVar5 = (undefined4 *)FUN_180006080();
  *puVar5 = 0x16;
  FUN_180005ed8();
LAB_1800078bc:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_180019210)) {
    FUN_180006a30((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180007928; Evidence: ev_8ba643c44f6a84a2fae9c6f4b1cb688878434bd6be16aae8a9f550eaf5cbd612 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180004860(&local_28,(longlong *)0x0);
  DAT_18001a588 = 0;
  if (param_1 == -2) {
    DAT_18001a588 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_18001a588 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_18001a588 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x1800079a8; Evidence: ev_57b698fa11f5e1b88617632e2e558c92023c109569e56c3a25e498d23b79844b */

void FUN_1800079a8(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_18000dad0((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
  lVar2 = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  *(undefined8 *)(param_1 + 0x220) = 0;
  puVar3 = (undefined2 *)(param_1 + 0xc);
  for (lVar1 = 6; lVar4 = lVar2, lVar1 != 0; lVar1 = lVar1 + -1) {
    *puVar3 = 0;
    puVar3 = puVar3 + 1;
  }
  do {
    lVar1 = lVar4 + 1;
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_180019228)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_180019329)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x180007a40; Evidence: ev_4e9bde424517478cf4acce56784ef42a7a87c37687449641b4eb2c9925e9a499 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007a40(longlong param_1)

{
  byte bVar1;
  byte bVar2;
  BOOL BVar3;
  uint uVar4;
  byte *pbVar5;
  char *pcVar6;
  ulonglong uVar7;
  BYTE *pBVar8;
  WORD *pWVar9;
  longlong lVar10;
  undefined1 auStackY_788 [32];
  _cpinfo local_738;
  char local_718 [231];
  byte abStack_631 [25];
  undefined1 local_618 [231];
  byte abStack_531 [25];
  undefined1 local_518 [256];
  WORD local_418 [512];
  ulonglong local_18;
  
  local_18 = DAT_180019000 ^ (ulonglong)auStackY_788;
  local_738.LeadByte[10] = '\0';
  local_738.LeadByte[0xb] = '\0';
  local_738._18_2_ = 0;
  local_738.MaxCharSize = 0;
  local_738.DefaultChar[0] = '\0';
  local_738.DefaultChar[1] = '\0';
  local_738.LeadByte[0] = '\0';
  local_738.LeadByte[1] = '\0';
  local_738.LeadByte[2] = '\0';
  local_738.LeadByte[3] = '\0';
  local_738.LeadByte[4] = '\0';
  local_738.LeadByte[5] = '\0';
  local_738.LeadByte[6] = '\0';
  local_738.LeadByte[7] = '\0';
  local_738.LeadByte[8] = '\0';
  local_738.LeadByte[9] = '\0';
  if ((*(UINT *)(param_1 + 4) == 0xfde9) ||
     (BVar3 = GetCPInfo(*(UINT *)(param_1 + 4),&local_738), BVar3 == 0)) {
    uVar4 = 0;
    pbVar5 = (byte *)(param_1 + 0x19);
    do {
      if (uVar4 - 0x41 < 0x1a) {
        *pbVar5 = *pbVar5 | 0x10;
        bVar2 = (char)uVar4 + 0x20;
      }
      else if (uVar4 - 0x61 < 0x1a) {
        *pbVar5 = *pbVar5 | 0x20;
        bVar2 = (char)uVar4 - 0x20;
      }
      else {
        bVar2 = 0;
      }
      pbVar5[0x100] = bVar2;
      uVar4 = uVar4 + 1;
      pbVar5 = pbVar5 + 1;
    } while (uVar4 < 0x100);
  }
  else {
    uVar4 = 0;
    pcVar6 = local_718;
    lVar10 = 0x100;
    do {
      *pcVar6 = (char)uVar4;
      uVar4 = uVar4 + 1;
      pcVar6 = pcVar6 + 1;
    } while (uVar4 < 0x100);
    pBVar8 = local_738.LeadByte;
    local_718[0] = ' ';
    bVar2 = local_738.LeadByte[0];
    while (bVar2 != 0) {
      bVar1 = pBVar8[1];
      uVar7 = (ulonglong)bVar2;
      while ((uVar4 = (uint)uVar7, uVar4 <= bVar1 && (uVar4 < 0x100))) {
        local_718[uVar7] = ' ';
        uVar7 = (ulonglong)(uVar4 + 1);
      }
      pBVar8 = pBVar8 + 2;
      bVar2 = *pBVar8;
    }
    FUN_18000a488((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
    __acrt_LCMapStringA((longlong *)0x0,*(ushort **)(param_1 + 0x220),0x100,local_718,0x100,
                        local_618,0x100,*(uint *)(param_1 + 4),0);
    __acrt_LCMapStringA((longlong *)0x0,*(ushort **)(param_1 + 0x220),0x200,local_718,0x100,
                        local_518,0x100,*(uint *)(param_1 + 4),0);
    pWVar9 = local_418;
    pbVar5 = (byte *)(param_1 + 0x19);
    do {
      if ((*pWVar9 & 1) == 0) {
        if ((*pWVar9 & 2) == 0) {
          bVar2 = 0;
        }
        else {
          *pbVar5 = *pbVar5 | 0x20;
          bVar2 = pbVar5[(longlong)(abStack_531 + -param_1)];
        }
      }
      else {
        *pbVar5 = *pbVar5 | 0x10;
        bVar2 = pbVar5[(longlong)(abStack_631 + -param_1)];
      }
      pbVar5[0x100] = bVar2;
      pWVar9 = pWVar9 + 1;
      pbVar5 = pbVar5 + 1;
      lVar10 = lVar10 + -1;
    } while (lVar10 != 0);
  }
  return;
}


/* Address: 0x180007c38; Evidence: ev_a6b2ec0d7df4a781c3f40112a40f228f26522381d5da88adb650842210bc1fa6 */

ulonglong FUN_180007c38(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

{
  undefined8 uVar1;
  int *piVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  undefined8 uVar5;
  undefined8 *puVar6;
  undefined8 *puVar7;
  int iVar8;
  undefined8 *puVar9;
  ulonglong uVar10;
  undefined8 *puVar11;
  ulonglong uVar12;
  undefined4 *puVar13;
  undefined8 *puVar14;
  longlong lVar15;
  longlong lVar16;
  __acrt_ptd *local_res18;
  __crt_multibyte_data **local_res20;
  undefined1 local_268 [4];
  int local_264 [3];
  __acrt_ptd **local_258;
  __crt_multibyte_data ***local_250;
  undefined8 local_248 [70];
  
  local_res18 = param_3;
  local_res20 = param_4;
  update_thread_multibyte_data_internal(param_3,param_4);
  iVar8 = getSystemCP(param_1);
  if (iVar8 == *(int *)(*(longlong *)(local_res18 + 0x88) + 4)) {
    uVar10 = 0;
  }
  else {
    puVar9 = _malloc_base(0x228);
    if (puVar9 == (undefined8 *)0x0) {
      FUN_180006a30((LPVOID)0x0);
      uVar10 = 0xffffffff;
    }
    else {
      lVar15 = 4;
      lVar16 = 4;
      puVar6 = *(undefined8 **)(local_res18 + 0x88);
      puVar7 = local_248;
      do {
        puVar14 = puVar7;
        puVar11 = puVar6;
        uVar1 = puVar11[1];
        uVar3 = puVar11[2];
        uVar4 = puVar11[3];
        *puVar14 = *puVar11;
        puVar14[1] = uVar1;
        uVar1 = puVar11[4];
        uVar5 = puVar11[5];
        puVar14[2] = uVar3;
        puVar14[3] = uVar4;
        uVar3 = puVar11[6];
        uVar4 = puVar11[7];
        puVar14[4] = uVar1;
        puVar14[5] = uVar5;
        uVar1 = puVar11[8];
        uVar5 = puVar11[9];
        puVar14[6] = uVar3;
        puVar14[7] = uVar4;
        uVar3 = puVar11[10];
        uVar4 = puVar11[0xb];
        puVar14[8] = uVar1;
        puVar14[9] = uVar5;
        uVar1 = puVar11[0xc];
        uVar5 = puVar11[0xd];
        puVar14[10] = uVar3;
        puVar14[0xb] = uVar4;
        uVar3 = puVar11[0xe];
        uVar4 = puVar11[0xf];
        puVar14[0xc] = uVar1;
        puVar14[0xd] = uVar5;
        puVar14[0xe] = uVar3;
        puVar14[0xf] = uVar4;
        lVar16 = lVar16 + -1;
        puVar6 = puVar11 + 0x10;
        puVar7 = puVar14 + 0x10;
      } while (lVar16 != 0);
      uVar3 = puVar11[0x11];
      uVar4 = puVar11[0x12];
      uVar5 = puVar11[0x13];
      uVar1 = puVar11[0x14];
      puVar14[0x10] = puVar11[0x10];
      puVar14[0x11] = uVar3;
      puVar14[0x12] = uVar4;
      puVar14[0x13] = uVar5;
      puVar14[0x14] = uVar1;
      puVar6 = local_248;
      puVar7 = puVar9;
      do {
        puVar14 = puVar7;
        puVar11 = puVar6;
        uVar1 = puVar11[1];
        uVar3 = puVar11[2];
        uVar4 = puVar11[3];
        *puVar14 = *puVar11;
        puVar14[1] = uVar1;
        uVar1 = puVar11[4];
        uVar5 = puVar11[5];
        puVar14[2] = uVar3;
        puVar14[3] = uVar4;
        uVar3 = puVar11[6];
        uVar4 = puVar11[7];
        puVar14[4] = uVar1;
        puVar14[5] = uVar5;
        uVar1 = puVar11[8];
        uVar5 = puVar11[9];
        puVar14[6] = uVar3;
        puVar14[7] = uVar4;
        uVar3 = puVar11[10];
        uVar4 = puVar11[0xb];
        puVar14[8] = uVar1;
        puVar14[9] = uVar5;
        uVar1 = puVar11[0xc];
        uVar5 = puVar11[0xd];
        puVar14[10] = uVar3;
        puVar14[0xb] = uVar4;
        uVar3 = puVar11[0xe];
        uVar4 = puVar11[0xf];
        puVar14[0xc] = uVar1;
        puVar14[0xd] = uVar5;
        puVar14[0xe] = uVar3;
        puVar14[0xf] = uVar4;
        lVar15 = lVar15 + -1;
        puVar6 = puVar11 + 0x10;
        puVar7 = puVar14 + 0x10;
      } while (lVar15 != 0);
      uVar3 = puVar11[0x11];
      uVar4 = puVar11[0x12];
      uVar5 = puVar11[0x13];
      uVar1 = puVar11[0x14];
      puVar14[0x10] = puVar11[0x10];
      puVar14[0x11] = uVar3;
      puVar14[0x12] = uVar4;
      puVar14[0x13] = uVar5;
      puVar14[0x14] = uVar1;
      *(undefined4 *)puVar9 = 0;
      uVar12 = FUN_180007fdc(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        puVar13 = (undefined4 *)FUN_180006080();
        *puVar13 = 0x16;
        FUN_180006a30(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_18000683c();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_180019210)) {
          FUN_180006a30(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_180019858 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_180007758(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_180019200 = *local_res20;
          }
        }
        FUN_180006a30((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x180007ea8; Evidence: ev_63c69534c0fe00490076fd6e322cfb7d54c3472bdf21ccd7fa7680e532a2a855 */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_180019858) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_180019210)) {
          FUN_180006a30(p_Var2);
        }
      }
      p_Var2 = *param_2;
      *(__crt_multibyte_data **)(param_1 + 0x88) = p_Var2;
      LOCK();
      *(int *)p_Var2 = *(int *)p_Var2 + 1;
      UNLOCK();
    }
    __acrt_unlock(5);
  }
  else {
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
  }
  if (p_Var2 != (__crt_multibyte_data *)0x0) {
    return p_Var2;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180007f60; Evidence: ev_31ffd6edebafec216d86aac11c069e65089c72933ba7bbf3ccd72b526eaa3810 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18001a58c == '\0') {
    DAT_18001a578 = &DAT_180019550;
    DAT_18001a580 = &DAT_180019210;
    DAT_18001a570 = &DAT_180019440;
    p_Var1 = (__acrt_ptd *)FUN_180006544();
    in_RAX = FUN_180007c38(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001a580);
    DAT_18001a58c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180007fc0; Evidence: ev_460f9185253c18e5704c12c622092741db779af9b7d32d6f25fd0cfe22470f6c */

void FUN_180007fc0(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_180006528();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_18001a580);
  return;
}


/* Address: 0x180007fdc; Evidence: ev_9359e4d7d394925f0e5c5ee31b4925aebf08a48d7111b75d1a9f211a9d08066f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180007fdc(int param_1,longlong param_2)

{
  byte *pbVar1;
  byte bVar2;
  int iVar3;
  uint uVar4;
  BOOL BVar5;
  uint *puVar6;
  byte *pbVar7;
  wchar_t *pwVar8;
  longlong lVar9;
  BYTE *pBVar10;
  ulonglong uVar11;
  byte *pbVar12;
  undefined2 *puVar13;
  undefined4 uVar14;
  uint uVar15;
  uint uVar16;
  byte *pbVar18;
  undefined1 auStack_68 [32];
  _cpinfo local_48;
  ulonglong local_30;
  wchar_t *pwVar17;
  
  local_30 = DAT_180019000 ^ (ulonglong)auStack_68;
  local_48.MaxCharSize = 0;
  local_48.DefaultChar[0] = '\0';
  local_48.DefaultChar[1] = '\0';
  local_48.LeadByte[0] = '\0';
  local_48.LeadByte[1] = '\0';
  local_48.LeadByte[2] = '\0';
  local_48.LeadByte[3] = '\0';
  local_48.LeadByte[4] = '\0';
  local_48.LeadByte[5] = '\0';
  local_48.LeadByte[6] = '\0';
  local_48.LeadByte[7] = '\0';
  local_48.LeadByte[8] = '\0';
  local_48.LeadByte[9] = '\0';
  local_48.LeadByte[10] = '\0';
  local_48.LeadByte[0xb] = '\0';
  local_48._18_2_ = 0;
  uVar4 = getSystemCP(param_1);
  pwVar8 = (wchar_t *)0x0;
  if (uVar4 == 0) {
LAB_180008274:
    FUN_1800079a8(param_2);
    return 0;
  }
  puVar6 = &DAT_180019660;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_18000dad0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_180019650;
      lVar9 = 4;
      pbVar7 = &DAT_180019670 + (longlong)pwVar17 * 0x30;
      do {
        bVar2 = *pbVar7;
        pbVar12 = pbVar7;
        while ((bVar2 != 0 && (pbVar12[1] != 0))) {
          bVar2 = *pbVar12;
          uVar16 = (uint)bVar2;
          if (bVar2 <= pbVar12[1]) {
            uVar15 = (uint)bVar2;
            do {
              uVar15 = uVar15 + 1;
              if (0x100 < uVar15) break;
              uVar16 = uVar16 + 1;
              pbVar1 = (byte *)((ulonglong)uVar15 + 0x18 + param_2);
              *pbVar1 = *pbVar1 | *pbVar18;
            } while (uVar16 <= pbVar12[1]);
          }
          pbVar12 = pbVar12 + 2;
          bVar2 = *pbVar12;
        }
        pbVar7 = pbVar7 + 8;
        pbVar18 = pbVar18 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      *(uint *)(param_2 + 4) = uVar4;
      *(undefined4 *)(param_2 + 8) = 1;
      if (uVar4 == 0x3a4) {
        pwVar8 = L"ja-JP";
      }
      else if (uVar4 == 0x3a8) {
        pwVar8 = L"zh-CN";
      }
      else if (uVar4 == 0x3b5) {
        pwVar8 = L"ko-KR";
      }
      else if (uVar4 == 0x3b6) {
        pwVar8 = L"zh-TW";
      }
      *(wchar_t **)(param_2 + 0x220) = pwVar8;
      puVar13 = (undefined2 *)(param_2 + 0xc);
      lVar9 = 6;
      do {
        *puVar13 = *(undefined2 *)
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x180019658 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_18000826a;
    }
    uVar16 = (int)pwVar17 + 1;
    pwVar17 = (wchar_t *)(ulonglong)uVar16;
    puVar6 = puVar6 + 0xc;
  } while (uVar16 < 5);
  if ((uVar4 == 65000) || (BVar5 = IsValidCodePage(uVar4 & 0xffff), BVar5 == 0)) {
    return 0xffffffff;
  }
  if (uVar4 == 0xfde9) {
    *(undefined8 *)(param_2 + 4) = 0xfde9;
    *(undefined8 *)(param_2 + 0x220) = 0;
    *(undefined4 *)(param_2 + 0x18) = 0;
    *(undefined2 *)(param_2 + 0x1c) = 0;
  }
  else {
    BVar5 = GetCPInfo(uVar4,&local_48);
    if (BVar5 == 0) {
      if (DAT_18001a588 == 0) {
        return 0xffffffff;
      }
      goto LAB_180008274;
    }
    FUN_18000dad0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
    *(uint *)(param_2 + 4) = uVar4;
    *(undefined8 *)(param_2 + 0x220) = 0;
    if (local_48.MaxCharSize == 2) {
      pBVar10 = local_48.LeadByte;
      bVar2 = local_48.LeadByte[0];
      while ((bVar2 != 0 && (pBVar10[1] != 0))) {
        bVar2 = *pBVar10;
        if ((uint)bVar2 <= (uint)pBVar10[1]) {
          uVar4 = (uint)bVar2;
          uVar11 = (ulonglong)(((uint)pBVar10[1] - (uint)bVar2) + 1);
          do {
            uVar4 = uVar4 + 1;
            pbVar7 = (byte *)((ulonglong)uVar4 + 0x18 + param_2);
            *pbVar7 = *pbVar7 | 4;
            uVar11 = uVar11 - 1;
          } while (uVar11 != 0);
        }
        pBVar10 = pBVar10 + 2;
        bVar2 = *pBVar10;
      }
      pbVar7 = (byte *)(param_2 + 0x1a);
      lVar9 = 0xfe;
      do {
        *pbVar7 = *pbVar7 | 8;
        pbVar7 = pbVar7 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      iVar3 = *(int *)(param_2 + 4);
      if (iVar3 == 0x3a4) {
        pwVar8 = L"ja-JP";
      }
      else if (iVar3 == 0x3a8) {
        pwVar8 = L"zh-CN";
      }
      else if (iVar3 == 0x3b5) {
        pwVar8 = L"ko-KR";
      }
      else if (iVar3 == 0x3b6) {
        pwVar8 = L"zh-TW";
      }
      *(wchar_t **)(param_2 + 0x220) = pwVar8;
    }
    else {
      uVar14 = 0;
    }
    *(undefined4 *)(param_2 + 8) = uVar14;
  }
  puVar13 = (undefined2 *)(param_2 + 0xc);
  for (lVar9 = 6; lVar9 != 0; lVar9 = lVar9 + -1) {
    *puVar13 = 0;
    puVar13 = puVar13 + 1;
  }
LAB_18000826a:
  FUN_180007a40(param_2);
  return 0;
}


/* Address: 0x1800082a4; Evidence: ev_6613b3434b3cd3d725f4e9d1414619806e7121eecae4f97c14ba9292cc3b3d9f */

undefined8 FUN_1800082a4(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_180004860(&local_28,param_1);
  if (((*(byte *)((ulonglong)(param_2 & 0xff) + 0x19 + local_18) & param_4) == 0) &&
     ((param_3 == 0 || ((param_3 & *(ushort *)(*local_20 + (ulonglong)(param_2 & 0xff) * 2)) == 0)))
     ) {
    uVar1 = 0;
  }
  else {
    uVar1 = 1;
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return uVar1;
}


/* Address: 0x180008318; Evidence: ev_7f52c0849217e19a9b232f671b0016dfab48c8cd5d4736478c82f0e9a33584b4 */

void FUN_180008318(uint param_1)

{
  FUN_1800082a4((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x180008330; Evidence: ev_a034379b38fea762438fe3d240bf34a72fd8f0bc2c0351b57d9a490b589d9a5c */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_180008330(void)

{
  DAT_18001a5b0 = GetCommandLineA();
  _DAT_18001a5b8 = GetCommandLineW();
  return 1;
}


/* Address: 0x180008358; Evidence: ev_0bcabcebe06d65ec3f05bd71181c52ac82bb3f0eef5ec2a210f5c51ef3b64dc9 */

void FUN_180008358(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_1800083a5:
          if (!bVar1) goto LAB_1800083a9;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_1800083e3;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_1800083a5;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_1800083a9;
LAB_1800083e3:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_1800083a9;
  }
  param_2 = 0;
LAB_1800083a9:
                    /* WARNING: Could not recover jumptable at 0x0001800083a9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x1800083e8; Evidence: ev_e941ba55795ec008f42b5976c78eff0cf8c9fed2eea65f4eab64b78ff15288ee */

void FUN_1800083e8(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_180008488;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_180008488;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_180008479;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_180008488;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_180008488;
    iVar1 = param_1 - 65000;
LAB_180008479:
    if (iVar1 == 0) goto LAB_180008488;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_180008488:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800084bf. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}


/* Address: 0x1800084c8; Evidence: ev_99e25cd1fa62629854707af7646d28e9ae0ee3f5fb09659707a007b75a047ca9 */

LPVOID FUN_1800084c8(void)

{
  WCHAR WVar1;
  int iVar2;
  LPWCH pWVar3;
  longlong lVar4;
  LPVOID pvVar6;
  undefined4 uVar7;
  WCHAR *pWVar8;
  longlong lVar5;
  
  pWVar3 = GetEnvironmentStringsW();
  if (pWVar3 != (LPWCH)0x0) {
    WVar1 = *pWVar3;
    pWVar8 = pWVar3;
    while (WVar1 != L'\0') {
      lVar4 = -1;
      do {
        lVar5 = lVar4;
        lVar4 = lVar5 + 1;
      } while (pWVar8[lVar4] != L'\0');
      pWVar8 = pWVar8 + lVar5 + 2;
      WVar1 = *pWVar8;
    }
    uVar7 = (undefined4)((longlong)pWVar8 + (2 - (longlong)pWVar3) >> 1);
    iVar2 = FUN_1800083e8(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_1800083e8(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_180006a30(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_180006a30((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_180006a30((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}


/* Address: 0x1800085e0; Evidence: ev_bbfd14f30afec6f4dffa7e06efc4987ac231d56cd924afea0058aee6967a29bd */

/* Library Function - Single Match
    _recalloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _recalloc_base(LPVOID param_1,ulonglong param_2,ulonglong param_3)

{
  undefined4 *puVar1;
  ulonglong uVar2;
  LPVOID pvVar3;
  ulonglong uVar4;
  
  if ((param_2 == 0) || (param_3 <= 0xffffffffffffffe0 / param_2)) {
    if (param_1 == (LPVOID)0x0) {
      uVar2 = 0;
    }
    else {
      uVar2 = _msize_base((longlong)param_1);
    }
    uVar4 = param_2 * param_3;
    pvVar3 = _realloc_base(param_1,uVar4);
    if ((pvVar3 != (LPVOID)0x0) && (uVar2 < uVar4)) {
      FUN_18000dad0((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x180008688; Evidence: ev_52960528d17a967fa3611ff96c05ba144733c78f8fe9e2c7a0763f34f2ce9a4e */

FARPROC FUN_180008688(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

{
  longlong lVar1;
  uint uVar2;
  wchar_t *lpLibFileName;
  DWORD DVar3;
  int iVar4;
  BOOL BVar5;
  HMODULE hLibModule;
  FARPROC pFVar6;
  FARPROC pFVar7;
  DWORD local_res18 [2];
  
  do {
    if (param_3 == param_4) {
      pFVar7 = (FARPROC)0x0;
LAB_18000877a:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_18001d000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_18001d000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_18001d000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_18001a5c0)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_180010f90)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_18001a5c0)[uVar2];
        (&DAT_18001a5c0)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_180008820;
      }
      LOCK();
      (&DAT_18001a5c0)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180008820:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_18000877a;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x18000883c; Evidence: ev_d770c46cde9e32167089e355594608b64fcf68c5a22c2ae52a69e32db9e1d265 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000883c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001d0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18001d0d0;
  if ((DAT_18001d0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180008688(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_1800115dc,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x180008898; Evidence: ev_c48f5a83108ff238c22297548d71dd87f5a8fe75fcf610feae9b5a1f174fee82 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_180008898(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001d000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18001d000;
  if ((DAT_18001d000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_180008688(0,"AreFileApisANSI",(uint *)&DAT_180011578,(uint *)&DAT_18001157c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x1800088e4; Evidence: ev_758ba0f17bcea2d57323c57ffbf0ff1a78fcd422e5092cb2b808de95d0decd8b */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x0001800088e4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x1800088ec; Evidence: ev_ea27f474c0080594bd114667651df567c5742fb39a91098294060db9c915bbb4 */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x0001800088ec. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x1800088f4; Evidence: ev_3323fdaf579e6b21055c3c5b5f83682ddff6b713c09d1c21152cb4abb0558acf */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x0001800088f4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x1800088fc; Evidence: ev_49f12837a8c6b6fe2ed1c5d6dcba77b75f995f9acd2352271e6d69614afe0ef8 */

void FUN_1800088fc(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180008903. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_18001d018)();
  return;
}


/* Address: 0x180008908; Evidence: ev_759a26020c5d454ff65ef5d3d717239f4f85875e00a453ae9532c899ee445321 */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008908. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x180008910; Evidence: ev_cbd0df2e26afc2a42df2af7dcd4a6d105915833cf31bebe6af8698b35149a162 */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008910. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x180008918; Evidence: ev_0a97e637cd39e4cbc9ba744a8b4a5efd6ff8153042f219431dbd04843d058cae */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008918(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18001d090 == (FARPROC)0xffffffffffffffff) {
LAB_1800089c3:
    Locale = FUN_180008a0c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18001d090;
    if (DAT_18001d090 == (FARPROC)0x0) {
      pFVar1 = FUN_180008688(0x12,"LCMapStringEx",(uint *)&DAT_1800115a8,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_1800089c3;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x180008a0c; Evidence: ev_f3f3dd7be809be447ff2792e43bcde5f9d7318043bac64eb600636fbf07ab313 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008a0c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18001d0a0 == (FARPROC)0xffffffffffffffff) {
LAB_180008a5b:
    FUN_18000b4dc(param_1);
  }
  else {
    pFVar1 = DAT_18001d0a0;
    if (DAT_18001d0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_180008688(0x14,"LocaleNameToLCID",(uint *)&DAT_1800115c0,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008a5b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x180008a70; Evidence: ev_6a09f54be833d2022b8239a3fd6c5dd11fd0842b9bc16cb44a98aa188eddf9f3 */

bool FUN_180008a70(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18001d000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x180008aa0; Evidence: ev_def024a0b502b3e346aeabe2e61538c40cb993eee3fa6f0f64ae16b2b659fb59 */

bool FUN_180008aa0(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18001d018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18001d018 == 0;
    if (!bVar2) goto LAB_180008ada;
    pFVar1 = FUN_180008688(3,"FlsGetValue2",(uint *)&DAT_180011590,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180008ada:
  return !bVar2;
}


/* Address: 0x180008af0; Evidence: ev_ae6e79973e83ebdf45b9a2e025784578e98abcb182fdee1c54ad03f40755373a */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_18001a5c0;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_18001a678;
    } while (puVar1 != &DAT_18001a678);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180008b50; Evidence: ev_a583ae7802990c3f86445406e23827ec20ab75c80273efaa95e91ef564afc35d */

bool FUN_180008b50(void)

{
  DAT_18001a678 = GetProcessHeap();
  return DAT_18001a678 != (HANDLE)0x0;
}


/* Address: 0x180008b80; Evidence: ev_96916351bca671a5c148593c1f93164538268211bb5e40d4c3cbebaba09bceee */

undefined1 FUN_180008b80(void)

{
  DAT_18001a678 = 0;
  return 1;
}


/* Address: 0x180008ba8; Evidence: ev_b58425a21ecb0956ff39a4a588d35bf8e5acb719083fc734576f3cad6713a4b1 */

void FUN_180008ba8(void)

{
  longlong lVar1;
  DWORD DVar2;
  ulonglong uVar3;
  byte *pbVar4;
  longlong lVar5;
  uint *puVar6;
  uint uVar7;
  ulonglong uVar8;
  _STARTUPINFOW local_78;
  
  FUN_18000dad0((undefined1 (*) [32])&local_78,0,0x68);
  GetStartupInfoW(&local_78);
  lVar5 = 0;
  if ((local_78.cbReserved2 != 0) && ((uint *)local_78.lpReserved2 != (uint *)0x0)) {
    puVar6 = (uint *)((longlong)local_78.lpReserved2 + 4);
    pbVar4 = (byte *)((longlong)(int)*(uint *)local_78.lpReserved2 + (longlong)puVar6);
    uVar7 = 0x2000;
    if ((int)*(uint *)local_78.lpReserved2 < 0x2000) {
      uVar7 = *(uint *)local_78.lpReserved2;
    }
    __acrt_lowio_ensure_fh_exists(uVar7);
    if ((int)DAT_18001aa80 < (int)uVar7) {
      uVar7 = DAT_18001aa80;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_18001a680)[lVar5 >> 6];
          *(undefined8 *)(lVar1 + 0x28 + uVar3 * 0x48) = *(undefined8 *)pbVar4;
          *(byte *)(lVar1 + 0x38 + uVar3 * 0x48) = (byte)*puVar6;
        }
        lVar5 = lVar5 + 1;
        puVar6 = (uint *)((longlong)puVar6 + 1);
        pbVar4 = pbVar4 + 8;
        uVar8 = uVar8 - 1;
      } while (uVar8 != 0);
    }
  }
  return;
}


/* Address: 0x180008ca8; Evidence: ev_9916fe38e97a90c4c4413b1946bcb3f0bcb47d99907010ba45a217f12bcf0ff7 */

void FUN_180008ca8(void)

{
  byte *pbVar1;
  longlong lVar2;
  DWORD DVar3;
  HANDLE hFile;
  ulonglong uVar4;
  uint uVar5;
  longlong lVar6;
  
  uVar5 = 0;
  lVar6 = 0;
  do {
    uVar4 = (ulonglong)(uVar5 & 0x3f);
    lVar2 = (&DAT_18001a680)[(longlong)(int)uVar5 >> 6];
    if (*(longlong *)(lVar2 + 0x28 + uVar4 * 0x48) + 2U < 2) {
      *(undefined1 *)(lVar2 + 0x38 + uVar4 * 0x48) = 0x81;
      if (uVar5 == 0) {
        DVar3 = 0xfffffff6;
      }
      else if (uVar5 == 1) {
        DVar3 = 0xfffffff5;
      }
      else {
        DVar3 = 0xfffffff4;
      }
      hFile = GetStdHandle(DVar3);
      if (1 < (longlong)hFile + 1U) {
        DVar3 = GetFileType(hFile);
        if (DVar3 != 0) {
          *(HANDLE *)(lVar2 + 0x28 + uVar4 * 0x48) = hFile;
          if ((DVar3 & 0xff) == 2) {
            pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
            *pbVar1 = *pbVar1 | 0x40;
          }
          else if ((DVar3 & 0xff) == 3) {
            pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
            *pbVar1 = *pbVar1 | 8;
          }
          goto LAB_180008d86;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_18001aac0 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_18001aac0) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_180008d86:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x180008db0; Evidence: ev_96bda72792838f0faa73cf2b13db25c0063a4b009b24ece2a55b6caf9802acfc */

/* Library Function - Single Match
    __acrt_initialize_lowio
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __acrt_initialize_lowio(void)

{
  longlong lVar1;
  bool bVar2;
  
  __acrt_lock(7);
  lVar1 = __acrt_lowio_ensure_fh_exists(0);
  bVar2 = (int)lVar1 == 0;
  if (bVar2) {
    FUN_180008ba8();
    FUN_180008ca8();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x180008df0; Evidence: ev_be893f573693683ed9537523448314d84d5b80327f8e981796dfc9d2b5eaa52d */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_18001a680 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_18001a680 + uVar1));
      *(undefined8 *)((longlong)&DAT_18001a680 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x180008e30; Evidence: ev_e97ef043b8bef40d081e9fe6968ea46ec2afca5b8be4f4e62ffdc3848dc0fd52 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180008e30(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  puVar1 = param_1;
  if (param_1 != param_2) {
    do {
      in_RAX = (undefined8 *)0x0;
      if (((code *)*puVar1 != (code *)0x0) &&
         (in_RAX = (undefined8 *)(*(code *)*puVar1)(), (char)in_RAX == '\0')) break;
      puVar1 = puVar1 + 2;
    } while (puVar1 != param_2);
    if (puVar1 != param_2) {
      if (puVar1 != param_1) {
        puVar1 = puVar1 + -1;
        do {
          if ((puVar1[-1] != 0) && ((code *)*puVar1 != (code *)0x0)) {
            (*(code *)*puVar1)(0);
          }
          in_RAX = puVar1 + -1;
          puVar1 = puVar1 + -2;
        } while (in_RAX != param_1);
      }
      return (ulonglong)in_RAX & 0xffffffffffffff00;
    }
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180008eb0; Evidence: ev_9bae1c505a3ddc6e84d5a7604c3e45ba2f7c247551c721772079daf26ffea486 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180008eb0(longlong param_1,longlong param_2)

{
  undefined8 in_RAX;
  
  for (; param_1 != param_2; param_2 = param_2 + -0x10) {
    in_RAX = 0;
    if (*(code **)(param_2 + -8) != (code *)0x0) {
      in_RAX = (**(code **)(param_2 + -8))(0);
    }
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180008ef0; Evidence: ev_6cf979802cbb9006ea29ece049d370946a46c89514176f733c7c0ce1e954c80f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_180008ef0(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_180008f40();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x180008f30; Evidence: ev_fc8b71f4a77f6ee3961bb5ebf9a0b97871edc7daea4c7d0a8c46e9fe8589bd0d */

void FUN_180008f30(undefined8 param_1)

{
  DAT_18001aa88 = param_1;
  return;
}


/* Address: 0x180008f40; Evidence: ev_f8b04ef74c7c73cb861a1624ca9aa18c4d4cdaf88f8371c547f2cc9e2248b1be */

ulonglong FUN_180008f40(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_180019000 & 0x3f;
  uVar2 = DAT_18001aa88 ^ DAT_180019000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x180008f80; Evidence: ev_6bfc1253c13efe717f47ffa234c0d42f847c1dfe1622dc80e332754917f8159c */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180019000 & 0x3f;
  uVar3 = DAT_180019000 ^ DAT_18001aa88;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_18001aa88 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180019000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x180008fec; Evidence: ev_199812e2650413025395503b158a683d934185472a9356d880bfe5e08948da90 */

ulonglong FUN_180008fec(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_180019000 & 0x3f;
  uVar2 = DAT_18001aaa0 ^ DAT_180019000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x180009034; Evidence: ev_8d59228a8962a42e94963c9f99ca49e831bf7b325a1b994ee21e724ff71f6091 */

/* Library Function - Single Match
    __acrt_get_sigabrt_handler
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_get_sigabrt_handler(void)

{
  undefined1 local_res8 [8];
  int local_res10 [2];
  int local_res18 [4];
  
  local_res10[0] = 3;
  local_res18[0] = 3;
  FUN_180008fec(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x180009064; Evidence: ev_477f3afbdb3258103011646b039d230416a8ab6fc22b953b4b3aff24a72cd6fe */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180009064(undefined8 param_1)

{
  _DAT_18001aa90 = param_1;
  _DAT_18001aa98 = param_1;
  DAT_18001aaa0 = param_1;
  _DAT_18001aaa8 = param_1;
  return;
}


/* Address: 0x180009084; Evidence: ev_e2c2da7d4a20d067d90e9156255ef4273cb7dd197481a523a8b1c4e53a4fd8a6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180009084(uint param_1)

{
  bool bVar1;
  undefined4 *puVar2;
  longlong lVar3;
  longlong lVar4;
  longlong lVar5;
  undefined8 uVar6;
  byte bVar7;
  code *pcVar8;
  ulonglong *puVar9;
  __acrt_ptd *p_Var10;
  undefined4 local_res10;
  __acrt_ptd *p_Var11;
  
  p_Var11 = (__acrt_ptd *)0x0;
  p_Var10 = (__acrt_ptd *)0x0;
  local_res10 = 0;
  bVar1 = true;
  if (param_1 == 2) {
LAB_1800090db:
    if (param_1 == 2) {
      puVar9 = (ulonglong *)&DAT_18001aa90;
    }
    else if (param_1 == 6) {
LAB_18000917d:
      puVar9 = &DAT_18001aaa0;
      p_Var10 = p_Var11;
    }
    else if (param_1 == 0xf) {
      puVar9 = (ulonglong *)&DAT_18001aaa8;
    }
    else if (param_1 == 0x15) {
      puVar9 = (ulonglong *)&DAT_18001aa98;
      p_Var10 = p_Var11;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000917d;
      puVar9 = (ulonglong *)0x0;
      p_Var10 = p_Var11;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000910b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000915d;
      }
      goto LAB_1800090db;
    }
LAB_18000910b:
    p_Var10 = FUN_180006588();
    if (p_Var10 == (__acrt_ptd *)0x0) {
      return 0xffffffff;
    }
    lVar5 = *(longlong *)p_Var10;
    lVar3 = lVar5 + 0xc0;
    for (; lVar5 != lVar3; lVar5 = lVar5 + 0x10) {
      if (*(uint *)(lVar5 + 4) == param_1) goto LAB_180009158;
    }
    lVar5 = 0;
LAB_180009158:
    if (lVar5 == 0) {
LAB_18000915d:
      puVar2 = (undefined4 *)FUN_180006080();
      *puVar2 = 0x16;
      FUN_180005ed8();
      return 0xffffffff;
    }
    puVar9 = (ulonglong *)(lVar5 + 8);
    bVar1 = false;
  }
  lVar5 = 0;
  if (bVar1) {
    __acrt_lock(3);
  }
  pcVar8 = (code *)*puVar9;
  if (bVar1) {
    bVar7 = (byte)DAT_180019000 & 0x3f;
    pcVar8 = (code *)(((ulonglong)pcVar8 ^ DAT_180019000) >> bVar7 |
                     ((ulonglong)pcVar8 ^ DAT_180019000) << 0x40 - bVar7);
  }
  if (pcVar8 == (code *)0x1) goto LAB_180009266;
  if (pcVar8 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_180004f5c(3);
    pcVar8 = (code *)swi(3);
    uVar6 = (*pcVar8)();
    return uVar6;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar5 = *(longlong *)(p_Var10 + 8);
    *(longlong *)(p_Var10 + 8) = 0;
    if (param_1 == 8) {
      lVar3 = FUN_180006528();
      local_res10 = *(undefined4 *)(lVar3 + 0x10);
      lVar3 = FUN_180006528();
      *(undefined4 *)(lVar3 + 0x10) = 0x8c;
      goto LAB_18000921e;
    }
  }
  else {
LAB_18000921e:
    if (param_1 == 8) {
      lVar3 = *(longlong *)p_Var10;
      for (lVar4 = lVar3 + 0x30; lVar4 != lVar3 + 0xc0; lVar4 = lVar4 + 0x10) {
        *(undefined8 *)(lVar4 + 8) = 0;
      }
      goto LAB_180009266;
    }
  }
  *puVar9 = DAT_180019000;
LAB_180009266:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar8 != (code *)0x1) {
    if (param_1 == 8) {
      lVar3 = FUN_180006528();
      (*pcVar8)(8,*(undefined4 *)(lVar3 + 0x10));
    }
    else {
      (*pcVar8)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (*(longlong *)(p_Var10 + 8) = lVar5, param_1 == 8)) {
      lVar5 = FUN_180006528();
      *(undefined4 *)(lVar5 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x1800092e0; Evidence: ev_9f43e1f372466d2d026d402dc0ee462a9aa86d8e727d77246edee2c5a438d0a2 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800092e0(undefined8 param_1)

{
  _DAT_18001aab0 = param_1;
  return;
}


/* Address: 0x1800092e8; Evidence: ev_bf3c80d3f39e6f59c80401c649aba3e00f9c1f35374c1828219140cfed260365 */

void FUN_1800092e8(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_1800097ac(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_180009554(*(int **)*param_3);
        if (iVar2 == -1) {
          *(undefined4 *)param_3[3] = 0xffffffff;
        }
        else {
          *(int *)param_3[1] = *(int *)param_3[1] + 1;
        }
      }
    }
    else {
      *(int *)param_3[1] = *(int *)param_3[1] + 1;
    }
  }
  FUN_1800097b8(*param_4);
  return;
}


/* Address: 0x180009384; Evidence: ev_251c7c40a3222ceea245e264e07fc9c0849aace9f5ebcc2f55ddd220f34a9836 */

void FUN_180009384(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

{
  longlong *plVar1;
  uint uVar2;
  longlong *plVar3;
  undefined1 local_res10 [16];
  int *local_res20;
  longlong local_58;
  longlong local_50;
  longlong local_48;
  longlong *local_40;
  longlong *local_38;
  undefined8 local_30;
  undefined8 local_28;
  undefined8 local_20;
  
  local_res20 = param_4;
  __acrt_lock(*param_2);
  plVar1 = DAT_18001aac0 + DAT_18001aab8;
  for (plVar3 = DAT_18001aac0; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_1800092e8(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180009468; Evidence: ev_50cd945f0e58f310060137123ff88d49bafeb302d744fb6ad5df1bc36d0122b3 */

/* Library Function - Single Match
    int __cdecl common_flush_all(bool)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl common_flush_all(bool param_1)

{
  char local_res8 [8];
  undefined1 local_res10 [8];
  int local_res18 [2];
  int local_res20 [2];
  int local_28 [2];
  int *local_20;
  char *local_18;
  int *local_10;
  
  local_res20[0] = 0;
  local_20 = local_res20;
  local_res18[0] = 0;
  local_18 = local_res8;
  local_10 = local_res18;
  local_28[0] = 8;
  local_28[1] = 8;
  local_res8[0] = param_1;
  FUN_180009384(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x1800094c8; Evidence: ev_77bd88dc2b2d7230a734915f440e861c037aebe3285f7ff5acec7b6e0a8f8086 */

undefined8 FUN_1800094c8(int *param_1,longlong *param_2)

{
  undefined1 (*pauVar1) [32];
  uint uVar2;
  uint uVar3;
  
  if ((((byte)param_1[5] & 3) == 2) && ((param_1[5] & 0xc0U) != 0)) {
    uVar3 = *param_1 - param_1[2];
    param_1[4] = 0;
    pauVar1 = *(undefined1 (**) [32])(param_1 + 2);
    *(undefined1 (**) [32])param_1 = pauVar1;
    if (0 < (int)uVar3) {
      uVar2 = FUN_180009da0((longlong)param_1);
      uVar2 = FUN_18000c1f4(uVar2,pauVar1,uVar3,param_2);
      if (uVar3 != uVar2) {
        LOCK();
        param_1[5] = param_1[5] | 0x10;
        UNLOCK();
        return 0xffffffff;
      }
      if (((uint)param_1[5] >> 2 & 1) != 0) {
        LOCK();
        param_1[5] = param_1[5] & 0xfffffffd;
        UNLOCK();
      }
    }
  }
  return 0;
}


/* Address: 0x180009554; Evidence: ev_9a54a9c010ae3ebd57cde3c2bce0cb19c06fa8770feadc3b99c59f0c818d8e37 */

int FUN_180009554(int *param_1)

{
  int iVar1;
  undefined8 uVar2;
  longlong lVar3;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18001a304 == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800191f8;
    puStack_28 = PTR_DAT_180019200;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_1800095d9;
  }
  uVar2 = FUN_1800094c8(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_180009da0((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_1800095b4;
    }
    iVar1 = 0;
  }
  else {
LAB_1800095b4:
    iVar1 = -1;
  }
LAB_1800095d9:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_180005a20(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_180005a20(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x180009628; Evidence: ev_a243731709a706df8a398b0da4873b177930ce172a9880cd14958a6f222aa9d0 */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x180009630; Evidence: ev_d95c57a2ba0f0c3c35fa6361659f5ec1c0e2e13770e372394198d46840614eee */

undefined8 FUN_180009630(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_18001aab8 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_18001aab8) goto LAB_18000966d;
  }
  DAT_18001aab8 = iVar4;
LAB_18000966d:
  DAT_18001aac0 = _calloc_base((longlong)DAT_18001aab8,8);
  FUN_180006a30((LPVOID)0x0);
  if (DAT_18001aac0 == (LPVOID)0x0) {
    DAT_18001aab8 = 3;
    DAT_18001aac0 = _calloc_base(3,8);
    FUN_180006a30((LPVOID)0x0);
    if (DAT_18001aac0 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_180019768;
  puVar6 = &DAT_180019750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_18001aac0) = puVar6;
    if (*(longlong *)((&DAT_18001a680)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
        + 2U < 3) {
      *puVar3 = 0xfffffffe;
    }
    lVar2 = lVar2 + 1;
    puVar6 = puVar6 + 0x58;
    lVar1 = lVar1 + 8;
    puVar3 = puVar3 + 0x16;
    lVar5 = lVar5 + -1;
  } while (lVar5 != 0);
  return 0;
}


/* Address: 0x180009750; Evidence: ev_157a4a84641f4d77c71d7951c93330c01304a13c03999350073f9a2f290d369b */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000c644();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_18001aac0));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_18001aac0) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_180006a30(DAT_18001aac0);
  DAT_18001aac0 = (LPVOID)0x0;
  return;
}


/* Address: 0x1800097ac; Evidence: ev_988679c55341b57b80d72f2233bc424aba3019075dee8db64f53bb5b60567838 */

void FUN_1800097ac(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800097b0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x1800097b8; Evidence: ev_5433729bb337ec2ccfbf85f5b056772144afa8e2c775f9427e9ef282e41328e7 */

void FUN_1800097b8(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800097bc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x1800097d0; Evidence: ev_08b3a905656cfc7342c33447c119fe7da9aa707aa95cc020b91008e31bb69514 */

/* Library Function - Single Match
    _malloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _malloc_base(ulonglong param_1)

{
  bool bVar1;
  int iVar2;
  undefined7 extraout_var;
  LPVOID pvVar3;
  undefined4 *puVar4;
  
  if (param_1 < 0xffffffffffffffe1) {
    if (param_1 == 0) {
      param_1 = 1;
    }
    do {
      pvVar3 = HeapAlloc(DAT_18001a678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a620();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180008ef0(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_180006080();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180009830; Evidence: ev_709df6fa734720022f4c6e15ad06032cac58ee6ab42dcb598a641cf1c730e40e */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_180009830(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_18001aad8 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_180005a90(param_4);
      }
      plVar2 = (longlong *)param_4[3];
      uVar1 = *(uint *)((longlong)plVar2 + 0xc);
      if (uVar1 != 0xfde9) {
        if (plVar2[0x27] == 0) {
          if (param_1 != (ushort *)0x0) {
            *param_1 = (ushort)*param_2;
          }
          return 1;
        }
        if (*(short *)(*plVar2 + (ulonglong)*param_2 * 2) < 0) {
          if ((((1 < (int)plVar2[1]) && ((int)plVar2[1] <= (int)param_3)) &&
              (iVar3 = FUN_180008358(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_180008358(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_180009ba0(param_1,param_2,param_3,(uint *)&DAT_18001aad8,(longlong)param_4);
      if (iVar3 < 0) {
        return -1;
      }
      return iVar3;
    }
    if (param_1 != (ushort *)0x0) {
      *param_1 = 0;
    }
  }
  return 0;
}


/* Address: 0x1800099a8; Evidence: ev_4890cb105ce05ff6a1bd92c90fea51c492dfe155f0f7ed34e373afda248fd731 */

ulonglong FUN_1800099a8(byte *param_1)

{
  byte bVar1;
  ulonglong uVar2;
  
  bVar1 = *param_1;
  if (-1 < (char)bVar1) {
    return (ulonglong)(bVar1 != 0);
  }
  if ((bVar1 & 0xe0) == 0xc0) {
    return 2;
  }
  if ((bVar1 & 0xf0) == 0xe0) {
    return 3;
  }
  uVar2 = 0xffffffff;
  if ((bVar1 & 0xf8) == 0xf0) {
    uVar2 = 4;
  }
  return uVar2;
}


/* Address: 0x1800099e0; Evidence: ev_03af22c0615e905cd7dc6d76ef27200dd9bab16e31086cd09f0237477be175fd */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800099e0(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
                       longlong param_5)

{
  byte bVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  uint uVar4;
  uint *puVar5;
  byte *pbVar6;
  byte bVar7;
  ulonglong uVar8;
  ulonglong uVar9;
  uint *puVar10;
  undefined1 auStack_78 [24];
  uint auStack_60 [6];
  ulonglong local_48;
  
  local_48 = DAT_180019000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_18001aae0;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = (byte *)0x18000fc82;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_180009a42:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_1800099a8(pbVar6);
      uVar4 = (uint)uVar3;
      uVar8 = (ulonglong)(int)uVar4;
      bVar1 = *pbVar6;
      pbVar6 = pbVar6 + 1;
      if (uVar4 < 2) {
        if (puVar10 == (uint *)0x0) {
          return uVar8;
        }
        *puVar10 = (uint)bVar1;
        return uVar8;
      }
      if (uVar4 - 2 < 3) {
        bVar7 = (byte)uVar3;
        uVar4 = (1 << (7 - bVar7 & 0x1f)) - 1U & (uint)bVar1;
LAB_180009acd:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_180009b76;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_180009a42;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_18000c79c(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
            return uVar2;
          }
        }
      }
    }
    else {
      bVar1 = (byte)puVar5[1];
      uVar8 = (ulonglong)bVar1;
      uVar4 = *puVar5;
      bVar7 = *(byte *)((longlong)puVar5 + 6);
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_180009acd;
    }
LAB_180009b76:
    uVar2 = FUN_18000c7a4((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x180009ba0; Evidence: ev_d1ac58b796c99a44d4c75fa0f410647c160369433cde5bc6c71d5388b18d1d6e */

void FUN_180009ba0(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_1800099e0((ulonglong)local_18,param_2,param_3,param_4,param_5);
  if (uVar1 < 5) {
    if (0xffff < local_18[0]) {
      local_18[0] = 0xfffd;
    }
    if (param_1 != (undefined2 *)0x0) {
      *param_1 = (short)local_18[0];
    }
  }
  return;
}


/* Address: 0x180009be8; Evidence: ev_b440461fda7b94c7e450276b01c519a6d6471c623d28c8d7b4d78d8e92e3e0ea */

byte * FUN_180009be8(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
                    longlong param_5)

{
  byte *pbVar1;
  ushort *puVar2;
  byte *pbVar3;
  byte *pbVar4;
  ulonglong uVar5;
  uint local_res8 [2];
  
  pbVar4 = (byte *)*param_2;
  pbVar3 = (byte *)0x0;
  puVar2 = param_1;
  if (param_1 == (ushort *)0x0) {
    while( true ) {
      if (*pbVar4 == 0) {
        uVar5 = 1;
      }
      else if (pbVar4[1] == 0) {
        uVar5 = 2;
      }
      else {
        uVar5 = (ulonglong)(pbVar4[2] != 0) + 3;
      }
      uVar5 = FUN_1800099e0(0,pbVar4,uVar5,param_4,param_5);
      if (uVar5 == 0xffffffffffffffff) {
        *(undefined1 *)(param_5 + 0x30) = 1;
        *(undefined4 *)(param_5 + 0x2c) = 0x2a;
        return (byte *)0xffffffffffffffff;
      }
      if (uVar5 == 0) break;
      pbVar4 = pbVar4 + uVar5;
      pbVar1 = pbVar3 + 1;
      if (uVar5 != 4) {
        pbVar1 = pbVar3;
      }
      pbVar3 = pbVar1 + 1;
    }
  }
  else {
    for (; param_3 != 0; param_3 = param_3 - 1) {
      if (*pbVar4 == 0) {
        uVar5 = 1;
      }
      else if (pbVar4[1] == 0) {
        uVar5 = 2;
      }
      else {
        uVar5 = (ulonglong)(pbVar4[2] != 0) + 3;
      }
      local_res8[0] = 0;
      uVar5 = FUN_1800099e0((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
      if (uVar5 == 0xffffffffffffffff) {
        *param_2 = pbVar4;
        *(undefined1 *)(param_5 + 0x30) = 1;
        *(undefined4 *)(param_5 + 0x2c) = 0x2a;
        return (byte *)0xffffffffffffffff;
      }
      if (uVar5 == 0) {
        *puVar2 = 0;
        pbVar4 = pbVar3;
        break;
      }
      if (0xffff < local_res8[0]) {
        if (param_3 < 2) break;
        param_3 = param_3 - 1;
        *puVar2 = (ushort)(local_res8[0] - 0x10000 >> 10) | 0xd800;
        puVar2 = puVar2 + 1;
        local_res8[0] = (uint)((ushort)(local_res8[0] - 0x10000) & 0x3ff | 0xdc00);
      }
      *puVar2 = (ushort)local_res8[0];
      pbVar4 = pbVar4 + uVar5;
      puVar2 = puVar2 + 1;
    }
    *param_2 = pbVar4;
    pbVar3 = (byte *)((longlong)puVar2 - (longlong)param_1 >> 1);
  }
  return pbVar3;
}


/* Address: 0x180009da0; Evidence: ev_55dec116bd3da04ba7e0bbe506284afafd67fdb720d743f53e61b6b9a35f0327 */

undefined4 FUN_180009da0(longlong param_1)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  
  if (param_1 == 0) {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 0x16;
    FUN_180005ed8();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x180009dc8; Evidence: ev_83be52c21c2f0ccfd4883d4d8e2553bb2bb11f8e94f86c3d28132b032b8996cc */

/* Library Function - Single Match
    __acrt_add_locale_ref
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_add_locale_ref(longlong param_1)

{
  int *piVar1;
  undefined8 *puVar2;
  longlong lVar3;
  
  LOCK();
  *(int *)(param_1 + 0x10) = *(int *)(param_1 + 0x10) + 1;
  UNLOCK();
  piVar1 = *(int **)(param_1 + 0xe0);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  piVar1 = *(int **)(param_1 + 0xf0);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  piVar1 = *(int **)(param_1 + 0xe8);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  piVar1 = *(int **)(param_1 + 0x100);
  if (piVar1 != (int *)0x0) {
    LOCK();
    *piVar1 = *piVar1 + 1;
    UNLOCK();
  }
  puVar2 = (undefined8 *)(param_1 + 0x38);
  lVar3 = 6;
  do {
    if (((undefined *)puVar2[-2] != &DAT_180019208) &&
       (piVar1 = (int *)*puVar2, piVar1 != (int *)0x0)) {
      LOCK();
      *piVar1 = *piVar1 + 1;
      UNLOCK();
    }
    if ((puVar2[-3] != 0) && (piVar1 = (int *)puVar2[-1], piVar1 != (int *)0x0)) {
      LOCK();
      *piVar1 = *piVar1 + 1;
      UNLOCK();
    }
    puVar2 = puVar2 + 4;
    lVar3 = lVar3 + -1;
  } while (lVar3 != 0);
  __acrt_locale_add_lc_time_reference(*(undefined ***)(param_1 + 0x120));
  return;
}


/* Address: 0x180009e54; Evidence: ev_96be97ea1a8cfccab256f67f6b9a25b7aea205e94f3e341a21ce8bbbf978ab4e */

/* Library Function - Single Match
    __acrt_free_locale
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_free_locale(LPVOID param_1)

{
  int *piVar1;
  longlong lVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  
  if ((((*(undefined ***)((longlong)param_1 + 0xf8) != (undefined **)0x0) &&
       (*(undefined ***)((longlong)param_1 + 0xf8) != &PTR_DAT_180019860)) &&
      (*(int **)((longlong)param_1 + 0xe0) != (int *)0x0)) &&
     (**(int **)((longlong)param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)((longlong)param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_180006a30(piVar1);
      __acrt_locale_free_monetary(*(longlong *)((longlong)param_1 + 0xf8));
    }
    piVar1 = *(int **)((longlong)param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_180006a30(piVar1);
      __acrt_locale_free_numeric(*(undefined8 **)((longlong)param_1 + 0xf8));
    }
    FUN_180006a30(*(LPVOID *)((longlong)param_1 + 0xe0));
    FUN_180006a30(*(LPVOID *)((longlong)param_1 + 0xf8));
  }
  if ((*(int **)((longlong)param_1 + 0x100) != (int *)0x0) &&
     (**(int **)((longlong)param_1 + 0x100) == 0)) {
    FUN_180006a30((LPVOID)(*(longlong *)((longlong)param_1 + 0x108) + -0xfe));
    FUN_180006a30((LPVOID)(*(longlong *)((longlong)param_1 + 0x110) + -0x80));
    FUN_180006a30((LPVOID)(*(longlong *)((longlong)param_1 + 0x118) + -0x80));
    FUN_180006a30(*(LPVOID *)((longlong)param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)((longlong)param_1 + 0x120));
  puVar3 = (undefined8 *)((longlong)param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)((longlong)param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_180019208) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_180006a30(piVar1);
      FUN_180006a30((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_180006a30(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_180006a30(param_1);
  return;
}


/* Address: 0x180009fcc; Evidence: ev_7b78677e00378c087bc64b8379aef4e094a99f77a2b79852417ebbd4f72935ab */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108b0)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x180009ff4; Evidence: ev_9e184b2bbe2a0e015a629e54a43de40ed5d93ef22f0df584c6d7fae199a46abb */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108b0)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_180006a30(param_1);
  }
  return;
}


/* Address: 0x18000a02c; Evidence: ev_d9b087c150f3f7e6e05d0dd76aaddc22739232b414409c5847331457b25fb71b */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108b0)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000a054; Evidence: ev_eb1e6b9ad069c1488d877ed7aa071b79991ee6ce003798bacbb9277aa987f60e */

/* Library Function - Single Match
    __acrt_release_locale_ref
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_release_locale_ref(longlong param_1)

{
  int *piVar1;
  undefined8 *puVar2;
  longlong lVar3;
  
  if (param_1 != 0) {
    LOCK();
    *(int *)(param_1 + 0x10) = *(int *)(param_1 + 0x10) + -1;
    UNLOCK();
    piVar1 = *(int **)(param_1 + 0xe0);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    piVar1 = *(int **)(param_1 + 0xf0);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    piVar1 = *(int **)(param_1 + 0xe8);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    piVar1 = *(int **)(param_1 + 0x100);
    if (piVar1 != (int *)0x0) {
      LOCK();
      *piVar1 = *piVar1 + -1;
      UNLOCK();
    }
    puVar2 = (undefined8 *)(param_1 + 0x38);
    lVar3 = 6;
    do {
      if (((undefined *)puVar2[-2] != &DAT_180019208) &&
         (piVar1 = (int *)*puVar2, piVar1 != (int *)0x0)) {
        LOCK();
        *piVar1 = *piVar1 + -1;
        UNLOCK();
      }
      if ((puVar2[-3] != 0) && (piVar1 = (int *)puVar2[-1], piVar1 != (int *)0x0)) {
        LOCK();
        *piVar1 = *piVar1 + -1;
        UNLOCK();
      }
      puVar2 = puVar2 + 4;
      lVar3 = lVar3 + -1;
    } while (lVar3 != 0);
    __acrt_locale_release_lc_time_reference(*(undefined ***)(param_1 + 0x120));
  }
  return;
}


/* Address: 0x18000a0fc; Evidence: ev_2409103af21efe38a257566ee7764f0aa820d62e8a4ba7ba461b12b5208dd5c3 */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_180006528();
  if (((DAT_180019858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_18001a308);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x18000a16c; Evidence: ev_bc58c35f639ccf598ffa51519797bd56d01a54b55f001d991117750cb3a50926 */

/* Library Function - Single Match
    _updatetlocinfoEx_nolock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** _updatetlocinfoEx_nolock(undefined8 *param_1,undefined **param_2)

{
  undefined **ppuVar1;
  
  if ((param_2 == (undefined **)0x0) || (param_1 == (undefined8 *)0x0)) {
    param_2 = (undefined **)0x0;
  }
  else {
    ppuVar1 = (undefined **)*param_1;
    if (ppuVar1 != param_2) {
      *param_1 = param_2;
      __acrt_add_locale_ref((longlong)param_2);
      if (((ppuVar1 != (undefined **)0x0) &&
          (__acrt_release_locale_ref((longlong)ppuVar1), *(int *)(ppuVar1 + 2) == 0)) &&
         (ppuVar1 != &PTR_DAT_1800190a0)) {
        __acrt_free_locale(ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x18000a1d4; Evidence: ev_ae95281b97a925be3c5ed7d814e30a0701c9130407d760fbbef48f733492338f */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_180019878) {
      FUN_180006a30(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_180019880) {
      FUN_180006a30(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_180019888) {
      FUN_180006a30(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_180019890) {
      FUN_180006a30(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_180019898) {
      FUN_180006a30(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_1800198a0) {
      FUN_180006a30(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_1800198a8) {
      FUN_180006a30(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_1800198c8) {
      FUN_180006a30(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_1800198d0) {
      FUN_180006a30(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_1800198d8) {
      FUN_180006a30(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_1800198e0) {
      FUN_180006a30(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_1800198e8) {
      FUN_180006a30(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_1800198f0) {
      FUN_180006a30(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x18000a2e0; Evidence: ev_bca0a90f15da9c63fe6521247f30ccdca690f5fe8d21859b7c8524f8fc78d825 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_180019860) {
      FUN_180006a30((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_180019868) {
      FUN_180006a30((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_180019870) {
      FUN_180006a30((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_1800198b8) {
      FUN_180006a30((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_1800198c0) {
      FUN_180006a30((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x18000a34c; Evidence: ev_f12b696044e880bec9d6bd2120f6944e0897ffdad3425c2eab162f0b7645ea05 */

void FUN_18000a34c(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_180006a30((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x18000a380; Evidence: ev_f175954c62d87a14daf1116dc4426643db46d2cd9003b30f17209b834d0343f3 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_18000a34c(param_1,7);
    FUN_18000a34c(param_1 + 7,7);
    FUN_18000a34c(param_1 + 0xe,0xc);
    FUN_18000a34c(param_1 + 0x1a,0xc);
    FUN_18000a34c(param_1 + 0x26,2);
    FUN_180006a30((LPVOID)param_1[0x28]);
    FUN_180006a30((LPVOID)param_1[0x29]);
    FUN_180006a30((LPVOID)param_1[0x2a]);
    FUN_18000a34c(param_1 + 0x2c,7);
    FUN_18000a34c(param_1 + 0x33,7);
    FUN_18000a34c(param_1 + 0x3a,0xc);
    FUN_18000a34c(param_1 + 0x46,0xc);
    FUN_18000a34c(param_1 + 0x52,2);
    FUN_180006a30((LPVOID)param_1[0x54]);
    FUN_180006a30((LPVOID)param_1[0x55]);
    FUN_180006a30((LPVOID)param_1[0x56]);
    FUN_180006a30((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x18000a488; Evidence: ev_2dea26339dd410225ddac240b958c91e2a5df5e274a7d9e08d39f346c7417b66 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18000a488(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
                  LPWORD param_5,uint param_6,int param_7)

{
  ulonglong uVar1;
  longlong lVar2;
  int iVar3;
  BOOL BVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  ulonglong uVar7;
  undefined1 (*lpSrcStr) [32];
  undefined1 *puVar8;
  undefined1 *puVar9;
  BOOL BVar10;
  undefined1 auStack_88 [32];
  undefined8 local_68;
  undefined4 local_60;
  undefined4 local_58 [2];
  longlong local_50;
  longlong local_48;
  char local_38;
  ulonglong local_30;
  
  puVar8 = auStack_88;
  puVar9 = auStack_88;
  local_30 = DAT_180019000 ^ (ulonglong)local_58;
  FUN_180004860(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_180008358(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_18000a5de;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_18000a5c6:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18000a5de;
  }
  else {
    if (uVar7 < 0x401) {
      uVar5 = uVar7 + 0xf;
      if (uVar5 <= uVar7) {
        uVar5 = 0xffffffffffffff0;
      }
      lVar2 = -(uVar5 & 0xfffffffffffffff0);
      puVar9 = auStack_88 + lVar2;
      puVar8 = auStack_88 + lVar2;
      puVar6 = (undefined4 *)((longlong)local_58 + lVar2);
      lpSrcStr = (undefined1 (*) [32])0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000a5c6;
      *puVar6 = 0xcccc;
LAB_18000a574:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000a574;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18000a5c6;
    *(undefined8 *)(puVar9 + -8) = 0x18000a58a;
    FUN_18000dad0(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x18000a5a6;
    iVar3 = FUN_180008358(param_6,1);
    if (iVar3 == 0) goto LAB_18000a5c6;
    *(undefined8 *)(puVar9 + -8) = 0x18000a5c0;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x18000a5de;
    FUN_180006a30(lpSrcStr[-1] + 0x10);
  }
LAB_18000a5de:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x18000a5fd;
  return BVar10;
}


/* Address: 0x18000a620; Evidence: ev_f1537ebc32203bb1e39818e97028b53169ee4799f9cd8771f0885417196533fa */

undefined4 FUN_18000a620(void)

{
  return DAT_18001aaf0;
}


/* Address: 0x18000a630; Evidence: ev_87253342425f089bae5f02794b6100e3cc2194cdec3b21fedb904dce2833884a */

uint FUN_18000a630(uint param_1)

{
  uint uVar1;
  undefined4 *puVar2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001aaf0;
    DAT_18001aaf0 = param_1;
  }
  else {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 0x16;
    FUN_180005ed8();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x18000a660; Evidence: ev_b63e098e53ae7ca61c71f92ba3791160b0be6854ef84d2433bd50d798326011b */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000a660(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

{
  undefined1 uVar1;
  int iVar2;
  undefined4 *puVar3;
  undefined1 *puVar4;
  longlong lVar5;
  undefined1 *puVar6;
  undefined1 *puVar7;
  undefined1 *puVar8;
  ulonglong uVar9;
  undefined1 *puVar10;
  undefined1 auStack_468 [32];
  longlong local_448;
  undefined8 local_438 [62];
  undefined8 local_248 [62];
  ulonglong local_58;
  
  local_58 = DAT_180019000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    puVar3 = (undefined4 *)FUN_180006080();
    *puVar3 = 0x16;
    FUN_180005ed8();
  }
  else {
    FUN_18000c828();
    FUN_18000dad0((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_18000dad0((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_18000a720:
      while (uVar9 = (ulonglong)((longlong)puVar10 - (longlong)param_1) / param_3 + 1, 8 < uVar9) {
        lVar5 = (uVar9 >> 1) * param_3;
        puVar7 = param_1 + lVar5;
        iVar2 = (*(code *)param_4)(param_1,puVar7);
        if ((0 < iVar2) && (puVar6 = puVar7, uVar9 = param_3, param_1 != puVar7)) {
          do {
            uVar1 = puVar6[-lVar5];
            puVar6[-lVar5] = *puVar6;
            *puVar6 = uVar1;
            uVar9 = uVar9 - 1;
            puVar6 = puVar6 + 1;
          } while (uVar9 != 0);
        }
        iVar2 = (*(code *)param_4)(param_1,puVar10);
        if ((0 < iVar2) && (param_1 != puVar10)) {
          puVar6 = puVar10;
          uVar9 = param_3;
          do {
            uVar1 = puVar6[(longlong)param_1 - (longlong)puVar10];
            puVar6[(longlong)param_1 - (longlong)puVar10] = *puVar6;
            *puVar6 = uVar1;
            puVar6 = puVar6 + 1;
            uVar9 = uVar9 - 1;
          } while (uVar9 != 0);
        }
        iVar2 = (*(code *)param_4)(puVar7);
        puVar6 = param_1;
        puVar8 = puVar10;
        if ((0 < iVar2) && (puVar7 != puVar10)) {
          puVar4 = puVar10;
          uVar9 = param_3;
          do {
            uVar1 = puVar4[(longlong)puVar7 - (longlong)puVar10];
            puVar4[(longlong)puVar7 - (longlong)puVar10] = *puVar4;
            *puVar4 = uVar1;
            puVar4 = puVar4 + 1;
            uVar9 = uVar9 - 1;
          } while (uVar9 != 0);
        }
LAB_18000a890:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_18000a8b0;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_18000a8b0:
          do {
            puVar6 = puVar6 + param_3;
            if (puVar10 < puVar6) break;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        do {
          puVar7 = puVar8;
          puVar8 = puVar7 + -param_3;
          if (puVar8 <= puVar4) break;
          iVar2 = (*(code *)param_4)(puVar8);
        } while (0 < iVar2);
        if (puVar6 <= puVar8) {
          if (puVar8 != puVar6) {
            puVar7 = puVar8;
            uVar9 = param_3;
            do {
              uVar1 = puVar7[(longlong)puVar6 - (longlong)puVar8];
              puVar7[(longlong)puVar6 - (longlong)puVar8] = *puVar7;
              *puVar7 = uVar1;
              puVar7 = puVar7 + 1;
              uVar9 = uVar9 - 1;
            } while (uVar9 != 0);
          }
          puVar7 = puVar6;
          if (puVar4 != puVar8) {
            puVar7 = puVar4;
          }
          goto LAB_18000a890;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_18000a937;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_18000a937:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_18000a98d;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_18000a7a3;
      }
      for (; puVar6 = param_1, puVar7 = param_1, param_1 < puVar10; puVar10 = puVar10 + -param_3) {
        while (puVar8 = puVar6, puVar7 = puVar7 + param_3, puVar7 <= puVar10) {
          iVar2 = (*(code *)param_4)(puVar7,puVar8);
          puVar6 = puVar7;
          if (iVar2 < 1) {
            puVar6 = puVar8;
          }
        }
        if (puVar8 != puVar10) {
          puVar7 = puVar10;
          uVar9 = param_3;
          do {
            uVar1 = puVar7[(longlong)puVar8 - (longlong)puVar10];
            puVar7[(longlong)puVar8 - (longlong)puVar10] = *puVar7;
            *puVar7 = uVar1;
            puVar7 = puVar7 + 1;
            uVar9 = uVar9 - 1;
          } while (uVar9 != 0);
        }
      }
      goto LAB_18000a7a3;
    }
  }
  return;
LAB_18000a98d:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_18000a7a3:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_18000a720;
}


/* Address: 0x18000aa00; Evidence: ev_fd1f489762271f505c5707de95513f2b0d0076ee5193694f6b9e47281fdec99f */

undefined4 FUN_18000aa00(char *param_1,longlong param_2,longlong param_3,longlong param_4)

{
  char cVar1;
  undefined4 *puVar2;
  longlong lVar3;
  char *pcVar4;
  longlong lVar5;
  longlong lVar6;
  
  if (param_4 == 0) {
    if (param_1 == (char *)0x0) {
      if (param_2 == 0) {
        return 0;
      }
      goto LAB_18000aa59;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_18000aa59;
  if (param_2 != 0) {
    if (param_4 == 0) {
      *param_1 = '\0';
      return 0;
    }
    if (param_3 != 0) {
      pcVar4 = param_1;
      lVar5 = param_2;
      lVar3 = param_4;
      if (param_4 == -1) {
        do {
          cVar1 = pcVar4[param_3 - (longlong)param_1];
          *pcVar4 = cVar1;
          if (cVar1 == '\0') {
            return 0;
          }
          lVar5 = lVar5 + -1;
          pcVar4 = pcVar4 + 1;
        } while (lVar5 != 0);
        lVar5 = 0;
      }
      else {
        do {
          lVar6 = lVar3;
          cVar1 = pcVar4[param_3 - (longlong)param_1];
          *pcVar4 = cVar1;
          pcVar4 = pcVar4 + 1;
          if (cVar1 == '\0') {
            return 0;
          }
          lVar5 = lVar5 + -1;
        } while ((lVar5 != 0) && (lVar3 = lVar6 + -1, lVar6 + -1 != 0));
        lVar3 = lVar6 + -1;
        if (lVar5 == 0) {
          lVar3 = lVar6;
        }
        if (lVar3 == 0) {
          *pcVar4 = '\0';
        }
      }
      if (lVar5 != 0) {
        return 0;
      }
      if (param_4 == -1) {
        param_1[param_2 + -1] = '\0';
        return 0x50;
      }
      *param_1 = '\0';
      puVar2 = (undefined4 *)FUN_180006080();
      *puVar2 = 0x22;
      FUN_180005ed8();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_18000aa59:
  puVar2 = (undefined4 *)FUN_180006080();
  *puVar2 = 0x16;
  FUN_180005ed8();
  return 0x16;
}


/* Address: 0x18000ab30; Evidence: ev_15e3eeb9a73f2f84c9250752fda0168c3554aca367a30807d28b0babd9b86ec8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_18000ab30(byte *param_1,byte *param_2)

{
  byte *pbVar1;
  byte bVar2;
  byte local_38 [56];
  
  bVar2 = *param_2;
  local_38[0] = 0;
  local_38[1] = 0;
  local_38[2] = 0;
  local_38[3] = 0;
  local_38[4] = 0;
  local_38[5] = 0;
  local_38[6] = 0;
  local_38[7] = 0;
  local_38[8] = 0;
  local_38[9] = 0;
  local_38[10] = 0;
  local_38[0xb] = 0;
  local_38[0xc] = 0;
  local_38[0xd] = 0;
  local_38[0xe] = 0;
  local_38[0xf] = 0;
  local_38[0x10] = 0;
  local_38[0x11] = 0;
  local_38[0x12] = 0;
  local_38[0x13] = 0;
  local_38[0x14] = 0;
  local_38[0x15] = 0;
  local_38[0x16] = 0;
  local_38[0x17] = 0;
  local_38[0x18] = 0;
  local_38[0x19] = 0;
  local_38[0x1a] = 0;
  local_38[0x1b] = 0;
  local_38[0x1c] = 0;
  local_38[0x1d] = 0;
  local_38[0x1e] = 0;
  local_38[0x1f] = 0;
  while (bVar2 != 0) {
    local_38[(longlong)(int)(uint)bVar2 >> 3] =
         local_38[(longlong)(int)(uint)bVar2 >> 3] | '\x01' << (bVar2 & 7);
    pbVar1 = param_2 + 1;
    param_2 = param_2 + 1;
    bVar2 = *pbVar1;
  }
  bVar2 = *param_1;
  while( true ) {
    if (bVar2 == 0) {
      return (byte *)0x0;
    }
    if ((local_38[bVar2 >> 3] >> (bVar2 & 7) & 1) != 0) break;
    bVar2 = param_1[1];
    param_1 = param_1 + 1;
  }
  return param_1;
}


/* Address: 0x18000abd0; Evidence: ev_6188b0bccd27af5a40fcadd18d030d1f747603df5c8e38a5f901d261e745ec62 */

/* WARNING: Removing unreachable block (ram,0x00018000ae6c) */
/* WARNING: Removing unreachable block (ram,0x00018000ae65) */
/* WARNING: Removing unreachable block (ram,0x00018000ae5e) */
/* WARNING: Removing unreachable block (ram,0x00018000ae57) */
/* WARNING: Removing unreachable block (ram,0x00018000ae50) */
/* WARNING: Removing unreachable block (ram,0x00018000ae49) */
/* WARNING: Removing unreachable block (ram,0x00018000ae42) */
/* WARNING: Removing unreachable block (ram,0x00018000ae3b) */
/* WARNING: Removing unreachable block (ram,0x00018000ae34) */
/* WARNING: Removing unreachable block (ram,0x00018000ae2d) */
/* WARNING: Removing unreachable block (ram,0x00018000ae26) */
/* WARNING: Removing unreachable block (ram,0x00018000ae1f) */
/* WARNING: Removing unreachable block (ram,0x00018000ae18) */
/* WARNING: Removing unreachable block (ram,0x00018000ae11) */
/* WARNING: Removing unreachable block (ram,0x00018000ae0a) */
/* WARNING: Removing unreachable block (ram,0x00018000accd) */
/* WARNING: Removing unreachable block (ram,0x00018000acdc) */
/* WARNING: Removing unreachable block (ram,0x00018000aceb) */
/* WARNING: Removing unreachable block (ram,0x00018000acfa) */
/* WARNING: Removing unreachable block (ram,0x00018000ad09) */
/* WARNING: Removing unreachable block (ram,0x00018000ad15) */
/* WARNING: Removing unreachable block (ram,0x00018000ad21) */
/* WARNING: Removing unreachable block (ram,0x00018000ad2d) */
/* WARNING: Removing unreachable block (ram,0x00018000ad39) */
/* WARNING: Removing unreachable block (ram,0x00018000ad45) */
/* WARNING: Removing unreachable block (ram,0x00018000ad51) */
/* WARNING: Removing unreachable block (ram,0x00018000ad5d) */
/* WARNING: Removing unreachable block (ram,0x00018000ad69) */
/* WARNING: Removing unreachable block (ram,0x00018000ad75) */
/* WARNING: Removing unreachable block (ram,0x00018000ad81) */

byte * FUN_18000abd0(byte *param_1,byte *param_2)

{
  byte bVar1;
  uint uVar2;
  ushort uVar3;
  undefined1 auVar4 [16];
  undefined1 auVar5 [16];
  undefined1 auVar6 [16];
  undefined1 auVar7 [16];
  undefined1 auVar8 [16];
  undefined1 auVar9 [16];
  undefined1 auVar10 [16];
  undefined1 auVar11 [16];
  undefined1 auVar12 [16];
  undefined1 auVar13 [16];
  undefined1 auVar14 [16];
  undefined1 auVar15 [16];
  undefined1 auVar16 [16];
  undefined1 auVar17 [16];
  undefined1 auVar18 [16];
  byte *pbVar19;
  undefined1 (*pauVar20) [16];
  ulonglong uVar21;
  undefined1 auVar22 [16];
  undefined1 auVar23 [16];
  undefined1 auVar24 [16];
  undefined1 auVar26 [16];
  undefined1 auVar27 [16];
  undefined1 auVar28 [16];
  undefined1 auVar29 [16];
  undefined1 auVar30 [16];
  undefined1 auVar31 [16];
  undefined1 auVar32 [16];
  undefined1 auVar33 [16];
  undefined1 auVar34 [16];
  longlong lVar25;
  
  uVar21 = (ulonglong)((uint)param_2 & 0xf);
  pauVar20 = (undefined1 (*) [16])(param_2 + -uVar21);
  auVar33 = *pauVar20;
  switch(uVar21) {
  case 1:
    auVar33 = auVar33 >> 8;
    break;
  case 2:
    auVar33 = auVar33 >> 0x10;
    break;
  case 3:
    auVar33 = auVar33 >> 0x18;
    break;
  case 4:
    auVar33 = auVar33 >> 0x20;
    break;
  case 5:
    auVar33 = auVar33 >> 0x28;
    break;
  case 6:
    auVar33 = auVar33 >> 0x30;
    break;
  case 7:
    auVar33 = auVar33 >> 0x38;
    break;
  case 8:
    auVar33 = auVar33 >> 0x40;
    break;
  case 9:
    auVar33 = auVar33 >> 0x48;
    break;
  case 10:
    auVar33 = auVar33 >> 0x50;
    break;
  case 0xb:
    auVar33 = auVar33 >> 0x58;
    break;
  case 0xc:
    auVar33 = auVar33 >> 0x60;
    break;
  case 0xd:
    auVar33 = auVar33 >> 0x68;
    break;
  case 0xe:
    auVar33 = auVar33 >> 0x70;
    break;
  case 0xf:
    auVar33 = auVar33 >> 0x78;
  }
  auVar22[0] = -(auVar33[0] == '\0');
  auVar22[1] = -(auVar33[1] == '\0');
  auVar22[2] = -(auVar33[2] == '\0');
  auVar22[3] = -(auVar33[3] == '\0');
  auVar22[4] = -(auVar33[4] == '\0');
  auVar22[5] = -(auVar33[5] == '\0');
  auVar22[6] = -(auVar33[6] == '\0');
  auVar22[7] = -(auVar33[7] == '\0');
  auVar22[8] = -(auVar33[8] == '\0');
  auVar22[9] = -(auVar33[9] == '\0');
  auVar22[10] = -(auVar33[10] == '\0');
  auVar22[0xb] = -(auVar33[0xb] == '\0');
  auVar22[0xc] = -(auVar33[0xc] == '\0');
  auVar22[0xd] = -(auVar33[0xd] == '\0');
  auVar22[0xe] = -(auVar33[0xe] == '\0');
  auVar22[0xf] = -(auVar33[0xf] == '\0');
  uVar3 = (ushort)(SUB161(auVar22 >> 7,0) & 1) | (ushort)(SUB161(auVar22 >> 0xf,0) & 1) << 1 |
          (ushort)(SUB161(auVar22 >> 0x17,0) & 1) << 2 |
          (ushort)(SUB161(auVar22 >> 0x1f,0) & 1) << 3 |
          (ushort)(SUB161(auVar22 >> 0x27,0) & 1) << 4 |
          (ushort)(SUB161(auVar22 >> 0x2f,0) & 1) << 5 |
          (ushort)(SUB161(auVar22 >> 0x37,0) & 1) << 6 |
          (ushort)(SUB161(auVar22 >> 0x3f,0) & 1) << 7 |
          (ushort)(SUB161(auVar22 >> 0x47,0) & 1) << 8 |
          (ushort)(SUB161(auVar22 >> 0x4f,0) & 1) << 9 |
          (ushort)(SUB161(auVar22 >> 0x57,0) & 1) << 10 |
          (ushort)(SUB161(auVar22 >> 0x5f,0) & 1) << 0xb |
          (ushort)(SUB161(auVar22 >> 0x67,0) & 1) << 0xc |
          (ushort)(SUB161(auVar22 >> 0x6f,0) & 1) << 0xd |
          (ushort)(SUB161(auVar22 >> 0x77,0) & 1) << 0xe | (ushort)(auVar22[0xf] >> 7) << 0xf;
  if (uVar3 == 0) {
    if (uVar21 == 0) {
      if ((*pauVar20)[1] != '\0') {
        pbVar19 = FUN_18000ab30(param_1,param_2);
        return pbVar19;
      }
      goto LAB_18000ae79;
    }
  }
  else {
    uVar2 = 0;
    if (uVar3 != 0) {
      for (; (uVar3 >> uVar2 & 1) == 0; uVar2 = uVar2 + 1) {
      }
    }
    lVar25 = auVar33._8_8_;
    switch(-uVar2) {
    case 0:
      auVar33 = ZEXT816(0);
      break;
    case 0xfffffff1:
      auVar26._0_8_ = auVar33._0_8_ << 8;
      auVar26._8_8_ = lVar25 << 8 | auVar33._0_8_ >> 0x38;
      auVar33 = auVar26 >> 8;
      break;
    case 0xfffffff2:
      auVar27._0_8_ = auVar33._0_8_ << 0x10;
      auVar27._8_8_ = lVar25 << 0x10 | auVar33._0_8_ >> 0x30;
      auVar33 = auVar27 >> 0x10;
      break;
    case 0xfffffff3:
      auVar28._0_8_ = auVar33._0_8_ << 0x18;
      auVar28._8_8_ = lVar25 << 0x18 | auVar33._0_8_ >> 0x28;
      auVar33 = auVar28 >> 0x18;
      break;
    case 0xfffffff4:
      auVar29._0_8_ = auVar33._0_8_ << 0x20;
      auVar29._8_8_ = lVar25 << 0x20 | auVar33._0_8_ >> 0x20;
      auVar33 = auVar29 >> 0x20;
      break;
    case 0xfffffff5:
      auVar30._0_8_ = auVar33._0_8_ << 0x28;
      auVar30._8_8_ = lVar25 << 0x28 | auVar33._0_8_ >> 0x18;
      auVar33 = auVar30 >> 0x28;
      break;
    case 0xfffffff6:
      auVar31._0_8_ = auVar33._0_8_ << 0x30;
      auVar31._8_8_ = lVar25 << 0x30 | auVar33._0_8_ >> 0x10;
      auVar33 = auVar31 >> 0x30;
      break;
    case 0xfffffff7:
      auVar32._0_8_ = auVar33._0_8_ << 0x38;
      auVar32._8_8_ = lVar25 << 0x38 | auVar33._0_8_ >> 8;
      auVar33 = auVar32 >> 0x38;
      break;
    case 0xfffffff8:
      auVar33._8_8_ = 0;
      break;
    case 0xfffffff9:
      auVar4._8_8_ = 0;
      auVar4._0_8_ = auVar33._0_8_ << 8;
      auVar33 = (auVar4 << 0x40) >> 0x48;
      break;
    case 0xfffffffa:
      auVar5._8_8_ = 0;
      auVar5._0_8_ = auVar33._0_8_ << 0x10;
      auVar33 = (auVar5 << 0x40) >> 0x50;
      break;
    case 0xfffffffb:
      auVar6._8_8_ = 0;
      auVar6._0_8_ = auVar33._0_8_ << 0x18;
      auVar33 = (auVar6 << 0x40) >> 0x58;
      break;
    case 0xfffffffc:
      auVar7._8_8_ = 0;
      auVar7._0_8_ = auVar33._0_8_ << 0x20;
      auVar33 = (auVar7 << 0x40) >> 0x60;
      break;
    case 0xfffffffd:
      auVar8._8_8_ = 0;
      auVar8._0_8_ = auVar33._0_8_ << 0x28;
      auVar33 = (auVar8 << 0x40) >> 0x68;
      break;
    case 0xfffffffe:
      auVar9._8_8_ = 0;
      auVar9._0_8_ = auVar33._0_8_ << 0x30;
      auVar33 = (auVar9 << 0x40) >> 0x70;
      break;
    case 0xffffffff:
      auVar10._8_8_ = 0;
      auVar10._0_8_ = auVar33._0_8_ << 0x38;
      auVar33 = (auVar10 << 0x40) >> 0x78;
    }
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_18000ae79;
  }
  auVar34 = pauVar20[1];
  auVar23[0] = -(auVar34[0] == '\0');
  auVar23[1] = -(auVar34[1] == '\0');
  auVar23[2] = -(auVar34[2] == '\0');
  auVar23[3] = -(auVar34[3] == '\0');
  auVar23[4] = -(auVar34[4] == '\0');
  auVar23[5] = -(auVar34[5] == '\0');
  auVar23[6] = -(auVar34[6] == '\0');
  lVar25 = auVar34._8_8_;
  auVar23[7] = -(auVar34[7] == '\0');
  auVar23[8] = -(auVar34[8] == '\0');
  auVar23[9] = -(auVar34[9] == '\0');
  auVar23[10] = -(auVar34[10] == '\0');
  auVar23[0xb] = -(auVar34[0xb] == '\0');
  auVar23[0xc] = -(auVar34[0xc] == '\0');
  auVar23[0xd] = -(auVar34[0xd] == '\0');
  auVar23[0xe] = -(auVar34[0xe] == '\0');
  auVar23[0xf] = -(auVar34[0xf] == '\0');
  uVar3 = (ushort)(SUB161(auVar23 >> 7,0) & 1) | (ushort)(SUB161(auVar23 >> 0xf,0) & 1) << 1 |
          (ushort)(SUB161(auVar23 >> 0x17,0) & 1) << 2 |
          (ushort)(SUB161(auVar23 >> 0x1f,0) & 1) << 3 |
          (ushort)(SUB161(auVar23 >> 0x27,0) & 1) << 4 |
          (ushort)(SUB161(auVar23 >> 0x2f,0) & 1) << 5 |
          (ushort)(SUB161(auVar23 >> 0x37,0) & 1) << 6 |
          (ushort)(SUB161(auVar23 >> 0x3f,0) & 1) << 7 |
          (ushort)(SUB161(auVar23 >> 0x47,0) & 1) << 8 |
          (ushort)(SUB161(auVar23 >> 0x4f,0) & 1) << 9 |
          (ushort)(SUB161(auVar23 >> 0x57,0) & 1) << 10 |
          (ushort)(SUB161(auVar23 >> 0x5f,0) & 1) << 0xb |
          (ushort)(SUB161(auVar23 >> 0x67,0) & 1) << 0xc |
          (ushort)(SUB161(auVar23 >> 0x6f,0) & 1) << 0xd |
          (ushort)(SUB161(auVar23 >> 0x77,0) & 1) << 0xe | (ushort)(auVar23[0xf] >> 7) << 0xf;
  if (uVar3 != 0) {
    uVar2 = 0;
    if (uVar3 != 0) {
      for (; (uVar3 >> uVar2 & 1) == 0; uVar2 = uVar2 + 1) {
      }
    }
    if ((uVar2 - uVar21) + 0x10 < 0x11) {
      uVar21 = auVar34._0_8_;
      switch(-uVar2) {
      case 0:
        auVar34 = ZEXT816(0);
        break;
      case 0xfffffff1:
        auVar34._0_8_ = uVar21 << 8;
        auVar34._8_8_ = lVar25 << 8 | uVar21 >> 0x38;
        break;
      case 0xfffffff2:
        auVar34._0_8_ = uVar21 << 0x10;
        auVar34._8_8_ = lVar25 << 0x10 | uVar21 >> 0x30;
        break;
      case 0xfffffff3:
        auVar34._0_8_ = uVar21 << 0x18;
        auVar34._8_8_ = lVar25 << 0x18 | uVar21 >> 0x28;
        break;
      case 0xfffffff4:
        auVar34._0_8_ = uVar21 << 0x20;
        auVar34._8_8_ = lVar25 << 0x20 | uVar21 >> 0x20;
        break;
      case 0xfffffff5:
        auVar34._0_8_ = uVar21 << 0x28;
        auVar34._8_8_ = lVar25 << 0x28 | uVar21 >> 0x18;
        break;
      case 0xfffffff6:
        auVar34._0_8_ = uVar21 << 0x30;
        auVar34._8_8_ = lVar25 << 0x30 | uVar21 >> 0x10;
        break;
      case 0xfffffff7:
        auVar34._0_8_ = uVar21 << 0x38;
        auVar34._8_8_ = lVar25 << 0x38 | uVar21 >> 8;
        break;
      case 0xfffffff8:
        auVar18._8_8_ = 0;
        auVar18._0_8_ = uVar21;
        auVar34 = auVar18 << 0x40;
        break;
      case 0xfffffff9:
        auVar11._8_8_ = 0;
        auVar11._0_8_ = uVar21 << 8;
        auVar34 = auVar11 << 0x40;
        break;
      case 0xfffffffa:
        auVar12._8_8_ = 0;
        auVar12._0_8_ = uVar21 << 0x10;
        auVar34 = auVar12 << 0x40;
        break;
      case 0xfffffffb:
        auVar13._8_8_ = 0;
        auVar13._0_8_ = uVar21 << 0x18;
        auVar34 = auVar13 << 0x40;
        break;
      case 0xfffffffc:
        auVar14._8_8_ = 0;
        auVar14._0_8_ = uVar21 << 0x20;
        auVar34 = auVar14 << 0x40;
        break;
      case 0xfffffffd:
        auVar15._8_8_ = 0;
        auVar15._0_8_ = uVar21 << 0x28;
        auVar34 = auVar15 << 0x40;
        break;
      case 0xfffffffe:
        auVar16._8_8_ = 0;
        auVar16._0_8_ = uVar21 << 0x30;
        auVar34 = auVar16 << 0x40;
        break;
      case 0xffffffff:
        auVar17._8_8_ = 0;
        auVar17._0_8_ = uVar21 << 0x38;
        auVar34 = auVar17 << 0x40;
      }
      auVar33 = auVar33 | auVar34;
LAB_18000ae79:
      bVar1 = *param_1;
      while( true ) {
        if (bVar1 == 0) {
          return (byte *)0x0;
        }
        auVar24[0] = -(bVar1 == auVar33[0]);
        auVar24[1] = -(bVar1 == auVar33[1]);
        auVar24[2] = -(bVar1 == auVar33[2]);
        auVar24[3] = -(bVar1 == auVar33[3]);
        auVar24[4] = -(bVar1 == auVar33[4]);
        auVar24[5] = -(bVar1 == auVar33[5]);
        auVar24[6] = -(bVar1 == auVar33[6]);
        auVar24[7] = -(bVar1 == auVar33[7]);
        auVar24[8] = -(bVar1 == auVar33[8]);
        auVar24[9] = -(bVar1 == auVar33[9]);
        auVar24[10] = -(bVar1 == auVar33[10]);
        auVar24[0xb] = -(bVar1 == auVar33[0xb]);
        auVar24[0xc] = -(bVar1 == auVar33[0xc]);
        auVar24[0xd] = -(bVar1 == auVar33[0xd]);
        auVar24[0xe] = -(bVar1 == auVar33[0xe]);
        auVar24[0xf] = -(bVar1 == auVar33[0xf]);
        if ((((((((((((((((SUB161(auVar24 >> 7,0) & 1) != 0 || (SUB161(auVar24 >> 0xf,0) & 1) != 0)
                        || (SUB161(auVar24 >> 0x17,0) & 1) != 0) ||
                       (SUB161(auVar24 >> 0x1f,0) & 1) != 0) || (SUB161(auVar24 >> 0x27,0) & 1) != 0
                      ) || (SUB161(auVar24 >> 0x2f,0) & 1) != 0) ||
                    (SUB161(auVar24 >> 0x37,0) & 1) != 0) || (SUB161(auVar24 >> 0x3f,0) & 1) != 0)
                  || (SUB161(auVar24 >> 0x47,0) & 1) != 0) || (SUB161(auVar24 >> 0x4f,0) & 1) != 0)
                || (SUB161(auVar24 >> 0x57,0) & 1) != 0) || (SUB161(auVar24 >> 0x5f,0) & 1) != 0) ||
              (SUB161(auVar24 >> 0x67,0) & 1) != 0) || (SUB161(auVar24 >> 0x6f,0) & 1) != 0) ||
            (SUB161(auVar24 >> 0x77,0) & 1) != 0) || auVar24[0xf] < '\0') break;
        bVar1 = param_1[1];
        param_1 = param_1 + 1;
      }
      return param_1;
    }
  }
  pbVar19 = FUN_18000ab30(param_1,param_2);
  return pbVar19;
}


/* Address: 0x18000af88; Evidence: ev_2eb9923b7cf5a071dfca2f1deb3e36449cd23a8c38fa8d6d5d2ca3f8cd754523 */

void FUN_18000af88(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x18000af90; Evidence: ev_ab522048e8f35ff666042bd2bdab17955a71af553b80dec907fbce478eecf71e */

/* Library Function - Single Match
    _mbsdec_l
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

uchar * __cdecl _mbsdec_l(uchar *_Start,uchar *_Pos,_locale_t _Locale)

{
  undefined4 *puVar1;
  byte *pbVar2;
  longlong local_28 [2];
  longlong local_18;
  char local_10;
  
  if ((_Start == (uchar *)0x0) || (_Pos == (uchar *)0x0)) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 0x16;
    FUN_180005ed8();
  }
  else if (_Start < _Pos) {
    FUN_180004860(local_28,(longlong *)_Locale);
    pbVar2 = _Pos + -1;
    if (*(int *)(local_18 + 8) != 0) {
      do {
        pbVar2 = pbVar2 + -1;
        if (pbVar2 < _Start) break;
      } while ((*(byte *)((ulonglong)*pbVar2 + 0x19 + local_18) & 4) != 0);
      pbVar2 = _Pos + (-1 - (ulonglong)((int)_Pos - (int)pbVar2 & 1));
    }
    if (local_10 == '\0') {
      return pbVar2;
    }
    *(uint *)(local_28[0] + 0x3a8) = *(uint *)(local_28[0] + 0x3a8) & 0xfffffffd;
    return pbVar2;
  }
  return (uchar *)0x0;
}


/* Address: 0x18000b024; Evidence: ev_cf3096f14de6205eb6ea00829d43c821563ff59d49f93d28cce3445954a1f296 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000b024(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                       undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong lVar1;
  int iVar2;
  uint uVar3;
  int iVar4;
  ulonglong uVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  ulonglong uVar8;
  LPCWSTR pWVar9;
  undefined1 *puVar10;
  undefined1 *puVar11;
  undefined1 *puVar12;
  undefined1 *puVar13;
  undefined1 auStack_88 [32];
  undefined8 local_68;
  undefined4 local_60;
  undefined4 local_38 [2];
  ulonglong local_30;
  
  puVar10 = auStack_88;
  puVar12 = auStack_88;
  local_30 = DAT_180019000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_180008358(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_18000b32f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_18000b315:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_18000b31c;
  }
  else {
    if (uVar5 < 0x401) {
      uVar8 = uVar5 + 0xf;
      if (uVar8 <= uVar5) {
        uVar8 = 0xffffffffffffff0;
      }
      lVar1 = -(uVar8 & 0xfffffffffffffff0);
      puVar12 = auStack_88 + lVar1;
      puVar10 = auStack_88 + lVar1;
      puVar6 = (undefined4 *)((longlong)local_38 + lVar1);
      pWVar9 = (LPCWSTR)0x0;
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000b315;
      *puVar6 = 0xcccc;
LAB_18000b130:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000b130;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_18000b315;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x18000b15a;
    iVar2 = FUN_180008358(param_8,1);
    if (iVar2 == 0) goto LAB_18000b315;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x18000b18d;
    iVar2 = FUN_180008918(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_18000b315;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_18000b2f8;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x18000b230;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_18000b25e:
          puVar6 = puVar7 + 4;
          goto LAB_18000b262;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x18000b24e;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_18000b25e;
        }
LAB_18000b262:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x18000b294;
          iVar4 = FUN_180008918(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x18000b2c2;
              uVar3 = FUN_1800083e8(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000b2f8;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x18000b2dc;
              uVar3 = FUN_1800083e8(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000b2fd;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000b2f3;
              FUN_180006a30(puVar6 + -4);
            }
            goto LAB_18000b31c;
          }
LAB_18000b2f8:
          if (puVar6 != (undefined4 *)0x0) {
LAB_18000b2fd:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000b30e;
              FUN_180006a30(puVar6 + -4);
            }
          }
        }
      }
      uVar5 = 0;
    }
    else if (param_7 != 0) {
      if (iVar2 <= param_7) {
        *(undefined8 *)(puVar12 + 0x40) = 0;
        *(undefined8 *)(puVar12 + 0x38) = 0;
        *(undefined8 *)(puVar12 + 0x30) = 0;
        *(int *)(puVar12 + 0x28) = param_7;
        *(undefined8 *)(puVar12 + 0x20) = param_6;
        *(undefined8 *)(puVar12 + -8) = 0x18000b1e5;
        uVar3 = FUN_180008918(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_18000b31c;
      }
      goto LAB_18000b315;
    }
LAB_18000b31c:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x18000b32d;
      FUN_180006a30(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_18000b32f:
  *(undefined8 *)(puVar13 + -8) = 0x18000b33b;
  return uVar5;
}


/* Address: 0x18000b358; Evidence: ev_7c07f7ff905d34c5959faaaa207f2cfe1c17c366e277a61fa1df9b4f33b2e4e3 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_180004860(&local_28,param_1);
  FUN_18000b024(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x18000b3f0; Evidence: ev_edc98449c6b7c868bbda813d4313d478c0e12c90a989de175e6be63eded77012 */

uint FUN_18000b3f0(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x18000b410; Evidence: ev_f530d9623959e351bc26db16c0c6dd9558a73162c52357c4f1dec7f5d1089953 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 0x16;
    FUN_180005ed8();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000b442. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001a678,0,param_1);
  return uVar2;
}


/* Address: 0x18000b460; Evidence: ev_2ae6139c307f4033072ba911ab3ddc37f9b796b5777b6b3b3edcc46df7b65e3f */

/* Library Function - Single Match
    _realloc_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

LPVOID _realloc_base(LPVOID param_1,ulonglong param_2)

{
  bool bVar1;
  int iVar2;
  LPVOID pvVar3;
  undefined4 *puVar4;
  undefined7 extraout_var;
  
  if (param_1 == (LPVOID)0x0) {
    pvVar3 = _malloc_base(param_2);
  }
  else {
    if (param_2 == 0) {
      FUN_180006a30(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_18001a678,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_18000a620();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_180008ef0(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      puVar4 = (undefined4 *)FUN_180006080();
      *puVar4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18000b4dc; Evidence: ev_49e31363e29ce384fe81985f8e622acf0afb0ba49606f688efa9a2aa27e33245 */

undefined4 FUN_18000b4dc(ushort *param_1)

{
  int iVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  if (param_1 != (ushort *)0x0) {
    iVar4 = 0;
    iVar5 = 0xe3;
    do {
      iVar2 = (iVar5 + iVar4) / 2;
      iVar3 = FUN_18000c7c0(param_1,(ushort *)(&PTR_DAT_180013680)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_180013688 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_180011c20 + (longlong)iVar5 * 0x10);
      }
      iVar1 = iVar2 + -1;
      if (-1 < iVar3) {
        iVar4 = iVar2 + 1;
        iVar1 = iVar5;
      }
      iVar5 = iVar1;
    } while (iVar4 <= iVar5);
  }
  return 0;
}


/* Address: 0x18000b584; Evidence: ev_1f58dd5cd491e7c08c977002e789c285f38fbb09fa4c9bfbd371882ba329eea4 */

/* Library Function - Single Match
    __acrt_lowio_create_handle_array
   
   Library: Visual Studio 2019 Release */

undefined8 * __acrt_lowio_create_handle_array(void)

{
  uint uVar1;
  undefined8 *puVar2;
  undefined1 *puVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  undefined8 *puVar3;
  
  puVar2 = _calloc_base(0x40,0x48);
  puVar5 = (undefined8 *)0x0;
  if ((puVar2 != (undefined8 *)0x0) && (puVar5 = puVar2, puVar2 != puVar2 + 0x240)) {
    puVar6 = puVar2 + 6;
    do {
      InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + -6),4000,0);
      puVar6[-1] = 0xffffffffffffffff;
      puVar4 = (undefined1 *)((longlong)puVar6 + 0xe);
      *(byte *)((longlong)puVar6 + 0xd) = *(byte *)((longlong)puVar6 + 0xd) & 0xf8;
      *puVar6 = 0;
      *(undefined4 *)(puVar6 + 1) = 0xa0a0000;
      *(undefined1 *)((longlong)puVar6 + 0xc) = 10;
      puVar3 = (undefined8 *)0x0;
      do {
        *puVar4 = 0;
        uVar1 = (int)puVar3 + 1;
        puVar3 = (undefined8 *)(ulonglong)uVar1;
        puVar4 = puVar4 + 1;
      } while (uVar1 < 5);
      puVar3 = puVar6 + 3;
      puVar6 = puVar6 + 9;
    } while (puVar3 != puVar2 + 0x240);
  }
  FUN_180006a30((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x18000b62c; Evidence: ev_8bf355dfbb833e2c63dec4ca8cd21051c555cb7b5ae1df1e6fde1310592180ce */

/* Library Function - Single Match
    __acrt_lowio_destroy_handle_array
   
   Library: Visual Studio 2019 Release */

void __acrt_lowio_destroy_handle_array(LPCRITICAL_SECTION param_1)

{
  LPCRITICAL_SECTION lpCriticalSection;
  
  if (param_1 != (LPCRITICAL_SECTION)0x0) {
    for (lpCriticalSection = param_1;
        lpCriticalSection != (LPCRITICAL_SECTION)&param_1[0x73].LockCount;
        lpCriticalSection = (LPCRITICAL_SECTION)&lpCriticalSection[1].SpinCount) {
      DeleteCriticalSection(lpCriticalSection);
    }
    FUN_180006a30(param_1);
  }
  return;
}


/* Address: 0x18000b67c; Evidence: ev_208090a2998e8af5c8b072fb07a6d2b9c43d06c3c59a1ec093eb792e5a8bcf7f */

/* Library Function - Single Match
    __acrt_lowio_ensure_fh_exists
   
   Library: Visual Studio 2019 Release */

longlong __acrt_lowio_ensure_fh_exists(uint param_1)

{
  int iVar1;
  undefined4 *puVar2;
  longlong lVar3;
  undefined8 *puVar4;
  longlong lVar5;
  
  if (param_1 < 0x2000) {
    lVar3 = 0;
    __acrt_lock(7);
    lVar5 = lVar3;
    iVar1 = DAT_18001aa80;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_18001a680)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_18001a680)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_18001aa80 + 0x40;
        DAT_18001aa80 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 9;
    FUN_180005ed8();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x18000b724; Evidence: ev_a360107dcf3f5131c5d936ffda8aac5267851af1624b56171f4d0368028c43d3 */

void FUN_18000b724(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b744. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18000b74c; Evidence: ev_14fcf4f03f2bf7290f21fa7f432b7450beb4b91f6094dd814398f6e7b09aeab1 */

void FUN_18000b74c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b76c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18000b774; Evidence: ev_696331352b01c41c23ef1890150755df064d26a6840aba89cce0affb3429f812 */

undefined8 FUN_18000b774(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  undefined4 *puVar3;
  __acrt_ptd *p_Var4;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_18000c858();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_18000b7f4;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_18000b7f4:
      *(undefined8 *)
       ((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  puVar3 = (undefined4 *)FUN_180006080();
  *puVar3 = 9;
  p_Var4 = FUN_18000605c();
  *(undefined4 *)p_Var4 = 0;
  return 0xffffffff;
}


/* Address: 0x18000b830; Evidence: ev_7b0142ff4c9c3b6b20fddf171d927dd9009c9d0faf95ea25d754f4cdfc522832 */

undefined8 FUN_18000b830(uint param_1)

{
  __acrt_ptd *p_Var1;
  undefined4 *puVar2;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000605c();
    *(undefined4 *)p_Var1 = 0;
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) {
      if ((*(byte *)((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000605c();
    *(undefined4 *)p_Var1 = 0;
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 9;
    FUN_180005ed8();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x18000b8a8; Evidence: ev_8cf9b8785fa4c26309413c7688cae3eef915b1b05374543b883f5e7d7fe38d6a */

undefined8 FUN_18000b8a8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  __acrt_ptd *p_Var4;
  undefined4 *puVar5;
  undefined8 uVar6;
  
  FUN_18000b724(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001a680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000b830(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar6 = 0;
    if (BVar2 != 0) goto LAB_18000b91f;
    DVar3 = GetLastError();
    p_Var4 = FUN_18000605c();
    *(DWORD *)p_Var4 = DVar3;
  }
  puVar5 = (undefined4 *)FUN_180006080();
  *puVar5 = 9;
  uVar6 = 0xffffffff;
LAB_18000b91f:
  FUN_18000b74c(*param_4);
  return uVar6;
}


/* Address: 0x18000b934; Evidence: ev_280d84cb04fa9e0356c5cc0e4c5e1013476505892a810b436fbad99020a12878 */

/* Library Function - Single Match
    _commit
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl _commit(int _FileHandle)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  int local_res8 [2];
  undefined1 local_res10 [8];
  uint local_res18 [2];
  uint local_res20 [2];
  int *local_18 [3];
  
  local_res8[0] = _FileHandle;
  if (_FileHandle == -2) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_18001aa80)) &&
       ((*(byte *)((&DAT_18001a680)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_18000b8a8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
    FUN_180005ed8();
  }
  return -1;
}


/* Address: 0x18000b9c8; Evidence: ev_d3b6154d87affe05a853448a1026f484f4ecb5d7035bc428d8322fca055e73af */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000b9c8(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
                     longlong *param_5)

{
  char cVar1;
  byte bVar2;
  HANDLE hFile;
  int iVar3;
  BOOL BVar4;
  DWORD DVar5;
  ulonglong uVar6;
  byte *pbVar7;
  char *pcVar8;
  ulonglong uVar9;
  uint uVar10;
  uint uVar11;
  undefined1 *puVar12;
  undefined1 (*pauVar13) [32];
  ulonglong uVar14;
  longlong lVar15;
  ulonglong uVar16;
  longlong lVar17;
  ulonglong uVar18;
  undefined1 auStackY_108 [32];
  undefined2 local_c8 [2];
  ushort local_c4 [2];
  DWORD local_c0 [2];
  undefined1 (*local_b8) [32];
  longlong *local_b0;
  uint local_a8 [2];
  UINT local_a0;
  int local_9c;
  undefined1 (*local_98) [32];
  longlong local_90;
  uint local_88 [2];
  undefined1 *local_80;
  undefined1 (*local_78) [32];
  HANDLE local_70;
  longlong local_68;
  undefined8 local_60;
  undefined1 local_58 [8];
  undefined1 local_50;
  undefined1 local_4f;
  undefined1 local_48 [8];
  ulonglong local_40;
  
  local_60 = 0xfffffffffffffffe;
  local_40 = DAT_180019000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_18001a680)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_180005a90(local_b0);
  }
  local_9c = *(int *)(local_b0[3] + 0xc);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  uVar16 = uVar14;
  local_68 = lVar17;
  if (local_98 < (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff))) {
    do {
      local_c8[0] = CONCAT11(local_c8[0]._1_1_,(*param_3)[0]);
      local_c4[0] = 0;
      local_c4[1] = 0;
      uVar10 = 1;
      if (local_9c == 0xfde9) {
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_18001a680)[local_68]);
        uVar16 = uVar14;
        uVar18 = uVar14;
        do {
          uVar10 = (uint)uVar16;
          if (*pcVar8 == '\0') break;
          uVar10 = uVar10 + 1;
          uVar16 = (ulonglong)uVar10;
          uVar18 = uVar18 + 1;
          pcVar8 = pcVar8 + 1;
        } while ((longlong)uVar18 < 5);
        if ((longlong)uVar18 < 1) {
          cVar1 = (&DAT_180019900)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_18001a680)[local_90]) =
                     (*param_3)[uVar16];
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar17);
            }
            param_1[1] = param_1[1] + (int)lVar17;
            return param_1;
          }
          local_a8[0] = 0;
          local_a8[1] = 0;
          uVar10 = (iVar3 == 4) + 1;
          local_78 = param_3;
          pbVar7 = FUN_180009be8(local_c4,&local_78,(ulonglong)uVar10,local_a8,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_180019900)[*(byte *)((&DAT_18001a680)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_18001a680)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_18001a680)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_18000de90((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_18001a680)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_180009be8(local_c4,&local_80,(ulonglong)uVar10,local_88,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_18001a680)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_18001a680)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_180009830(local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_18000bcd0;
          }
          uVar16 = 1;
          pauVar13 = param_3;
        }
        else {
          local_50 = *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48);
          local_4f = (*param_3)[0];
          *(byte *)(lVar15 + 0x3d + uVar6 * 0x48) = bVar2 & 0xfb;
          uVar16 = 2;
          pauVar13 = (undefined1 (*) [32])&local_50;
        }
        iVar3 = FUN_180009830(local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_18000bcd0:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_1800083e8(local_a0,0,local_c4,uVar10);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_18000be29:
        DVar5 = GetLastError();
        *param_1 = DVar5;
        return param_1;
      }
      uVar11 = (param_1[2] - (int)local_98) + (int)param_3;
      param_1[1] = uVar11;
      if (local_c0[0] < uVar10) {
        return param_1;
      }
      if ((char)local_c8[0] == '\n') {
        local_c8[0] = 0xd;
        BVar4 = WriteFile(hFile,local_c8,1,local_c0,(LPOVERLAPPED)0x0);
        if (BVar4 == 0) goto LAB_18000be29;
        if (local_c0[0] == 0) {
          return param_1;
        }
        param_1[2] = param_1[2] + 1;
        param_1[1] = param_1[1] + 1;
        uVar11 = param_1[1];
      }
      uVar16 = (ulonglong)uVar11;
    } while (param_3 < local_b8);
  }
  return param_1;
}


/* Address: 0x18000be5c; Evidence: ev_6b5491f8bfb2c6b35a88a9299724e86bf176ee4a02ed877c658f258fe337ca2c */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000be5c(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

{
  char cVar1;
  HANDLE hFile;
  BOOL BVar2;
  DWORD DVar3;
  uint nNumberOfBytesToWrite;
  char *pcVar4;
  char *pcVar5;
  undefined1 auStackY_1468 [32];
  DWORD local_1438 [4];
  char local_1428 [5120];
  ulonglong local_28;
  undefined8 local_20;
  
  local_20 = 0x18000be74;
  local_28 = DAT_180019000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_18001a680)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  do {
    if (pcVar5 <= param_3) {
      return param_1;
    }
    pcVar4 = local_1428;
    do {
      if (pcVar5 <= param_3) break;
      cVar1 = *param_3;
      param_3 = param_3 + 1;
      if (cVar1 == '\n') {
        param_1[2] = param_1[2] + 1;
        *pcVar4 = '\r';
        pcVar4 = pcVar4 + 1;
      }
      *pcVar4 = cVar1;
      pcVar4 = pcVar4 + 1;
    } while (pcVar4 < local_1428 + 0x13ff);
    local_1438[0] = 0;
    nNumberOfBytesToWrite = (int)pcVar4 - (int)local_1428;
    BVar2 = WriteFile(hFile,local_1428,nNumberOfBytesToWrite,local_1438,(LPOVERLAPPED)0x0);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      *param_1 = DVar3;
      return param_1;
    }
    param_1[1] = param_1[1] + local_1438[0];
    if (local_1438[0] < nNumberOfBytesToWrite) {
      return param_1;
    }
  } while( true );
}


/* Address: 0x18000bf64; Evidence: ev_c2ff6f87dd0ee862eb9afcd8a773001445d44e1567c54629e7a7043d2accf0aa */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000bf64(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

{
  short sVar1;
  HANDLE hFile;
  uint nNumberOfBytesToWrite;
  BOOL BVar2;
  DWORD DVar3;
  short *psVar4;
  short *psVar5;
  undefined1 auStackY_1468 [32];
  DWORD local_1438 [4];
  short local_1428 [2560];
  ulonglong local_28;
  undefined8 local_20;
  
  local_20 = 0x18000bf7c;
  local_28 = DAT_180019000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_18001a680)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  do {
    if (psVar5 <= param_3) {
      return param_1;
    }
    psVar4 = local_1428;
    do {
      if (psVar5 <= param_3) break;
      sVar1 = *param_3;
      param_3 = param_3 + 1;
      if (sVar1 == 10) {
        param_1[2] = param_1[2] + 2;
        *psVar4 = 0xd;
        psVar4 = psVar4 + 1;
      }
      *psVar4 = sVar1;
      psVar4 = psVar4 + 1;
    } while (psVar4 < local_1428 + 0x9ff);
    local_1438[0] = 0;
    nNumberOfBytesToWrite = (int)((longlong)psVar4 - (longlong)local_1428 >> 1) * 2;
    BVar2 = WriteFile(hFile,local_1428,nNumberOfBytesToWrite,local_1438,(LPOVERLAPPED)0x0);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      *param_1 = DVar3;
      return param_1;
    }
    param_1[1] = param_1[1] + local_1438[0];
    if (local_1438[0] < nNumberOfBytesToWrite) {
      return param_1;
    }
  } while( true );
}


/* Address: 0x18000c080; Evidence: ev_509350898fb54c77333acc290ed00fdae92290bca48d43f269e0681ea098de7b */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000c080(DWORD *param_1,uint param_2,short *param_3,uint param_4)

{
  short sVar1;
  HANDLE hFile;
  uint uVar2;
  BOOL BVar3;
  DWORD DVar4;
  uint uVar5;
  ulonglong uVar6;
  short *psVar7;
  short *psVar8;
  undefined1 auStackY_1498 [32];
  DWORD local_1458 [4];
  short local_1448 [856];
  undefined1 local_d98 [3424];
  ulonglong local_38;
  undefined8 local_30;
  
  local_30 = 0x18000c09c;
  local_38 = DAT_180019000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_18001a680)[(longlong)(int)param_2 >> 6] + 0x28 +
           (ulonglong)(param_2 & 0x3f) * 0x48);
  param_1[0] = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  psVar7 = param_3;
  do {
    if ((short *)((ulonglong)param_4 + (longlong)param_3) <= psVar7) {
      return param_1;
    }
    psVar8 = local_1448;
    do {
      if ((short *)((ulonglong)param_4 + (longlong)param_3) <= psVar7) break;
      sVar1 = *psVar7;
      psVar7 = psVar7 + 1;
      if (sVar1 == 10) {
        *psVar8 = 0xd;
        psVar8 = psVar8 + 1;
      }
      *psVar8 = sVar1;
      psVar8 = psVar8 + 1;
    } while (psVar8 < local_1448 + 0x354);
    uVar2 = FUN_1800083e8(0xfde9,0,local_1448,(int)((longlong)psVar8 - (longlong)local_1448 >> 1));
    if (uVar2 == 0) {
LAB_18000c1bd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_18000c1bd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)psVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x18000c1f4; Evidence: ev_40a29798dcd9e41720df3a9047d0a5ab80016b5121433dc04cf323c57df0208e */

int FUN_18000c1f4(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

{
  bool bVar1;
  int iVar2;
  
  if (param_1 == 0xfffffffe) {
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
  }
  else {
    if (((int)param_1 < 0) || (DAT_18001aa80 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_18000b724(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_18000c314(param_1,param_2,param_3,param_4);
        }
        FUN_18000b74c(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_180005e20((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x18000c314; Evidence: ev_68d5d5f67b2a1b0fd2f1b59308e0b095c01a342fb7081431e27d8be85ae4a7f2 */

int FUN_18000c314(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

{
  char cVar1;
  int iVar2;
  undefined8 uVar3;
  byte bVar4;
  short sVar5;
  short sVar6;
  BOOL BVar7;
  DWORD DVar8;
  int iVar9;
  ulonglong uVar10;
  undefined7 extraout_var;
  DWORD *pDVar11;
  DWORD DVar12;
  longlong lVar13;
  ulonglong uVar14;
  undefined1 (*pauVar15) [32];
  undefined8 local_70;
  DWORD local_68;
  undefined8 local_60;
  DWORD local_50 [4];
  
  DVar12 = 0;
  uVar14 = (ulonglong)param_3;
  if (param_3 == 0) {
    return 0;
  }
  if (param_2 == (undefined1 (*) [32])0x0) {
LAB_18000c344:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_180005e20((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_18001a680)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_18000c344;
  if ((*(byte *)((&DAT_18001a680)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_18000c860(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_18000c73c(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_18001a680)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_18000c4fc:
    if (-1 < *(char *)((&DAT_18001a680)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_18001a680)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_18000c5b1;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_18000be5c((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_18000c080((DWORD *)&local_70,param_1,(short *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_18000c5b1;
      pDVar11 = FUN_18000bf64((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_180005a90(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_18001a680)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_18000c4fc;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_18001a680)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_18000c4fc;
    if (cVar1 != '\0') {
      if ((cVar1 == '\x01') || (uVar3 = local_60, cVar1 == '\x02')) {
        local_70 = 0;
        uVar3 = local_70;
        if (param_2 < (undefined1 (*) [32])(*param_2 + uVar14)) {
          local_70._4_4_ = 0;
          pauVar15 = param_2;
          iVar9 = local_70._4_4_;
          do {
            sVar6 = *(short *)*pauVar15;
            sVar5 = FUN_18000c918(sVar6);
            if (sVar5 != sVar6) {
LAB_18000c4c4:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_18000c918(0xd);
              if (sVar6 != 0xd) goto LAB_18000c4c4;
              local_70 = CONCAT44(iVar9 + 3,(DWORD)local_70);
              DVar12 = DVar12 + 1;
              iVar2 = iVar9 + 3;
            }
            iVar9 = iVar2;
            pauVar15 = (undefined1 (*) [32])(*pauVar15 + 2);
            uVar3 = local_70;
          } while (pauVar15 < (undefined1 (*) [32])(*param_2 + uVar14));
        }
      }
      goto LAB_18000c5b1;
    }
    pDVar11 = FUN_18000b9c8((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_18000c5b1:
  local_60 = uVar3;
  iVar9 = (int)((ulonglong)local_60 >> 0x20);
  if (iVar9 != 0) {
    return iVar9 - DVar12;
  }
  if ((uint)local_60 != 0) {
    if ((uint)local_60 == 5) {
      *(undefined1 *)(param_4 + 6) = 1;
      *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
      *(undefined1 *)(param_4 + 7) = 1;
      *(undefined4 *)((longlong)param_4 + 0x34) = 5;
      return -1;
    }
    FUN_180006038((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_18001a680)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x18000c644; Evidence: ev_b4b77322e1f1b5a33dfa6d77002599485c72c024b31077a581b23dcb784c1095 */

int FUN_18000c644(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_18001aab8; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_18001aac0 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18000ca7c(*(int **)(DAT_18001aac0 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001aac0 + lVar4 * 8) + 0x30));
      FUN_180006a30(*(LPVOID *)(DAT_18001aac0 + lVar4 * 8));
      *(undefined8 *)(DAT_18001aac0 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x18000c6f8; Evidence: ev_880f248a84bfe29a757a35f3c78f630521420db9308f72ab8083867e5912c514 */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_180006a30((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x18000c73c; Evidence: ev_8e5ab71bb4d7152e7c7fdb27c78e08cab4ce0924c1ad6b90a51508919fcbe45c */

byte FUN_18000c73c(uint param_1)

{
  undefined4 *puVar1;
  
  if (param_1 == 0xfffffffe) {
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) {
      return *(byte *)((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    puVar1 = (undefined4 *)FUN_180006080();
    *puVar1 = 9;
    FUN_180005ed8();
  }
  return 0;
}


/* Address: 0x18000c79c; Evidence: ev_5d582d807d9a4a419930cf4c204553f683aac3be1507ca94860ce116818d99bf */

undefined8 FUN_18000c79c(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x18000c7a4; Evidence: ev_e45b2f385c84519550c8deac61ca973666e5348f65ff99c8702da4cbaabd502a */

undefined8 FUN_18000c7a4(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x18000c7c0; Evidence: ev_4a3a11e7f9d2554c503ca40be20c99f3d49401ae2cf47052a8f187e8755258a7 */

int FUN_18000c7c0(ushort *param_1,ushort *param_2,longlong param_3)

{
  ushort uVar1;
  ushort uVar2;
  uint uVar3;
  uint uVar4;
  
  if (param_3 != 0) {
    do {
      uVar1 = *param_1;
      uVar3 = (uint)uVar1;
      param_1 = param_1 + 1;
      uVar2 = *param_2;
      param_2 = param_2 + 1;
      uVar4 = (uint)uVar2;
      if ((uint)uVar1 != (uint)uVar2) {
        uVar3 = uVar1 + 0x20;
        if (0x19 < uVar1 - 0x41) {
          uVar3 = (uint)uVar1;
        }
        uVar4 = uVar2 + 0x20;
        if (0x19 < uVar2 - 0x41) {
          uVar4 = (uint)uVar2;
        }
      }
    } while (((uVar3 - uVar4 == 0) && (uVar3 != 0)) && (param_3 = param_3 + -1, param_3 != 0));
    return uVar3 - uVar4;
  }
  return 0;
}


/* Address: 0x18000c828; Evidence: ev_c250691aa4e1d00306df43350ba04c2ff69f143819e7e62d37397563bf6f9d49 */

void FUN_18000c828(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x18000c840; Evidence: ev_25286f0dfa32d8c9a23d189248bcb09a9ec3a01932ff11327edc4261ccc3e1e1 */

/* Library Function - Single Match
    __strncnt
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

size_t __cdecl __strncnt(char *_String,size_t _Cnt)

{
  char cVar1;
  size_t sVar2;
  
  sVar2 = 0;
  cVar1 = *_String;
  while ((cVar1 != '\0' && (sVar2 != _Cnt))) {
    sVar2 = sVar2 + 1;
    cVar1 = _String[sVar2];
  }
  return sVar2;
}


/* Address: 0x18000c858; Evidence: ev_c096532909ccc96cce9272fba607a5d3a39645f89a78da87e435e6240d7eebdc */

undefined4 FUN_18000c858(void)

{
  return DAT_18001aaf4;
}


/* Address: 0x18000c860; Evidence: ev_d1eb158b93a983aa32917ec132b40ca2ccdc923c6007e0124c33fb91dbcc2153 */

longlong FUN_18000c860(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_18000b830(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_180006038(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x18000c910; Evidence: ev_52cd4f186e19e2240b32743cb626043c47074f40331f634ed0385173efa6f080 */

longlong thunk_FUN_18000c860(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_18000b830(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_180006038(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x18000c918; Evidence: ev_5d093b8d7816f3bdfef2303b82d3baf0a99285f7c8649201fbbb47c0deec03f7 */

undefined2 FUN_18000c918(undefined2 param_1)

{
  bool bVar1;
  BOOL BVar2;
  undefined7 extraout_var;
  undefined2 local_res8 [4];
  DWORD local_res10 [6];
  
  local_res8[0] = param_1;
  bVar1 = __dcrt_lowio_ensure_console_output_initialized();
  if ((int)CONCAT71(extraout_var,bVar1) != 0) {
    local_res10[0] = 0;
    BVar2 = __dcrt_write_console(local_res8,1,local_res10);
    if (BVar2 != 0) {
      return local_res8[0];
    }
  }
  return 0xffff;
}


/* Address: 0x18000c958; Evidence: ev_7edaf7c53a00bd7f6c5d742af0e48ecf78e75ad2bcbe64401f2399bf2fd3624c */

ulonglong FUN_18000c958(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005e20((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_1800097ac((longlong)param_1);
      uVar1 = FUN_18000c9d4(param_1,param_2);
      FUN_1800097b8((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000ce68((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x18000c9d4; Evidence: ev_83579d3a75b9dabffbf970afe1eaaa5d256d237ed41378391ddc057cc93f9752 */

ulonglong FUN_18000c9d4(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005e20((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_1800094c8(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_180009da0((longlong)param_1);
      uVar3 = FUN_18000ccd4(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_180006a30(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_18000ce68((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x18000ca7c; Evidence: ev_f09e6b137ceac25c491d9cf13a5ef4ba790774d58e304fb5ba68368911ba9af0 */

ulonglong FUN_18000ca7c(int *param_1)

{
  ulonglong uVar1;
  longlong lVar2;
  longlong local_48 [2];
  undefined1 local_38;
  undefined *local_30;
  undefined *puStack_28;
  char local_20;
  undefined4 local_1c;
  char local_18;
  undefined4 local_14;
  char local_10;
  
  local_48[0] = 0;
  local_20 = DAT_18001a304 == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_1800191f8;
    puStack_28 = PTR_DAT_180019200;
  }
  uVar1 = FUN_18000c958(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_180005a20(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_180005a20(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000cb20; Evidence: ev_7960140d2ca02d189788612e9b90873d33917aef731b3f4ef2540a1df4c9937a */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_180019a00 == (HANDLE)0xfffffffffffffffe) {
    DAT_180019a00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_180019a00 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x18000cb80; Evidence: ev_b27be31595beb60a2139c7f4ff9372046e47886d53b8696ae94e7dc481f24566 */

void FUN_18000cb80(void)

{
  if (DAT_180019a00 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_180019a00);
  }
  return;
}


/* Address: 0x18000cb9c; Evidence: ev_4484688e7cd381b300e90651357851a6c52ecb189cae3024bf007f212766018b */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_180019a00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_180019a00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_180019a00);
      }
      DAT_180019a00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_180019a00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x18000cc5c; Evidence: ev_ef0f1510b47b67e451f664242891b59da51fec5de493e360cecec84d9555bdcb */

ulonglong FUN_18000cc5c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18000b724(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_18001a680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18000cd98(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18000b74c(*param_4);
  return uVar3;
}


/* Address: 0x18000ccd4; Evidence: ev_69ae581e5885e5a3afb85031018f02817fc861675f8f37a87d9e1da5580cc646 */

ulonglong FUN_18000ccd4(uint param_1,longlong *param_2)

{
  ulonglong uVar1;
  uint local_res8 [4];
  undefined1 local_res18 [8];
  uint local_res20 [2];
  uint local_28 [2];
  uint *local_20;
  longlong *local_18;
  
  if (param_1 == 0xfffffffe) {
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
  }
  else {
    local_res8[0] = param_1;
    if (((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) &&
       ((*(byte *)((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_18000cc5c(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_180005e20((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x18000cd98; Evidence: ev_e6371d01641a5069fa80b48df3531bd1a4c193e182008dabe9546e7c8a8f5762 */

undefined8 FUN_18000cd98(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000b830(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001a680 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001a680 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000b830(2);
      lVar4 = FUN_18000b830(1);
      if (lVar4 == lVar3) goto LAB_18000cdba;
    }
    hObject = (HANDLE)FUN_18000b830(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000ce18;
    }
  }
LAB_18000cdba:
  DVar2 = 0;
LAB_18000ce18:
  FUN_18000b774(param_1);
  *(undefined1 *)
   ((&DAT_18001a680)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180006038(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x18000ce68; Evidence: ev_3dd913ef15c5a72f21b024d07866289e4618be6e86bf4f2487b4192ec26314f8 */

undefined4 FUN_18000ce68(undefined8 *param_1)

{
  undefined4 uVar1;
  
  *(undefined4 *)(param_1 + 3) = 0xffffffff;
  *param_1 = 0;
  param_1[1] = 0;
  *(undefined4 *)(param_1 + 2) = 0;
  *(undefined8 *)((longlong)param_1 + 0x1c) = 0;
  param_1[5] = 0;
  LOCK();
  uVar1 = *(undefined4 *)((longlong)param_1 + 0x14);
  *(undefined4 *)((longlong)param_1 + 0x14) = 0;
  UNLOCK();
  return uVar1;
}


/* Address: 0x18000ce90; Evidence: ev_e69a001c8e4c223791a05c8a863953c0be29bb07920366e69f4cb45af5b71260 */

/* WARNING: Removing unreachable block (ram,0x00018000cf10) */
/* WARNING: Removing unreachable block (ram,0x00018000cf02) */
/* WARNING: Removing unreachable block (ram,0x00018000cea7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000ce90(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_18001aaf8 = 0;
  DAT_18001aafc = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_18001aaf8 = 1;
      DAT_18001aafc = 1;
    }
    else {
      _DAT_18001aaf8 = 0;
    }
  }
  if ((_DAT_18001aaf8 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_18001aafc = 3;
      _DAT_18001aaf8 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x18000cf44; Evidence: ev_c19f139d1bda78aff7e2b5a107b10efebd339b05c0352cebb2ce2888e19a2213 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000cfcb) */
/* WARNING: Removing unreachable block (ram,0x00018000cfa8) */

void FUN_18000cf44(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000d0ec();
  if (bVar1) {
    (*DAT_18001ab08)(&DAT_18001ab18);
  }
  else {
    do {
    } while (DAT_18001ab18 != 0);
    LOCK();
    DAT_18001ab18 = 1;
    UNLOCK();
  }
  FUN_18000d2c0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000d2c0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000d0ec();
  if (bVar1) {
    (*DAT_18001ab10)(&DAT_18001ab18);
  }
  else {
    DAT_18001ab18 = 0;
  }
  return;
}


/* Address: 0x18000d030; Evidence: ev_a4728d639345159465d3ed230ee80b94c29d1677b368ad6b26257cb3574a6f38 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d053) */
/* WARNING: Removing unreachable block (ram,0x00018000d079) */
/* WARNING: Removing unreachable block (ram,0x00018000d085) */
/* WARNING: Removing unreachable block (ram,0x00018000d061) */
/* WARNING: Removing unreachable block (ram,0x00018000d090) */
/* WARNING: Removing unreachable block (ram,0x00018000d0a2) */
/* WARNING: Removing unreachable block (ram,0x00018000d0b6) */
/* WARNING: Removing unreachable block (ram,0x00018000d0bf) */
/* WARNING: Removing unreachable block (ram,0x00018000da50) */
/* WARNING: Removing unreachable block (ram,0x00018000d0d9) */

void FUN_18000d030(void)

{
  return;
}


/* Address: 0x18000d0ec; Evidence: ev_ab7047306426e1f527f12b7002b0cbc300f10b2bccc53493fe721c572db1ca08 */

bool FUN_18000d0ec(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_18001ab00 != (HMODULE)0x1) {
    if (DAT_18001ab00 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_18001ab08 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_18001ab10;
    }
    DAT_18001ab10 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_18001ab00 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_18001ab00;
      pHVar1 = DAT_18001ab00;
    }
    DAT_18001ab00 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x18000d18c; Evidence: ev_9ef7d2d59d108ce33367fc128bc5f4f152c157f6789d8daef183fd9f831bb513 */

/* Library Function - Single Match
    void __cdecl DloadMakePermanentImageCommit(void * __ptr64,unsigned __int64)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __cdecl DloadMakePermanentImageCommit(void *param_1,__uint64 param_2)

{
  code *pcVar1;
  SIZE_T SVar2;
  ulonglong uVar3;
  uint uVar4;
  ulonglong uVar5;
  undefined1 *puVar6;
  undefined4 *puVar7;
  ulonglong uVar8;
  undefined1 auStack_88 [8];
  undefined1 auStack_80 [24];
  _MEMORY_BASIC_INFORMATION local_68 [2];
  
  puVar6 = auStack_88;
  SVar2 = VirtualQuery(param_1,local_68,0x30);
  if (SVar2 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
    puVar6 = auStack_80;
  }
  if ((puVar6[0x44] & 0x44) != 0) {
    *(undefined8 *)(puVar6 + -8) = 0x18000d1cc;
    GetSystemInfo((LPSYSTEM_INFO)(puVar6 + 0x50));
    uVar8 = (ulonglong)*(uint *)(puVar6 + 0x54);
    puVar7 = (undefined4 *)(-uVar8 & (ulonglong)param_1);
    uVar4 = *(uint *)(puVar6 + 0x54) - 1;
    uVar5 = (((ulonglong)((uVar4 & (uint)param_2) + (uVar4 & (uint)param_1)) - 1) + uVar8) / uVar8 +
            param_2 / uVar8;
    uVar3 = uVar5 & 0xffffffff;
    if ((int)uVar5 != 0) {
      do {
        LOCK();
        *puVar7 = *puVar7;
        UNLOCK();
        puVar7 = (undefined4 *)((longlong)puVar7 + uVar8);
        uVar3 = uVar3 - 1;
      } while (uVar3 != 0);
    }
  }
  return;
}


/* Address: 0x18000d224; Evidence: ev_e6a7a6575250ae878c43145ccc7c23692c0b7308cac791b36bf222d7b429873d */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_18000d224(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000218;
  while ((0x1c000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x1c001))) {
    uVar2 = uVar2 + 1;
    pIVar1 = pIVar1 + 1;
    if (7 < uVar2) {
      return 0;
    }
  }
  *param_1 = (pIVar1->Misc).PhysicalAddress;
  *param_2 = pIVar1->Characteristics;
  return (ulonglong)(uint)pIVar1->VirtualAddress + 0x180000000;
}


/* Address: 0x18000d2c0; Evidence: ev_1311f3b717240fd0bb13dc397c5f31f5c9d4c35ecc6639bfd78773b866412cc6 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_18000d2c0(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

{
  code *pcVar1;
  undefined1 *puVar2;
  BOOL BVar3;
  void *lpAddress;
  void *pvVar4;
  undefined1 *puVar5;
  undefined1 *puVar6;
  undefined8 uStack_50;
  undefined1 auStack_48 [8];
  undefined1 auStack_40 [24];
  dword local_28;
  SectionFlags local_24 [3];
  
  puVar6 = auStack_48;
  lpAddress = (void *)FUN_18000d224(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_18001ab28 == 0) {
    DAT_18001ab28 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x18000d33a;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_18000d34b;
LAB_18000d37b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_18000d34b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18000d37b;
    }
    puVar6 = puVar2;
    pvVar4 = (void *)((ulonglong)*(uint *)(puVar6 + 0x20) + (longlong)lpAddress);
    if ((((pvVar4 <= lpAddress) || ((void *)((longlong)param_1 + param_2) <= param_1)) ||
        (param_1 < lpAddress)) ||
       (lpAddress = param_1, pvVar4 < (void *)((longlong)param_1 + param_2))) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = puVar6 + 8;
      lpAddress = param_1;
    }
  }
  *(undefined8 *)(puVar6 + -8) = 0x18000d394;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x18000d3b8; Evidence: ev_84ff32a3c99e50d23c09db8af930de0342833a8b4698fdc793af48b3fda6e32f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d3d9) */
/* WARNING: Removing unreachable block (ram,0x00018000d3fa) */
/* WARNING: Removing unreachable block (ram,0x00018000d406) */
/* WARNING: Removing unreachable block (ram,0x00018000d409) */
/* WARNING: Removing unreachable block (ram,0x00018000d3e2) */
/* WARNING: Removing unreachable block (ram,0x00018000d414) */
/* WARNING: Removing unreachable block (ram,0x00018000d41d) */
/* WARNING: Removing unreachable block (ram,0x00018000d432) */
/* WARNING: Removing unreachable block (ram,0x00018000d451) */
/* WARNING: Removing unreachable block (ram,0x00018000d43b) */

void FUN_18000d3b8(void)

{
  return;
}


/* Address: 0x18000d470; Evidence: ev_534129b289e0862fb137d01305dc90b5613d83bbe23cedc096c966c419e7f149 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d5e4) */
/* WARNING: Removing unreachable block (ram,0x00018000d6be) */

HMODULE FUN_18000d470(uint *param_1,void *param_2)

{
  uint uVar1;
  uint uVar2;
  HMODULE hLibModule;
  HMODULE pHVar3;
  longlong lVar4;
  ulonglong uVar5;
  longlong *plVar6;
  undefined4 *local_res8;
  void *local_88;
  HMODULE local_80;
  undefined4 local_78 [2];
  uint *local_70;
  void *local_68;
  LPCSTR local_60;
  ulonglong local_58;
  char *pcStack_50;
  HMODULE local_48;
  HMODULE local_40;
  DWORD local_38;
  
  FUN_18000d030();
  local_60 = (LPCSTR)((ulonglong)param_1[1] + 0x180000000);
  plVar6 = (longlong *)((ulonglong)param_1[2] + 0x180000000);
  uVar1 = param_1[5];
  lVar4 = (ulonglong)param_1[4] + 0x180000000;
  local_res8 = (undefined4 *)CONCAT44(local_res8._4_4_,param_1[7]);
  local_78[0] = 0x48;
  local_48 = (HMODULE)0x0;
  local_40 = (HMODULE)0x0;
  local_38 = 0;
  local_58 = 0;
  pcStack_50 = (char *)0x0;
  local_70 = param_1;
  local_68 = param_2;
  if ((*param_1 & 1) == 0) {
    local_res8 = local_78;
    FUN_18000d3b8();
    RaiseException(0xc06d0057,0,1,(ULONG_PTR *)&local_res8);
    pHVar3 = (HMODULE)0x0;
  }
  else {
    hLibModule = (HMODULE)*plVar6;
    uVar5 = (longlong)((longlong)param_2 - ((ulonglong)param_1[3] + 0x180000000)) >> 3 & 0xffffffff;
    uVar2 = -(int)((longlong)*(undefined8 *)(lVar4 + uVar5 * 8) >> 0x3f);
    local_58 = (ulonglong)uVar2 ^ 1;
    if (uVar2 == 1) {
      pcStack_50 = (char *)(ulonglong)*(ushort *)(lVar4 + uVar5 * 8);
    }
    else {
      pcStack_50 = IMAGE_DOS_HEADER_180000000.e_magic + (ulonglong)*(uint *)(lVar4 + uVar5 * 8) + 2;
    }
    pHVar3 = FUN_180001000(0,(longlong)local_78);
    if (pHVar3 == (HMODULE)0x0) {
      if (hLibModule == (HMODULE)0x0) {
        hLibModule = FUN_180001000(1,(longlong)local_78);
        if ((hLibModule == (HMODULE)0x0) &&
           (hLibModule = LoadLibraryExA(local_60,(HANDLE)0x0,0), hLibModule == (HMODULE)0x0)) {
          local_38 = GetLastError();
          local_res8 = local_78;
          FUN_18000d3b8();
          RaiseException(0xc06d007e,0,1,(ULONG_PTR *)&local_res8);
          return local_40;
        }
        LOCK();
        pHVar3 = (HMODULE)*plVar6;
        *plVar6 = (longlong)hLibModule;
        UNLOCK();
        if (pHVar3 == hLibModule) {
          FreeLibrary(hLibModule);
        }
      }
      local_48 = hLibModule;
      pHVar3 = FUN_180001000(2,(longlong)local_78);
      if (((pHVar3 == (HMODULE)0x0) &&
          ((((param_1[5] == 0 || (param_1[7] == 0)) ||
            (lVar4 = (longlong)hLibModule[0xf].unused,
            *(int *)((longlong)&hLibModule->unused + lVar4) != 0x4550)) ||
           (((*(int *)((longlong)&hLibModule[2].unused + lVar4) != (int)local_res8 ||
             (hLibModule != *(HMODULE *)((longlong)&hLibModule[0xc].unused + lVar4))) ||
            (pHVar3 = *(HMODULE *)((ulonglong)uVar1 + 0x180000000 + uVar5 * 8),
            pHVar3 == (HMODULE)0x0)))))) &&
         (pHVar3 = (HMODULE)GetProcAddress(hLibModule,pcStack_50), pHVar3 == (HMODULE)0x0)) {
        local_38 = GetLastError();
        local_res8 = local_78;
        FUN_18000d3b8();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_18000d030();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_18000cf44(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_18000d3b8();
  }
  return pHVar3;
}


/* Address: 0x18000d770; Evidence: ev_a61058f05115bb42cfb5fc5ec165426a3ebd38b67e2f711b9a2df044aeeb2e09 */

/* Library Function - Single Match
    _FindPESection
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

PIMAGE_SECTION_HEADER __cdecl _FindPESection(PBYTE pImageBase,DWORD_PTR rva)

{
  int iVar1;
  PIMAGE_SECTION_HEADER p_Var2;
  uint uVar3;
  
  iVar1 = *(int *)(pImageBase + 0x3c);
  uVar3 = 0;
  p_Var2 = (PIMAGE_SECTION_HEADER)
           (pImageBase +
           (ulonglong)*(ushort *)(pImageBase + (longlong)iVar1 + 0x14) + 0x18 + (longlong)iVar1);
  if (*(ushort *)(pImageBase + (longlong)iVar1 + 6) != 0) {
    do {
      if ((p_Var2->VirtualAddress <= rva) &&
         (rva < (p_Var2->Misc).PhysicalAddress + p_Var2->VirtualAddress)) {
        return p_Var2;
      }
      uVar3 = uVar3 + 1;
      p_Var2 = p_Var2 + 1;
    } while (uVar3 < *(ushort *)(pImageBase + (longlong)iVar1 + 6));
  }
  return (PIMAGE_SECTION_HEADER)0x0;
}


/* Address: 0x18000d7c0; Evidence: ev_4a947c3420841db0fa829d4f262da58f76b06484984d35e87324a5c27e58e60e */

ulonglong FUN_18000d7c0(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_18000d810((short *)&IMAGE_DOS_HEADER_180000000);
  uVar2 = CONCAT71(extraout_var,bVar1);
  if ((int)uVar2 != 0) {
    p_Var3 = _FindPESection((PBYTE)&IMAGE_DOS_HEADER_180000000,param_1 - 0x180000000);
    uVar2 = 0;
    if (p_Var3 != (PIMAGE_SECTION_HEADER)0x0) {
      uVar2 = (ulonglong)(~p_Var3->Characteristics >> 0x1f);
    }
  }
  return uVar2;
}


/* Address: 0x18000d810; Evidence: ev_5219291700d26c6e740920dab38da27e2259dd1bb4bb7797e2a26472cdbf075f */

bool FUN_18000d810(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x18000d840; Evidence: ev_0efffb853963ff9d3be2c7943c54c63df8b27824ed7fc9d8d823a9e7d1b794e8 */

undefined8 * FUN_18000d840(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_180006a30(param_1);
  }
  return param_1;
}


/* Address: 0x18000d86c; Evidence: ev_bfb3301eccbb66e4fb2d1d528c09c0aeec9e7a3e0097fbfd49014dc645491dc4 */

undefined8 FUN_18000d86c(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_18000d88c(param_2,param_4);
  return 1;
}


/* Address: 0x18000d88c; Evidence: ev_e064dee149a8f408797cf275d6a93cf75bebc8c96187b8639d2def6c7992bf40 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000d88c(undefined8 param_1,longlong param_2)

{
  ulonglong uVar1;
  ulonglong uVar2;
  
  uVar2 = (ulonglong)*(uint *)(*(longlong *)(param_2 + 0x10) + 8);
  uVar1 = *(ulonglong *)(param_2 + 8);
  if ((*(byte *)(uVar2 + 3 + uVar1) & 0xf) != 0) {
    uVar1 = (ulonglong)*(byte *)(uVar2 + 3 + uVar1) & 0xfffffff0;
  }
  return uVar1;
}


/* Address: 0x18000d8ec; Evidence: ev_1e2241a9ba1fa1eaf3aa3f681e9a456c8be7e89d59ac0044c88baa24c47d46f1 */

void thunk_FUN_180006a30(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001a678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180005f40(DVar2);
    puVar4 = (uint *)FUN_180006080();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x18000d8f4; Evidence: ev_c9172259c6e3c129114b5b41028a4cbfdfb302b4973bce60dbed4e44200dc765 */

void FUN_18000d8f4(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18000d88c(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x18000d990; Evidence: ev_51d8bc4cb8549501cb3ef17f1f85f1c9adc20c37da31d1cabf7e7a10a90b79f4 */

/* WARNING: This is an inlined function */
/* Library Function - Single Match
    __chkstk
   
   Libraries: Visual Studio 2005, Visual Studio 2008, Visual Studio 2010, Visual Studio 2012 */

void __chkstk(void)

{
  undefined1 *in_RAX;
  undefined1 *puVar1;
  undefined1 *puVar2;
  undefined1 local_res8 [32];
  
  puVar1 = local_res8 + -(longlong)in_RAX;
  if (local_res8 < in_RAX) {
    puVar1 = (undefined1 *)0x0;
  }
  if (puVar1 < StackLimit) {
    puVar2 = StackLimit;
    do {
      puVar2 = puVar2 + -0x1000;
      *puVar2 = 0;
    } while ((undefined1 *)((ulonglong)puVar1 & 0xfffffffffffff000) != puVar2);
  }
  return;
}


/* Address: 0x18000d9e0; Evidence: ev_27117ee574d7bc8042ed547dcdb7a9621bca21ffd40161db2afc762ec6504796 */

void thunk_FUN_180006a30(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001a678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180005f40(DVar2);
    puVar4 = (uint *)FUN_180006080();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x18000d9e8; Evidence: ev_74ecd18eed3fac7bf7469f13d4f8891ad5626faf1227d877fb1060df0896f5de */

void FUN_18000d9e8(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180002000(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180002538();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180002538();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_1800058fc();
  }
  return;
}


/* Address: 0x18000da50; Evidence: ev_565174b2445b3a5a27e118eeca783fb74985f0009da7e00c1da1be0aa70a1543 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000da70; Evidence: ev_6689a30c0b93ccd0a4e592b1d4ab5de642b6c2f9d84ff22f0b0f48ca14653731 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000da90; Evidence: ev_4e8d45c250876d94db3c94e9f2f3530cbf6b96ea3d26daafc11a9e164b34e2ef */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000da50. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000dac0; Evidence: ev_e94761dc6accdc04b4b49d59cc846bbc92c5f115b0ebdeeb228988ca9a4b11f0 */

undefined8 FUN_18000dac0(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x18000dad0; Evidence: ev_21e6e6acb13d47d02fc7fd61ed0f6059872a6b6db2df08ab7710dd14300cca1b */

undefined1 (*) [32] FUN_18000dad0(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

{
  undefined1 auVar1 [32];
  undefined1 (*pauVar2) [32];
  undefined1 (*pauVar3) [32];
  undefined1 (*pauVar4) [16];
  ulonglong uVar5;
  ulonglong uVar6;
  undefined1 uVar7;
  longlong lVar10;
  undefined1 auVar11 [16];
  undefined1 auVar12 [32];
  undefined2 uVar8;
  undefined4 uVar9;
  
  lVar10 = (ulonglong)param_2 * 0x101010101010101;
  if (param_3 < 0x10) {
    uVar5 = param_3 & 0xf;
    uVar7 = (undefined1)lVar10;
    uVar8 = (undefined2)lVar10;
    uVar9 = (undefined4)lVar10;
    switch(uVar5) {
    case 0:
      return param_1;
    case 8:
      *(longlong *)(param_1[-1] + uVar5 + 0x18) = lVar10;
      return param_1;
    case 9:
      *(longlong *)(param_1[-1] + uVar5 + 0x17) = lVar10;
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    case 10:
      *(longlong *)(param_1[-1] + uVar5 + 0x16) = lVar10;
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1e) = uVar8;
      return param_1;
    case 0xb:
      *(longlong *)(param_1[-1] + uVar5 + 0x15) = lVar10;
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1d) = uVar8;
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    case 0xc:
      *(longlong *)(param_1[-1] + uVar5 + 0x14) = lVar10;
    case 4:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x1c) = uVar9;
      return param_1;
    case 0xd:
      *(longlong *)(param_1[-1] + uVar5 + 0x13) = lVar10;
    case 5:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x1b) = uVar9;
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    case 0xe:
      *(longlong *)(param_1[-1] + uVar5 + 0x12) = lVar10;
    case 6:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x1a) = uVar9;
    case 2:
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1e) = uVar8;
      return param_1;
    case 0xf:
      *(longlong *)(param_1[-1] + uVar5 + 0x11) = lVar10;
    case 7:
      *(undefined4 *)(param_1[-1] + uVar5 + 0x19) = uVar9;
    case 3:
      *(undefined2 *)(param_1[-1] + uVar5 + 0x1d) = uVar8;
    case 1:
      param_1[-1][uVar5 + 0x1f] = uVar7;
      return param_1;
    }
  }
  auVar11._8_8_ = lVar10;
  auVar11._0_8_ = lVar10;
  if (0x20 < param_3) {
    pauVar2 = param_1;
    if (DAT_180019058 < 3) {
      if ((param_3 <= DAT_180019060) || (((byte)DAT_18001a080 & 2) == 0)) {
        lVar10 = ((ulonglong)param_1 & 0xf) - 0x10;
        pauVar4 = (undefined1 (*) [16])((longlong)param_1 - lVar10);
        uVar5 = param_3 + lVar10;
        if (0x80 < uVar5) {
          do {
            *pauVar4 = auVar11;
            pauVar4[1] = auVar11;
            pauVar4[2] = auVar11;
            pauVar4[3] = auVar11;
            pauVar4[4] = auVar11;
            pauVar4[5] = auVar11;
            pauVar4[6] = auVar11;
            pauVar4[7] = auVar11;
            pauVar4 = pauVar4 + 8;
            uVar5 = uVar5 - 0x80;
          } while (0x7f < uVar5);
        }
        uVar6 = uVar5 + 0xf & 0xfffffffffffffff0;
        switch(uVar5 + 0xf >> 4 & 0xf) {
        case 8:
          *(undefined1 (*) [16])(pauVar4[-8] + uVar6) = auVar11;
        case 7:
          *(undefined1 (*) [16])(pauVar4[-7] + uVar6) = auVar11;
        case 6:
          *(undefined1 (*) [16])(pauVar4[-6] + uVar6) = auVar11;
        case 5:
          *(undefined1 (*) [16])(pauVar4[-5] + uVar6) = auVar11;
        case 4:
          *(undefined1 (*) [16])(pauVar4[-4] + uVar6) = auVar11;
        case 3:
          *(undefined1 (*) [16])(pauVar4[-3] + uVar6) = auVar11;
        case 2:
          *(undefined1 (*) [16])(pauVar4[-2] + uVar6) = auVar11;
        case 1:
          *(undefined1 (*) [16])(pauVar4[-1] + uVar5) = auVar11;
        default:
          *(undefined1 (*) [16])*param_1 = auVar11;
          return param_1;
        }
      }
    }
    else if (((param_3 <= DAT_180019060) || (DAT_180019068 < param_3)) ||
            (((byte)DAT_18001a080 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_180019068 < uVar5) {
          do {
            uVar6 = uVar5;
            pauVar3 = pauVar2;
            auVar1 = vmovntdq_avx(auVar12);
            *pauVar3 = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[1] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[2] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[3] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[4] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[5] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[6] = auVar1;
            auVar1 = vmovntdq_avx(auVar12);
            pauVar3[7] = auVar1;
            pauVar2 = pauVar3 + 8;
            uVar5 = uVar6 - 0x100;
          } while (0xff < uVar6 - 0x100);
          uVar5 = uVar6 - 0xe1 & 0xffffffffffffffe0;
          switch(uVar6 - 0xe1 >> 5 & 0xf) {
          case 8:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(*pauVar3 + uVar5) = auVar1;
          case 7:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[1] + uVar5) = auVar1;
          case 6:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[2] + uVar5) = auVar1;
          case 5:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[3] + uVar5) = auVar1;
          case 4:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[4] + uVar5) = auVar1;
          case 3:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[5] + uVar5) = auVar1;
          case 2:
            auVar1 = vmovntdq_avx(auVar12);
            *(undefined1 (*) [32])(pauVar3[6] + uVar5) = auVar1;
          case 1:
            *(undefined1 (*) [32])(pauVar3[-1] + uVar6) = auVar12;
          default:
            *param_1 = auVar12;
            return param_1;
          }
        }
        do {
          *pauVar2 = auVar12;
          pauVar2[1] = auVar12;
          pauVar2[2] = auVar12;
          pauVar2[3] = auVar12;
          pauVar2[4] = auVar12;
          pauVar2[5] = auVar12;
          pauVar2[6] = auVar12;
          pauVar2[7] = auVar12;
          pauVar2 = pauVar2 + 8;
          uVar5 = uVar5 - 0x100;
        } while (0xff < uVar5);
      }
      uVar6 = uVar5 + 0x1f & 0xffffffffffffffe0;
      switch(uVar5 + 0x1f >> 5 & 0xf) {
      case 8:
        *(undefined1 (*) [32])(pauVar2[-8] + uVar6) = auVar12;
      case 7:
        *(undefined1 (*) [32])(pauVar2[-7] + uVar6) = auVar12;
      case 6:
        *(undefined1 (*) [32])(pauVar2[-6] + uVar6) = auVar12;
      case 5:
        *(undefined1 (*) [32])(pauVar2[-5] + uVar6) = auVar12;
      case 4:
        *(undefined1 (*) [32])(pauVar2[-4] + uVar6) = auVar12;
      case 3:
        *(undefined1 (*) [32])(pauVar2[-3] + uVar6) = auVar12;
      case 2:
        *(undefined1 (*) [32])(pauVar2[-2] + uVar6) = auVar12;
      case 1:
        *(undefined1 (*) [32])(pauVar2[-1] + uVar5) = auVar12;
      default:
        *param_1 = auVar12;
        return param_1;
      }
    }
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*pauVar2)[0] = param_2;
      pauVar2 = (undefined1 (*) [32])(*pauVar2 + 1);
    }
    return param_1;
  }
  *(undefined1 (*) [16])*param_1 = auVar11;
  *(undefined1 (*) [16])(param_1[-1] + param_3 + 0x10) = auVar11;
  return param_1;
}


/* Address: 0x18000de80; Evidence: ev_25b5101dfac6467e5d6b795d02cb5e68ff783aab674dd36b83286cb5af200560 */

void FUN_18000de80(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x18000de90; Evidence: ev_916022feb8d25b7fa18e6ea75071638ac44cbd5e55c15460cd7067805825f8c0 */

void FUN_18000de90(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  undefined1 auVar3 [32];
  undefined1 auVar4 [32];
  undefined1 auVar5 [32];
  undefined1 auVar6 [32];
  undefined1 uVar7;
  undefined2 uVar8;
  undefined4 uVar9;
  undefined8 uVar10;
  undefined8 uVar11;
  undefined8 uVar12;
  undefined8 uVar13;
  undefined8 uVar14;
  undefined8 uVar15;
  undefined8 uVar16;
  undefined8 uVar17;
  undefined8 uVar18;
  undefined8 uVar19;
  undefined8 uVar20;
  undefined8 uVar21;
  undefined8 uVar22;
  undefined8 uVar23;
  undefined8 uVar24;
  undefined8 uVar25;
  undefined8 uVar26;
  undefined8 uVar27;
  undefined8 uVar28;
  undefined8 uVar29;
  undefined8 uVar30;
  undefined1 (*pauVar31) [32];
  undefined1 (*pauVar32) [32];
  undefined8 *puVar33;
  undefined8 *puVar34;
  undefined1 (*pauVar35) [32];
  longlong lVar36;
  ulonglong uVar37;
  ulonglong uVar38;
  undefined8 uVar39;
  undefined8 uVar40;
  
  if (param_3 < 0x10) {
    switch(param_3 & 0xf) {
    case 0:
      return;
    case 1:
      (*param_1)[0] = (*param_2)[0];
      return;
    case 2:
      *(undefined2 *)*param_1 = *(undefined2 *)*param_2;
      return;
    case 3:
      uVar7 = (*param_2)[2];
      *(undefined2 *)*param_1 = *(undefined2 *)*param_2;
      (*param_1)[2] = uVar7;
      return;
    case 4:
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      return;
    case 5:
      uVar7 = (*param_2)[4];
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      (*param_1)[4] = uVar7;
      return;
    case 6:
      uVar8 = *(undefined2 *)(*param_2 + 4);
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      *(undefined2 *)(*param_1 + 4) = uVar8;
      return;
    case 7:
      uVar8 = *(undefined2 *)(*param_2 + 4);
      uVar7 = (*param_2)[6];
      *(undefined4 *)*param_1 = *(undefined4 *)*param_2;
      *(undefined2 *)(*param_1 + 4) = uVar8;
      (*param_1)[6] = uVar7;
      return;
    case 8:
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      return;
    case 9:
      uVar7 = (*param_2)[8];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      (*param_1)[8] = uVar7;
      return;
    case 10:
      uVar8 = *(undefined2 *)(*param_2 + 8);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined2 *)(*param_1 + 8) = uVar8;
      return;
    case 0xb:
      uVar8 = *(undefined2 *)(*param_2 + 8);
      uVar7 = (*param_2)[10];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined2 *)(*param_1 + 8) = uVar8;
      (*param_1)[10] = uVar7;
      return;
    case 0xc:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      return;
    case 0xd:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar7 = (*param_2)[0xc];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      (*param_1)[0xc] = uVar7;
      return;
    case 0xe:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar8 = *(undefined2 *)(*param_2 + 0xc);
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      *(undefined2 *)(*param_1 + 0xc) = uVar8;
      return;
    case 0xf:
      uVar9 = *(undefined4 *)(*param_2 + 8);
      uVar8 = *(undefined2 *)(*param_2 + 0xc);
      uVar7 = (*param_2)[0xe];
      *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
      *(undefined4 *)(*param_1 + 8) = uVar9;
      *(undefined2 *)(*param_1 + 0xc) = uVar8;
      (*param_1)[0xe] = uVar7;
      return;
    }
  }
  if (param_3 < 0x21) {
    uVar10 = *(undefined8 *)(*param_2 + 8);
    uVar11 = *(undefined8 *)(param_2[-1] + param_3 + 0x10);
    uVar12 = *(undefined8 *)((longlong)(param_2[-1] + param_3 + 0x10) + 8);
    *(undefined8 *)*param_1 = *(undefined8 *)*param_2;
    *(undefined8 *)(*param_1 + 8) = uVar10;
    *(undefined8 *)(param_1[-1] + param_3 + 0x10) = uVar11;
    *(undefined8 *)((longlong)(param_1[-1] + param_3 + 0x10) + 8) = uVar12;
    return;
  }
  pauVar31 = (undefined1 (*) [32])(*param_2 + param_3);
  if (param_1 <= param_2) {
    pauVar31 = param_1;
  }
  if (param_1 < pauVar31) {
    uVar10 = *(undefined8 *)*param_2;
    uVar11 = *(undefined8 *)(*param_2 + 8);
    lVar36 = (longlong)param_2 - (longlong)param_1;
    puVar33 = (undefined8 *)((longlong)param_1 + lVar36 + (param_3 - 0x10));
    uVar12 = *puVar33;
    uVar13 = puVar33[1];
    puVar34 = (undefined8 *)(param_1[-1] + param_3 + 0x10);
    uVar37 = param_3 - 0x10;
    puVar33 = puVar34;
    uVar39 = uVar12;
    uVar40 = uVar13;
    if (((ulonglong)puVar34 & 0xf) != 0) {
      puVar33 = (undefined8 *)((ulonglong)puVar34 & 0xfffffffffffffff0);
      uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
      uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
      *puVar34 = uVar12;
      *(undefined8 *)(param_1[-1] + param_3 + 0x18) = uVar13;
      uVar37 = (longlong)puVar33 - (longlong)param_1;
    }
    uVar38 = uVar37 >> 7;
    if (uVar38 != 0) {
      *puVar33 = uVar39;
      puVar33[1] = uVar40;
      puVar34 = puVar33;
      while( true ) {
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x10);
        uVar12 = puVar1[1];
        puVar33 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x20);
        uVar13 = *puVar33;
        uVar39 = puVar33[1];
        puVar33 = puVar34 + -0x10;
        puVar34[-2] = *puVar1;
        puVar34[-1] = uVar12;
        puVar34[-4] = uVar13;
        puVar34[-3] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x30);
        uVar12 = puVar1[1];
        puVar2 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x40);
        uVar13 = *puVar2;
        uVar39 = puVar2[1];
        uVar38 = uVar38 - 1;
        puVar34[-6] = *puVar1;
        puVar34[-5] = uVar12;
        puVar34[-8] = uVar13;
        puVar34[-7] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x50);
        uVar12 = puVar1[1];
        puVar2 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x60);
        uVar13 = *puVar2;
        uVar39 = puVar2[1];
        puVar34[-10] = *puVar1;
        puVar34[-9] = uVar12;
        puVar34[-0xc] = uVar13;
        puVar34[-0xb] = uVar39;
        puVar1 = (undefined8 *)((longlong)puVar34 + lVar36 + -0x70);
        uVar12 = *puVar1;
        uVar13 = puVar1[1];
        uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
        uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
        if (uVar38 == 0) break;
        puVar34[-0xe] = uVar12;
        puVar34[-0xd] = uVar13;
        *puVar33 = uVar39;
        puVar34[-0xf] = uVar40;
        puVar34 = puVar33;
      }
      puVar34[-0xe] = uVar12;
      puVar34[-0xd] = uVar13;
      uVar37 = uVar37 & 0x7f;
    }
    for (uVar38 = uVar37 >> 4; uVar38 != 0; uVar38 = uVar38 - 1) {
      *puVar33 = uVar39;
      puVar33[1] = uVar40;
      puVar33 = puVar33 + -2;
      uVar39 = *(undefined8 *)((longlong)puVar33 + lVar36);
      uVar40 = ((undefined8 *)((longlong)puVar33 + lVar36))[1];
    }
    if ((uVar37 & 0xf) != 0) {
      *(undefined8 *)*param_1 = uVar10;
      *(undefined8 *)(*param_1 + 8) = uVar11;
    }
    *puVar33 = uVar39;
    puVar33[1] = uVar40;
    return;
  }
  if (DAT_180019058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_18001a080 & 2) == 0)) {
      uVar10 = *(undefined8 *)*param_2;
      uVar11 = *(undefined8 *)(*param_2 + 8);
      uVar12 = *(undefined8 *)(param_2[-1] + param_3 + 0x10);
      uVar13 = *(undefined8 *)((longlong)(param_2[-1] + param_3 + 0x10) + 8);
      pauVar31 = param_1;
      if (0x80 < param_3) {
        lVar36 = ((ulonglong)param_1 & 0xf) - 0x10;
        pauVar31 = (undefined1 (*) [32])((longlong)param_1 - lVar36);
        param_2 = (undefined1 (*) [32])((longlong)param_2 - lVar36);
        param_3 = param_3 + lVar36;
        if (0x80 < param_3) {
          do {
            uVar39 = *(undefined8 *)(*param_2 + 8);
            uVar40 = *(undefined8 *)(*param_2 + 0x10);
            uVar14 = *(undefined8 *)(*param_2 + 0x18);
            uVar15 = *(undefined8 *)param_2[1];
            uVar16 = *(undefined8 *)(param_2[1] + 8);
            uVar17 = *(undefined8 *)(param_2[1] + 0x10);
            uVar18 = *(undefined8 *)(param_2[1] + 0x18);
            *(undefined8 *)*pauVar31 = *(undefined8 *)*param_2;
            *(undefined8 *)(*pauVar31 + 8) = uVar39;
            *(undefined8 *)(*pauVar31 + 0x10) = uVar40;
            *(undefined8 *)(*pauVar31 + 0x18) = uVar14;
            *(undefined8 *)pauVar31[1] = uVar15;
            *(undefined8 *)(pauVar31[1] + 8) = uVar16;
            *(undefined8 *)(pauVar31[1] + 0x10) = uVar17;
            *(undefined8 *)(pauVar31[1] + 0x18) = uVar18;
            uVar39 = *(undefined8 *)(param_2[2] + 8);
            uVar40 = *(undefined8 *)(param_2[2] + 0x10);
            uVar14 = *(undefined8 *)(param_2[2] + 0x18);
            uVar15 = *(undefined8 *)param_2[3];
            uVar16 = *(undefined8 *)(param_2[3] + 8);
            uVar17 = *(undefined8 *)(param_2[3] + 0x10);
            uVar18 = *(undefined8 *)(param_2[3] + 0x18);
            *(undefined8 *)pauVar31[2] = *(undefined8 *)param_2[2];
            *(undefined8 *)(pauVar31[2] + 8) = uVar39;
            *(undefined8 *)(pauVar31[2] + 0x10) = uVar40;
            *(undefined8 *)(pauVar31[2] + 0x18) = uVar14;
            *(undefined8 *)pauVar31[3] = uVar15;
            *(undefined8 *)(pauVar31[3] + 8) = uVar16;
            *(undefined8 *)(pauVar31[3] + 0x10) = uVar17;
            *(undefined8 *)(pauVar31[3] + 0x18) = uVar18;
            pauVar31 = pauVar31 + 4;
            param_2 = param_2 + 4;
            param_3 = param_3 - 0x80;
          } while (0x7f < param_3);
        }
      }
      uVar37 = param_3 + 0xf & 0xfffffffffffffff0;
      switch(param_3 + 0xf >> 4 & 0xf) {
      case 8:
        uVar39 = *(undefined8 *)((longlong)(param_2[-4] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-4] + uVar37) = *(undefined8 *)(param_2[-4] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-4] + uVar37) + 8) = uVar39;
      case 7:
        uVar39 = *(undefined8 *)((longlong)(param_2[-4] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-4] + uVar37 + 0x10) = *(undefined8 *)(param_2[-4] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-4] + uVar37 + 0x10) + 8) = uVar39;
      case 6:
        uVar39 = *(undefined8 *)((longlong)(param_2[-3] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-3] + uVar37) = *(undefined8 *)(param_2[-3] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-3] + uVar37) + 8) = uVar39;
      case 5:
        uVar39 = *(undefined8 *)((longlong)(param_2[-3] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-3] + uVar37 + 0x10) = *(undefined8 *)(param_2[-3] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-3] + uVar37 + 0x10) + 8) = uVar39;
      case 4:
        uVar39 = *(undefined8 *)((longlong)(param_2[-2] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-2] + uVar37) = *(undefined8 *)(param_2[-2] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-2] + uVar37) + 8) = uVar39;
      case 3:
        uVar39 = *(undefined8 *)((longlong)(param_2[-2] + uVar37 + 0x10) + 8);
        *(undefined8 *)(pauVar31[-2] + uVar37 + 0x10) = *(undefined8 *)(param_2[-2] + uVar37 + 0x10)
        ;
        *(undefined8 *)((longlong)(pauVar31[-2] + uVar37 + 0x10) + 8) = uVar39;
      case 2:
        uVar39 = *(undefined8 *)((longlong)(param_2[-1] + uVar37) + 8);
        *(undefined8 *)(pauVar31[-1] + uVar37) = *(undefined8 *)(param_2[-1] + uVar37);
        *(undefined8 *)((longlong)(pauVar31[-1] + uVar37) + 8) = uVar39;
      case 1:
        *(undefined8 *)(pauVar31[-1] + param_3 + 0x10) = uVar12;
        *(undefined8 *)((longlong)(pauVar31[-1] + param_3 + 0x10) + 8) = uVar13;
      default:
        *(undefined8 *)*param_1 = uVar10;
        *(undefined8 *)(*param_1 + 8) = uVar11;
        return;
      }
    }
code_r0x00018000de8b:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_18001a080 & 2) != 0))
  goto code_r0x00018000de8b;
  uVar10 = *(undefined8 *)*param_2;
  uVar11 = *(undefined8 *)(*param_2 + 8);
  uVar12 = *(undefined8 *)(*param_2 + 0x10);
  uVar13 = *(undefined8 *)(*param_2 + 0x18);
  puVar33 = (undefined8 *)(param_2[-1] + param_3);
  uVar39 = *puVar33;
  uVar40 = puVar33[1];
  uVar14 = puVar33[2];
  uVar15 = puVar33[3];
  pauVar31 = param_1;
  if (0x100 < param_3) {
    lVar36 = ((ulonglong)param_1 & 0x1f) - 0x20;
    pauVar31 = (undefined1 (*) [32])((longlong)param_1 - lVar36);
    param_2 = (undefined1 (*) [32])((longlong)param_2 - lVar36);
    param_3 = param_3 + lVar36;
    if (0x100 < param_3) {
      if (0x180000 < param_3) {
        do {
          uVar37 = param_3;
          pauVar35 = param_2;
          pauVar32 = pauVar31;
          auVar3 = pauVar35[1];
          auVar4 = pauVar35[2];
          auVar5 = pauVar35[3];
          auVar6 = vmovntdq_avx(*pauVar35);
          *pauVar32 = auVar6;
          auVar3 = vmovntdq_avx(auVar3);
          pauVar32[1] = auVar3;
          auVar3 = vmovntdq_avx(auVar4);
          pauVar32[2] = auVar3;
          auVar3 = vmovntdq_avx(auVar5);
          pauVar32[3] = auVar3;
          auVar3 = pauVar35[5];
          auVar4 = pauVar35[6];
          auVar5 = pauVar35[7];
          auVar6 = vmovntdq_avx(pauVar35[4]);
          pauVar32[4] = auVar6;
          auVar3 = vmovntdq_avx(auVar3);
          pauVar32[5] = auVar3;
          auVar3 = vmovntdq_avx(auVar4);
          pauVar32[6] = auVar3;
          auVar3 = vmovntdq_avx(auVar5);
          pauVar32[7] = auVar3;
          pauVar31 = pauVar32 + 8;
          param_2 = pauVar35 + 8;
          param_3 = uVar37 - 0x100;
        } while (0xff < uVar37 - 0x100);
        uVar38 = uVar37 - 0xe1 & 0xffffffffffffffe0;
        switch(uVar37 - 0xe1 >> 5 & 0xf) {
        case 8:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(*pauVar35 + uVar38));
          *(undefined1 (*) [32])(*pauVar32 + uVar38) = auVar3;
        case 7:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[1] + uVar38));
          *(undefined1 (*) [32])(pauVar32[1] + uVar38) = auVar3;
        case 6:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[2] + uVar38));
          *(undefined1 (*) [32])(pauVar32[2] + uVar38) = auVar3;
        case 5:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[3] + uVar38));
          *(undefined1 (*) [32])(pauVar32[3] + uVar38) = auVar3;
        case 4:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[4] + uVar38));
          *(undefined1 (*) [32])(pauVar32[4] + uVar38) = auVar3;
        case 3:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[5] + uVar38));
          *(undefined1 (*) [32])(pauVar32[5] + uVar38) = auVar3;
        case 2:
          auVar3 = vmovntdq_avx(*(undefined1 (*) [32])(pauVar35[6] + uVar38));
          *(undefined1 (*) [32])(pauVar32[6] + uVar38) = auVar3;
        case 1:
          puVar33 = (undefined8 *)(pauVar32[-1] + uVar37);
          *puVar33 = uVar39;
          puVar33[1] = uVar40;
          puVar33[2] = uVar14;
          puVar33[3] = uVar15;
        case 0:
          *(undefined8 *)*param_1 = uVar10;
          *(undefined8 *)(*param_1 + 8) = uVar11;
          *(undefined8 *)(*param_1 + 0x10) = uVar12;
          *(undefined8 *)(*param_1 + 0x18) = uVar13;
          return;
        }
        goto switchD_18000e116_caseD_0;
      }
      do {
        uVar16 = *(undefined8 *)(*param_2 + 8);
        uVar17 = *(undefined8 *)(*param_2 + 0x10);
        uVar18 = *(undefined8 *)(*param_2 + 0x18);
        uVar19 = *(undefined8 *)param_2[1];
        uVar20 = *(undefined8 *)(param_2[1] + 8);
        uVar21 = *(undefined8 *)(param_2[1] + 0x10);
        uVar22 = *(undefined8 *)(param_2[1] + 0x18);
        uVar23 = *(undefined8 *)param_2[2];
        uVar24 = *(undefined8 *)(param_2[2] + 8);
        uVar25 = *(undefined8 *)(param_2[2] + 0x10);
        uVar26 = *(undefined8 *)(param_2[2] + 0x18);
        uVar27 = *(undefined8 *)param_2[3];
        uVar28 = *(undefined8 *)(param_2[3] + 8);
        uVar29 = *(undefined8 *)(param_2[3] + 0x10);
        uVar30 = *(undefined8 *)(param_2[3] + 0x18);
        *(undefined8 *)*pauVar31 = *(undefined8 *)*param_2;
        *(undefined8 *)(*pauVar31 + 8) = uVar16;
        *(undefined8 *)(*pauVar31 + 0x10) = uVar17;
        *(undefined8 *)(*pauVar31 + 0x18) = uVar18;
        *(undefined8 *)pauVar31[1] = uVar19;
        *(undefined8 *)(pauVar31[1] + 8) = uVar20;
        *(undefined8 *)(pauVar31[1] + 0x10) = uVar21;
        *(undefined8 *)(pauVar31[1] + 0x18) = uVar22;
        *(undefined8 *)pauVar31[2] = uVar23;
        *(undefined8 *)(pauVar31[2] + 8) = uVar24;
        *(undefined8 *)(pauVar31[2] + 0x10) = uVar25;
        *(undefined8 *)(pauVar31[2] + 0x18) = uVar26;
        *(undefined8 *)pauVar31[3] = uVar27;
        *(undefined8 *)(pauVar31[3] + 8) = uVar28;
        *(undefined8 *)(pauVar31[3] + 0x10) = uVar29;
        *(undefined8 *)(pauVar31[3] + 0x18) = uVar30;
        uVar16 = *(undefined8 *)(param_2[4] + 8);
        uVar17 = *(undefined8 *)(param_2[4] + 0x10);
        uVar18 = *(undefined8 *)(param_2[4] + 0x18);
        uVar19 = *(undefined8 *)param_2[5];
        uVar20 = *(undefined8 *)(param_2[5] + 8);
        uVar21 = *(undefined8 *)(param_2[5] + 0x10);
        uVar22 = *(undefined8 *)(param_2[5] + 0x18);
        uVar23 = *(undefined8 *)param_2[6];
        uVar24 = *(undefined8 *)(param_2[6] + 8);
        uVar25 = *(undefined8 *)(param_2[6] + 0x10);
        uVar26 = *(undefined8 *)(param_2[6] + 0x18);
        uVar27 = *(undefined8 *)param_2[7];
        uVar28 = *(undefined8 *)(param_2[7] + 8);
        uVar29 = *(undefined8 *)(param_2[7] + 0x10);
        uVar30 = *(undefined8 *)(param_2[7] + 0x18);
        *(undefined8 *)pauVar31[4] = *(undefined8 *)param_2[4];
        *(undefined8 *)(pauVar31[4] + 8) = uVar16;
        *(undefined8 *)(pauVar31[4] + 0x10) = uVar17;
        *(undefined8 *)(pauVar31[4] + 0x18) = uVar18;
        *(undefined8 *)pauVar31[5] = uVar19;
        *(undefined8 *)(pauVar31[5] + 8) = uVar20;
        *(undefined8 *)(pauVar31[5] + 0x10) = uVar21;
        *(undefined8 *)(pauVar31[5] + 0x18) = uVar22;
        *(undefined8 *)pauVar31[6] = uVar23;
        *(undefined8 *)(pauVar31[6] + 8) = uVar24;
        *(undefined8 *)(pauVar31[6] + 0x10) = uVar25;
        *(undefined8 *)(pauVar31[6] + 0x18) = uVar26;
        *(undefined8 *)pauVar31[7] = uVar27;
        *(undefined8 *)(pauVar31[7] + 8) = uVar28;
        *(undefined8 *)(pauVar31[7] + 0x10) = uVar29;
        *(undefined8 *)(pauVar31[7] + 0x18) = uVar30;
        pauVar31 = pauVar31 + 8;
        param_2 = param_2 + 8;
        param_3 = param_3 - 0x100;
      } while (0xff < param_3);
    }
  }
  uVar37 = param_3 + 0x1f & 0xffffffffffffffe0;
  switch(param_3 + 0x1f >> 5 & 0xf) {
  case 8:
    puVar33 = (undefined8 *)(param_2[-8] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-8] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 7:
    puVar33 = (undefined8 *)(param_2[-7] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-7] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 6:
    puVar33 = (undefined8 *)(param_2[-6] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-6] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 5:
    puVar33 = (undefined8 *)(param_2[-5] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-5] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 4:
    puVar33 = (undefined8 *)(param_2[-4] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-4] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 3:
    puVar33 = (undefined8 *)(param_2[-3] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-3] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 2:
    puVar33 = (undefined8 *)(param_2[-2] + uVar37);
    uVar16 = puVar33[1];
    uVar17 = puVar33[2];
    uVar18 = puVar33[3];
    puVar34 = (undefined8 *)(pauVar31[-2] + uVar37);
    *puVar34 = *puVar33;
    puVar34[1] = uVar16;
    puVar34[2] = uVar17;
    puVar34[3] = uVar18;
  case 1:
    puVar33 = (undefined8 *)(pauVar31[-1] + param_3);
    *puVar33 = uVar39;
    puVar33[1] = uVar40;
    puVar33[2] = uVar14;
    puVar33[3] = uVar15;
  }
switchD_18000e116_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x18000e530; Evidence: ev_f38fcb8ec73bc15cffd966a394a2831af7e1514cafeaed5adddacad01c38cd14 */

/* Library Function - Single Match
    strcmp
   
   Libraries: Visual Studio 2012, Visual Studio 2015, Visual Studio 2017, Visual Studio 2019 */

int __cdecl strcmp(char *_Str1,char *_Str2)

{
  byte bVar1;
  ulonglong uVar2;
  longlong lVar3;
  
  lVar3 = (longlong)_Str2 - (longlong)_Str1;
  while( true ) {
    if (((ulonglong)_Str1 & 7) == 0) {
      while ((((int)lVar3 + (int)_Str1 & 0xfffU) < 0xff9 &&
             (uVar2 = *(ulonglong *)_Str1, uVar2 == *(ulonglong *)(lVar3 + (longlong)_Str1)))) {
        _Str1 = (char *)((longlong)_Str1 + 8);
        if ((~uVar2 & uVar2 + 0xfefefefefefefeff & 0x8080808080808080) != 0) {
          return 0;
        }
      }
    }
    bVar1 = (byte)*(ulonglong *)_Str1;
    if (bVar1 != *(byte *)(lVar3 + (longlong)_Str1)) break;
    _Str1 = (char *)((longlong)_Str1 + 1);
    if (bVar1 == 0) {
      return 0;
    }
  }
  return -(uint)(bVar1 < *(byte *)(lVar3 + (longlong)_Str1)) | 1;
}


/* Address: 0x18000e5b0; Evidence: ev_a36d02377f8b7ce76dd5b256cbee08914131e2c6064267594ef086eebf7404eb */

/* Library Function - Single Match
    strlen
   
   Library: Visual Studio */

size_t __cdecl strlen(char *_Str)

{
  ulonglong uVar1;
  ulonglong *puVar2;
  longlong lVar3;
  
  lVar3 = -(longlong)_Str;
  do {
    if (((ulonglong)_Str & 7) == 0) goto LAB_18000e5e1;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_18000e628:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_18000e5e1:
  do {
    do {
      puVar2 = (ulonglong *)_Str;
      _Str = (char *)(puVar2 + 1);
    } while (((~*puVar2 ^ *puVar2 + 0x7efefefefefefeff) & 0x8101010101010100) == 0);
    uVar1 = *puVar2;
    if ((char)uVar1 == '\0') {
      return (longlong)puVar2 + lVar3;
    }
    if ((char)(uVar1 >> 8) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 1);
    }
    if ((char)(uVar1 >> 0x10) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 2);
    }
    if ((char)(uVar1 >> 0x18) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 3);
    }
    if ((char)(uVar1 >> 0x20) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 4);
    }
    if ((char)(uVar1 >> 0x28) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 5);
    }
    if ((char)(uVar1 >> 0x30) == '\0') {
      return (size_t)(char *)((longlong)puVar2 + lVar3 + 6);
    }
  } while ((char)(uVar1 >> 0x38) != '\0');
  goto LAB_18000e628;
}


/* Address: 0x18000e670; Evidence: ev_a0dc7739b3a884af0c9535a883c2643cbc418dd663e0c344790c0cf361db6051 */

/* Library Function - Single Match
    strncmp
   
   Libraries: Visual Studio 2012, Visual Studio 2015, Visual Studio 2017, Visual Studio 2019 */

int __cdecl strncmp(char *_Str1,char *_Str2,size_t _MaxCount)

{
  byte bVar1;
  ulonglong uVar2;
  longlong lVar3;
  bool bVar4;
  
  lVar3 = (longlong)_Str2 - (longlong)_Str1;
  if (_MaxCount != 0) {
    do {
      if (((ulonglong)_Str1 & 7) == 0) {
        while ((((int)lVar3 + (int)_Str1 & 0xfffU) < 0xff9 &&
               (uVar2 = *(ulonglong *)_Str1, uVar2 == *(ulonglong *)(lVar3 + (longlong)_Str1)))) {
          _Str1 = (char *)((longlong)_Str1 + 8);
          bVar4 = _MaxCount < 8;
          _MaxCount = _MaxCount - 8;
          if (bVar4 || _MaxCount == 0) {
            return 0;
          }
          if ((~uVar2 & uVar2 + 0xfefefefefefefeff & 0x8080808080808080) != 0) {
            return 0;
          }
        }
      }
      bVar1 = (byte)*(ulonglong *)_Str1;
      if (bVar1 != *(byte *)(lVar3 + (longlong)_Str1)) {
        return -(uint)(bVar1 < *(byte *)(lVar3 + (longlong)_Str1)) | 1;
      }
      _Str1 = (char *)((longlong)_Str1 + 1);
      _MaxCount = _MaxCount - 1;
    } while ((_MaxCount != 0) && (bVar1 != 0));
  }
  return 0;
}


/* Address: 0x18000e700; Evidence: ev_dcab6bae5c7dfa2edb05f4a11653253d59be51c21038cfcf2037877eaecbaccf */

void FUN_18000e700(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x18000e717; Evidence: ev_d7f1247197b334b3d64278f6aadd4b38de1617ab2d805d4907e892c04ac23686 */

void FUN_18000e717(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x18000e730; Evidence: ev_286a5ca9e4d518f60db45fbd316ac0b8fbfa99682f2a13af4f5a419cfdb5d956 */

void FUN_18000e730(void)

{
  FUN_1800019b0();
  return;
}


/* Address: 0x18000e744; Evidence: ev_fa1ed5e3a32e2704503b5fdd049979fce8c7d226b7bf857aea827c4501eedad9 */

void FUN_18000e744(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180001270,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x18000e77a; Evidence: ev_c691432be32124435060c3e7d252f64e6a99d80d5f9507ad9bc4ec464372c36f */

bool FUN_18000e77a(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x18000e792; Evidence: ev_7cd01cdba95a978cada75a52a221f283587da0eb97773ded79558f6108c49b20 */

undefined4 FUN_18000e792(undefined8 param_1,longlong param_2)

{
  undefined8 uVar1;
  longlong lVar2;
  
  *(undefined8 *)(param_2 + 0x30) = param_1;
  if ((((*(char *)(param_2 + 0x58) != '\0') &&
       (*(undefined8 *)(param_2 + 0x28) = **(undefined8 **)(param_2 + 0x30),
       **(int **)(param_2 + 0x28) == -0x1f928c9d)) &&
      (*(int *)(*(longlong *)(param_2 + 0x28) + 0x18) == 4)) &&
     (((*(int *)(*(longlong *)(param_2 + 0x28) + 0x20) == 0x19930520 ||
       (*(int *)(*(longlong *)(param_2 + 0x28) + 0x20) == 0x19930521)) ||
      (*(int *)(*(longlong *)(param_2 + 0x28) + 0x20) == 0x19930522)))) {
    lVar2 = FUN_180002538();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180002538();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_1800058fc();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18000e824; Evidence: ev_9adbb639b3e230dbf89e006f05ed3de1baebce010870936cbb4e889b26293387 */

undefined4 FUN_18000e824(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180002538();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180002538();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180002538();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180003cf0((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180002538();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x18000e8cb; Evidence: ev_5b6c295c8b553ae75794e415c829972762b5e705b22ebfc4b4bce886b5e32091 */

void FUN_18000e8cb(undefined8 *param_1,longlong param_2)

{
  FUN_18000421c(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x18000e8ec; Evidence: ev_2294e0d9f1965636be8d309e51463f624d0b7d724be78cc71229fe5a6f809f92 */

void FUN_18000e8ec(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_180002bbc(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_1800022e0(piVar1);
    }
  }
  lVar2 = FUN_180002538();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180002538();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x18000e972; Evidence: ev_0fb858114432caff043d8e82c9bddce4060593c0265862f479c90967d166d560 */

void FUN_18000e972(undefined8 *param_1)

{
  FUN_1800023b0(param_1);
  return;
}


/* Address: 0x18000e988; Evidence: ev_62697017865c1b54c4aec982ac08dc086708312bd0e72f13db9a1746bc817420 */

void FUN_18000e988(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002538();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180002538();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18000e9ab; Evidence: ev_1ac655faa4d7763ab1ae3715f55c076cf65b33bb711b1808fc580f536cc6e047 */

void FUN_18000e9ab(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000e9c5; Evidence: ev_962e1aa1e8ae03c660ec4fdb31cc1197e2595647c39b3b70973c0a3396a3cb50 */

undefined4 FUN_18000e9c5(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18000e9f2; Evidence: ev_5dfb258af26bae6dcce6e2ffbc5daf1e136bf28865cfa2af6adcd84cd9f779be */

void FUN_18000e9f2(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x18000ea0c; Evidence: ev_5f260d34457d7f5ef4f57dc2122ceaca74731dd66fddeda989acc62e75dac02e */

void FUN_18000ea0c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x18000ea26; Evidence: ev_acae91d62e522057dc1307ab50aa6ddaead54b4b38e8d23197322e4751e0d602 */

void FUN_18000ea26(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x18000ea3f; Evidence: ev_54a2bb728b865d31e4c29dfe0cd7e972b937ae9ad516c72ec7adfa4d203f180c */

void FUN_18000ea3f(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x18000ea60; Evidence: ev_6146d69a80070f79fe563564ff0ca35ec668afe04fbfff0c461bb8f86887d5d9 */

void FUN_18000ea60(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18000ea76; Evidence: ev_dd0dd86142c0d7858c6e34d547b471bdb0e5464944c301a72ac95891829b8131 */

void FUN_18000ea76(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18000ea8c; Evidence: ev_39e17bcd739e2257356b0538e8cd2cf7d564484a2de17757fd6cc83fa7278398 */

void FUN_18000ea8c(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x18000eaad; Evidence: ev_bb53559a3e610e7784437bd2e0661e2920452e7657dd895bde71a045f63dcd1d */

void FUN_18000eaad(undefined8 param_1,longlong param_2)

{
  FUN_1800097b8(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000eac8; Evidence: ev_d9db53ef1b0dbf34b0d450be037e7fb41171807b3013f690b3a671e65b2c7319 */

void FUN_18000eac8(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x18000eae5; Evidence: ev_15ed5acabf0811e3723bef1a87efa3ae16b4e9438c6ee1e5dd84094660b02fd6 */

void FUN_18000eae5(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x18000eafe; Evidence: ev_ad3befeb83d006bf61a8144763fa69e6bf3f8581d4f507d670a57133daf666fc */

void FUN_18000eafe(undefined8 param_1,longlong param_2)

{
  FUN_18000b74c(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000eb18; Evidence: ev_cde184e5890e7626173a2c64706ed2709f993a3882c17fdb8dc49f8f3dc80052 */

void FUN_18000eb18(undefined8 param_1,longlong param_2)

{
  FUN_18000b74c(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x18000eb2f; Evidence: ev_81184bab15292190e01589508c422b4a15f114093aee855ed3622f91407cf563 */

void FUN_18000eb2f(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x18000eb48; Evidence: ev_56af419641fd3900f66765bffd07f6e8234aa0fdfc07f8df05312adcced8917c */

void FUN_18000eb48(undefined8 param_1,longlong param_2)

{
  FUN_1800097b8(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x18000eb60; Evidence: ev_722ff5c5d7b4d16e70178686e8aa2a5b03b741a7f3c6ab4c8ed6fda91e092934 */

bool FUN_18000eb60(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

