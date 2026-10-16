/* REA / Ghidra decompiler-generated pseudocode. Not original source; not compilable. */

/* Address: 0x180001000; Evidence: ev_f39a0a7417cfc3f5cf4bcfdb9c1c93de08bd5313ccda46f4619ad1e15f8655c3 */

HMODULE FUN_180001000(int param_1,longlong param_2)

{
  int iVar1;
  HMODULE pHVar2;
  
  if ((param_1 == 1) &&
     (iVar1 = FUN_180004a70(*(byte **)(param_2 + 0x18),(byte *)"node.exe"), iVar1 == 0)) {
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


/* Address: 0x180001050; Evidence: ev_fb74526593dfa3aadf1f63a0281cd232f437509ec7bc975339aeb0107a389a21 */

undefined8 FUN_180001050(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  BOOL BVar2;
  DWORD dwProcessId;
  char *pcVar3;
  char local_res18 [8];
  DWORD local_res20 [2];
  int local_38;
  undefined4 uStack_34;
  longlong local_30;
  undefined8 local_28;
  longlong *local_20;
  undefined8 local_18 [2];
  
  local_30 = 1;
  iVar1 = napi_get_cb_info(param_1,param_2,&local_30,&local_28,0,0);
  if (iVar1 != 0) {
    napi_get_last_error_info(param_1,&local_38);
    napi_is_exception_pending(param_1,local_res18);
    if (local_res18[0] != '\0') {
      return 0;
    }
    local_20 = (longlong *)CONCAT44(uStack_34,local_38);
    goto LAB_18000115a;
  }
  local_res20[0] = 0;
  if (local_30 == 0) {
LAB_180001115:
    dwProcessId = 0xffffffff;
LAB_18000111a:
    BVar2 = AllowSetForegroundWindow(dwProcessId);
    iVar1 = napi_get_boolean(param_1,BVar2 != 0,local_18);
    if (iVar1 == 0) {
      return local_18[0];
    }
  }
  else {
    iVar1 = napi_typeof(param_1,local_28,&local_38);
    if (iVar1 == 0) {
      if ((local_38 == 0) ||
         (iVar1 = napi_get_value_int32(param_1,local_28,local_res20), iVar1 == 0)) {
        dwProcessId = local_res20[0];
        if (local_res20[0] == 0) goto LAB_180001115;
        goto LAB_18000111a;
      }
      iVar1 = napi_throw_type_error(param_1,0,"Invalid number was passed as argument.");
      if (iVar1 == 0) {
        return 0;
      }
    }
  }
  napi_get_last_error_info(param_1,&local_20);
  napi_is_exception_pending(param_1,local_res18);
  if (local_res18[0] != '\0') {
    return 0;
  }
LAB_18000115a:
  pcVar3 = "empty error message";
  if ((char *)*local_20 != (char *)0x0) {
    pcVar3 = (char *)*local_20;
  }
  napi_throw_error(param_1,0,pcVar3);
  return 0;
}


/* Address: 0x1800011a0; Evidence: ev_457290aca969eb136e7dbb1759ab1f4c08a0c8923d12a0f7cf1346a0d4710702 */

undefined8 node_api_module_get_api_version_v1(void)

{
                    /* 0x11a0  2  node_api_module_get_api_version_v1 */
  return 8;
}


/* Address: 0x1800011b0; Evidence: ev_779208594a0ce3842392c47bdbbfea87da812af69f3676517bf2d829e53f4435 */

undefined8 napi_register_module_v1(undefined8 param_1,undefined8 param_2)

{
  int iVar1;
  char *pcVar2;
  char local_res18 [8];
  longlong *local_res20;
  undefined8 local_18 [2];
  
                    /* 0x11b0  1  napi_register_module_v1 */
  iVar1 = napi_create_function
                    (param_1,"allowSetForegroundWindow",0xffffffffffffffff,FUN_180001050,0,local_18)
  ;
  if ((iVar1 == 0) &&
     (iVar1 = napi_set_named_property(param_1,param_2,"allowSetForegroundWindow",local_18[0]),
     iVar1 == 0)) {
    return param_2;
  }
  napi_get_last_error_info(param_1,&local_res20);
  napi_is_exception_pending(param_1,local_res18);
  if (local_res18[0] == '\0') {
    pcVar2 = "empty error message";
    if ((char *)*local_res20 != (char *)0x0) {
      pcVar2 = (char *)*local_res20;
    }
    napi_throw_error(param_1,0,pcVar2);
  }
  return 0;
}


/* Address: 0x18000126f; Evidence: ev_328d6ccc5d69cd433b31ef723f13e8457a2d5a29cf43c7b714e94feda33c900e */

void FUN_18000126f(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  void *in_RAX;
  HMODULE UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_18000d590(&ImgDelayDescr_1800184e4.grAttrs,in_RAX);
                    /* WARNING: Could not recover jumptable at 0x0001800012e6. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800012e8; Evidence: ev_ae547a4e62c9e6b1fa6edcf58d3dc628c167fa7b5e3af99a1aceb23cecfa8fc4 */

void DelayLoad_napi_create_function
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x1800012f4; Evidence: ev_5cea3b474a215665cb30feb48f97975b8db459b7791915ae075ed70f43f6f117 */

void DelayLoad_napi_get_boolean
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001300; Evidence: ev_57e79eaa8f7331808bd0636268f3cb9418181e47c64ffc4ecd28642bd99efb6b */

void DelayLoad_napi_get_last_error_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000130c; Evidence: ev_6a67020e234841008c65a0c09281e140fbf571d8209190642ea4b80d8ca44932 */

void DelayLoad_napi_is_exception_pending
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001318; Evidence: ev_7332f03706233a1daa8797566bb1c9b9ad424dc3c75a78645625e1932f4d79f0 */

void DelayLoad_napi_throw_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001324; Evidence: ev_76f313ead1879c60a9218b218911629abfa8cfbcc02f68f4c662ddd108cb123a */

void DelayLoad_napi_set_named_property
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001330; Evidence: ev_0a7ba551bb8b333df4af2f0cb45ffcb1002edd0cc820d726baf7a1f70758ef7d */

void DelayLoad_napi_typeof
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x18000133c; Evidence: ev_b12f52f5df33805c4eefd2fbb8b05d31b5f861c7a37273b9d3f23b848cd85d82 */

void DelayLoad_napi_get_value_int32
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001348; Evidence: ev_5cf20107097995fc1c3446c14fb02531ac0cfec2154006b9d9bffd6933e22ff2 */

void DelayLoad_napi_get_cb_info
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001354; Evidence: ev_7d6f9336a5db58bbb664b9c9d9bb7323a006e41509462053a0bcb2594d016e5a */

void DelayLoad_napi_throw_type_error
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  FUN_18000126f(param_1,param_2,param_3,param_4);
  return;
}


/* Address: 0x180001370; Evidence: ev_ee6c93db52d4c7c2d4d45388e97e4d78320c2bc280c9cd1de26778f7566aac35 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_18001a000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180001730();
  return;
}


/* Address: 0x180001390; Evidence: ev_c436045788430f1c17c1758b77a43277b6f0b9dc8726b0d78027319faa058ab1 */

ulonglong FUN_180001390(undefined8 param_1,int param_2,longlong param_3)

{
  byte bVar1;
  ulonglong uVar2;
  
  if (param_2 == 0) {
    uVar2 = FUN_1800014f8(param_3 != 0);
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
      bVar1 = FUN_180001a28();
    }
    return (ulonglong)bVar1;
  }
  uVar2 = FUN_1800013e0(param_1,param_3);
  return uVar2;
}


/* Address: 0x1800013e0; Evidence: ev_52911d2f443ab3b24ccf240545ce98e5430c942a7448fe02b51e41c2ddd8d5db */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800013e0(undefined8 param_1,undefined8 param_2)

{
  bool bVar1;
  bool bVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  longlong *plVar5;
  ulonglong uVar6;
  
  uVar3 = FUN_180001ae4(0);
  if ((char)uVar3 != '\0') {
    uVar3 = __scrt_acquire_startup_lock();
    bVar1 = true;
    if (DAT_18001b030 != 0) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ca8(7);
    }
    DAT_18001b030 = 1;
    bVar2 = FUN_1800019e8();
    if (bVar2) {
      FUN_180001df4();
      FUN_180001930();
      FUN_18000195c();
      uVar4 = FUN_180004c38((undefined8 *)&DAT_18000f2d0,(undefined8 *)&DAT_18000f2f0);
      if (((int)uVar4 == 0) && (uVar4 = __scrt_dllmain_after_initialize_c(), (char)uVar4 != '\0')) {
        FUN_180004c00((undefined8 *)&DAT_18000f2c0,(undefined8 *)&DAT_18000f2c8);
        DAT_18001b030 = 2;
        bVar1 = false;
      }
    }
    __scrt_release_startup_lock((char)uVar3);
    if (!bVar1) {
      plVar5 = (longlong *)FUN_180001c94();
      if ((*plVar5 != 0) && (uVar6 = FUN_180001bac((longlong)plVar5), (char)uVar6 != '\0')) {
        (*(code *)*plVar5)(param_1,2,param_2,_guard_dispatch_icall);
      }
      DAT_18001aa98 = DAT_18001aa98 + 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800014f8; Evidence: ev_bbbeffbfaec5db8b347e4f56627c34638a208d9e2afe128f99eeef0e9d4720b0 */

ulonglong FUN_1800014f8(bool param_1)

{
  undefined8 uVar1;
  ulonglong uVar2;
  
  if (DAT_18001aa98 < 1) {
    uVar2 = 0;
  }
  else {
    DAT_18001aa98 = DAT_18001aa98 + -1;
    uVar1 = __scrt_acquire_startup_lock();
    if (DAT_18001b030 != 2) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ca8(7);
    }
    __scrt_dllmain_uninitialize_c();
    FUN_180001940();
    FUN_180001e30();
    DAT_18001b030 = 0;
    __scrt_release_startup_lock((char)uVar1);
    uVar2 = __scrt_uninitialize_crt(param_1,'\0');
    uVar2 = uVar2 & 0xff;
    FUN_180001ad0();
  }
  return uVar2;
}


/* Address: 0x18000157c; Evidence: ev_11f8625fd5a5a6e58d95f350157105b5a4aceca6a2a04e7586d15bdd5af0ee1d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180001639) */
/* WARNING: Removing unreachable block (ram,0x0001800015ca) */
/* WARNING: Removing unreachable block (ram,0x000180001678) */

int FUN_18000157c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_18001aa98 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180001390(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_180001928();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_180001928();
      FUN_1800014f8(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180001390(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}


/* Address: 0x1800016b0; Evidence: ev_23218c2788f2ac68a633929f17232a2358c50e6b65eaa24d3354b3733428b9c0 */

void entry(undefined8 param_1,int param_2,longlong param_3)

{
  if (param_2 == 1) {
    FUN_180001878();
  }
  FUN_18000157c(param_1,param_2,param_3);
  return;
}


/* Address: 0x1800016f0; Evidence: ev_2910d290c892efb2539e49ea80e774e278ec410521901cbdd7d6e4c097ac49cd */

/* Library Function - Single Match
    __raise_securityfailure
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __raise_securityfailure(_EXCEPTION_POINTERS *param_1)

{
  HANDLE hProcess;
  
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  UnhandledExceptionFilter(param_1);
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x00018000171d. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000409);
  return;
}


/* Address: 0x180001730; Evidence: ev_ddb74ec548eca5b798c4d8cf1644e3488294fcd6fd5b470a559e844acc6050ea */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001730(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000175b;
  FUN_180001804((PCONTEXT)&DAT_18001ab40);
  _DAT_18001aab0 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_18001abd8 = puVar3 + 0x40;
  _DAT_18001abc0 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_18001aaa0 = 0xc0000409;
  _DAT_18001aaa4 = 1;
  _DAT_18001aab8 = 1;
  DAT_18001aac0 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_18001a000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_18001a040;
  *(undefined8 *)(puVar3 + -8) = 0x1800017fd;
  DAT_18001ac38 = _DAT_18001aab0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_18000f448);
  return;
}


/* Address: 0x180001804; Evidence: ev_d80c3d888ec6e3df9f5bb942f2ad38416ec68ad00e10ade233f746492f0409ea */

void FUN_180001804(PCONTEXT param_1)

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


/* Address: 0x180001878; Evidence: ev_edf242e00bc3080f313bfc69069e81b24c050468ce2ca1956cd4302f98e54905 */

void FUN_180001878(void)

{
  DWORD DVar1;
  _FILETIME local_res8;
  LARGE_INTEGER local_res10;
  _FILETIME local_18 [2];
  
  if (DAT_18001a000 == 0x2b992ddfa232) {
    local_res8.dwLowDateTime = 0;
    local_res8.dwHighDateTime = 0;
    GetSystemTimeAsFileTime(&local_res8);
    local_18[0] = local_res8;
    DVar1 = GetCurrentThreadId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    DVar1 = GetCurrentProcessId();
    local_18[0] = (_FILETIME)((ulonglong)local_18[0] ^ (ulonglong)DVar1);
    QueryPerformanceCounter(&local_res10);
    DAT_18001a000 =
         ((ulonglong)local_res10.s.LowPart << 0x20 ^
          CONCAT44(local_res10.s.HighPart,local_res10.s.LowPart) ^ (ulonglong)local_18[0] ^
         (ulonglong)local_18) & 0xffffffffffff;
    if (DAT_18001a000 == 0x2b992ddfa232) {
      DAT_18001a000 = 0x2b992ddfa233;
    }
  }
  DAT_18001a040 = ~DAT_18001a000;
  return;
}


/* Address: 0x180001928; Evidence: ev_cbe02953c979344a3b42fbbd1e45e761adc01bcf084b5ba2edc0c657d74a5d89 */

undefined8 FUN_180001928(void)

{
  return 1;
}


/* Address: 0x180001930; Evidence: ev_4fbf91481503a9ba38b8f1df2662a5c40630c1b444742b697c17cc87651f2ee7 */

void FUN_180001930(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180001937. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  InitializeSListHead(&DAT_18001b010);
  return;
}


/* Address: 0x180001940; Evidence: ev_f86e8fa97212771c672d99b4d76322df15c29d5d623e453942a9434af9367a5f */

void FUN_180001940(void)

{
  FUN_180002358((PSLIST_HEADER)&DAT_18001b010);
  return;
}


/* Address: 0x18000194c; Evidence: ev_86f0f221f4d1ebcb012d6e4dee2000f8226f3ecdd2abac78bbf7c581fe547429 */

undefined * FUN_18000194c(void)

{
  return &DAT_18001b020;
}


/* Address: 0x180001954; Evidence: ev_548167c2ad25f083246c3ada675be390d42f51226af156587631619dc45dd653 */

undefined * FUN_180001954(void)

{
  return &DAT_18001b028;
}


/* Address: 0x18000195c; Evidence: ev_5a24b0923deda98f4a43ec75802cca50a35e87dce50657a39eaa0e9515f3bf43 */

void FUN_18000195c(void)

{
  ulonglong *puVar1;
  
  puVar1 = (ulonglong *)FUN_18000194c();
  *puVar1 = *puVar1 | 0x24;
  puVar1 = (ulonglong *)FUN_180001954();
  *puVar1 = *puVar1 | 2;
  return;
}


/* Address: 0x180001978; Evidence: ev_1763df22be9ddfcc7a9943cc9b0601fa738c2d5d43ffabcc73fbf2a246248042 */

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
LAB_1800019a6:
    uVar4 = (ulonglong)pvVar3 & 0xffffffffffffff00;
  }
  else {
    do {
      pvVar3 = (void *)0x0;
      LOCK();
      bVar2 = DAT_18001b038 == (void *)0x0;
      pvVar1 = StackBase;
      if (!bVar2) {
        pvVar3 = DAT_18001b038;
        pvVar1 = DAT_18001b038;
      }
      DAT_18001b038 = pvVar1;
      UNLOCK();
      if (bVar2) goto LAB_1800019a6;
    } while (StackBase != pvVar3);
    uVar4 = CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
  }
  return uVar4;
}


/* Address: 0x1800019b4; Evidence: ev_87234443c9d4e3bb5c07758687e3880e80d1fbbb6e5ffab8ba0155564320cf94 */

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
    uVar2 = FUN_180001928();
    uVar3 = FUN_1800052b0((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_180005430();
  }
  else {
    uVar2 = FUN_180001e74();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}


/* Address: 0x1800019e8; Evidence: ev_26762d004a78f190984074522329fda649e6ada7451cf7c2d08c42696c95de2b */

bool FUN_1800019e8(void)

{
  undefined8 uVar1;
  
  uVar1 = FUN_180001b20(0);
  return (char)uVar1 != '\0';
}


/* Address: 0x180001a00; Evidence: ev_4cc4b6fa797e6fa5148e02d61f850d38375105efaa174ab3f5dcd8f4a233556e */

/* Library Function - Single Match
    __scrt_dllmain_crt_thread_attach
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined1 __scrt_dllmain_crt_thread_attach(void)

{
  bool bVar1;
  
  bVar1 = FUN_1800023ac();
  if (bVar1) {
    bVar1 = FUN_1800059b0();
    if (bVar1) {
      return 1;
    }
    FUN_1800023c0();
  }
  return 0;
}


/* Address: 0x180001a28; Evidence: ev_62a824638e0c123b5ca628008712833b409f3668e7e700103dc3b48b54a2944c */

undefined1 FUN_180001a28(void)

{
  FUN_1800059c4();
  FUN_1800023c0();
  return 1;
}


/* Address: 0x180001a40; Evidence: ev_4a8c9447e1719c2144f9dd4f61e1a518e569edb1dc5408c40abc69a34aacd2b4 */

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


/* Address: 0x180001aa0; Evidence: ev_c0d9cf38f28ac16e0985038a201d509b2a88ea9b2592763431a7ab12bb7d9233 */

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
    FUN_1800057d4(&DAT_18001b048);
    return;
  }
  iVar2 = FUN_180005088();
  if (iVar2 == 0) {
    FUN_18000506c();
  }
  return;
}


/* Address: 0x180001ad0; Evidence: ev_f18b2d23963c954ae371302c48b7f846766db36523c0bf09fb09f004c5b24513 */

void FUN_180001ad0(void)

{
  FUN_180005a0c();
  FUN_1800023ec();
  return;
}


/* Address: 0x180001ae4; Evidence: ev_d639198dd8830bf996020b2573327e1b21d6e62622c6feb7a559c286af82f534 */

ulonglong FUN_180001ae4(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001b040 = 1;
  }
  FUN_180001e74();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000599c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}


/* Address: 0x180001b20; Evidence: ev_945679f990179e9603f36f48c3cd377f82c470c236e119aed942facdaccd171f */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001b20(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_18001b041 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ca8(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_18001b048 = 0xffffffffffffffff;
      uRam000000018001b050 = 0xffffffffffffffff;
      _DAT_18001b058 = 0xffffffffffffffff;
      _DAT_18001b060 = 0xffffffffffffffff;
      uRam000000018001b068 = 0xffffffffffffffff;
      _DAT_18001b070 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_18001b048);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_18001b060), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_18001b041 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x180001bac; Evidence: ev_d6e3f3450ccd52424a016bfa86720508ad3db5a7830b50b6b24d5a34ca5c8198 */

/* WARNING: Removing unreachable block (ram,0x000180001c39) */
/* WARNING: Enum "SectionFlags": Some values do not have unique names */

ulonglong FUN_180001bac(longlong param_1)

{
  ulonglong uVar1;
  uint7 uVar2;
  IMAGE_SECTION_HEADER *pIVar3;
  
  uVar1 = 0;
  for (pIVar3 = &IMAGE_SECTION_HEADER_180000210; pIVar3 != (IMAGE_SECTION_HEADER *)&DAT_180000350;
      pIVar3 = pIVar3 + 1) {
    if (((ulonglong)(uint)pIVar3->VirtualAddress <= param_1 - 0x180000000U) &&
       (uVar1 = (ulonglong)((pIVar3->Misc).PhysicalAddress + pIVar3->VirtualAddress),
       param_1 - 0x180000000U < uVar1)) goto LAB_180001c22;
  }
  pIVar3 = (IMAGE_SECTION_HEADER *)0x0;
LAB_180001c22:
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


/* Address: 0x180001c44; Evidence: ev_92eb5293e3df067cce32ee5b35df1fa7539ed039cfe8edb0be0ff5558d119c78 */

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
    DAT_18001b038 = 0;
    UNLOCK();
  }
  return;
}


/* Address: 0x180001c68; Evidence: ev_4907dc6e15bc01b6213e05a642ab7704d680de710c04d2d3c1ddf2864a158aa3 */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_18001b040 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180001c94; Evidence: ev_0a9094fe4d0e116c99f379fba496f08cb18f7d42982dcd29d58a1e64d5b3e143 */

undefined * FUN_180001c94(void)

{
  return &DAT_18001bb30;
}


/* Address: 0x180001c9c; Evidence: ev_7f781478349296972df90a67d5ad17f4dec95315501d1f713354e5aae6bf78b2 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001c9c(void)

{
  _DAT_18001b078 = 0;
  return;
}


/* Address: 0x180001ca8; Evidence: ev_30c1e4d353067d90301a065266f98366e982ad36e6b3ec647eb0126eecc00a87 */

void FUN_180001ca8(undefined4 param_1)

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
  *(undefined8 *)(puVar4 + -8) = 0x180001cdc;
  FUN_180001c9c();
  *(undefined8 *)(puVar4 + -8) = 0x180001ced;
  FUN_18000dbf0((undefined1 (*) [32])local_4d8,0,0x4d0);
  *(undefined8 *)(puVar4 + -8) = 0x180001cf7;
  RtlCaptureContext(local_4d8);
  *(undefined8 *)(puVar4 + -8) = 0x180001d11;
  FunctionEntry = RtlLookupFunctionEntry(local_3e0,&local_res10,(PUNWIND_HISTORY_TABLE)0x0);
  if (FunctionEntry != (PRUNTIME_FUNCTION)0x0) {
    *(undefined8 *)(puVar4 + 0x38) = 0;
    *(undefined1 **)(puVar4 + 0x30) = local_res18;
    *(undefined1 **)(puVar4 + 0x28) = local_res20;
    *(undefined1 **)(puVar4 + 0x20) = local_4d8;
    *(undefined8 *)(puVar4 + -8) = 0x180001d55;
    RtlVirtualUnwind(0,local_res10,local_3e0,FunctionEntry,*(PCONTEXT *)(puVar4 + 0x20),
                     *(PVOID **)(puVar4 + 0x28),*(PDWORD64 *)(puVar4 + 0x30),
                     *(PKNONVOLATILE_CONTEXT_POINTERS *)(puVar4 + 0x38));
  }
  local_440 = &stack0x00000008;
  *(undefined8 *)(puVar4 + -8) = 0x180001d87;
  FUN_18000dbf0((undefined1 (*) [32])(puVar4 + 0x50),0,0x98);
  *(undefined8 *)(puVar4 + 0x60) = unaff_retaddr;
  *(undefined4 *)(puVar4 + 0x50) = 0x40000015;
  *(undefined4 *)(puVar4 + 0x54) = 1;
  *(undefined8 *)(puVar4 + -8) = 0x180001da9;
  BVar2 = IsDebuggerPresent();
  *(undefined1 **)(puVar4 + 0x40) = puVar4 + 0x50;
  *(undefined1 **)(puVar4 + 0x48) = local_4d8;
  *(undefined8 *)(puVar4 + -8) = 0x180001dc6;
  SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)0x0);
  *(undefined8 *)(puVar4 + -8) = 0x180001dd1;
  LVar3 = UnhandledExceptionFilter((_EXCEPTION_POINTERS *)(puVar4 + 0x40));
  if ((LVar3 == 0) && (BVar2 != 1)) {
    *(undefined8 *)(puVar4 + -8) = 0x180001de2;
    FUN_180001c9c();
  }
  return;
}


/* Address: 0x180001df4; Evidence: ev_a00737622a0499714d9bf21eae00fd88b9ba226c0f60252be191553ae9edfda8 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001df4(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_1800175f0; puVar1 < &DAT_1800175f0; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180001e30; Evidence: ev_9f6e19245feb8a3cb610c64c72f77fd41504643d792f1909b77b844098680a0b */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001e30(void)

{
  undefined8 *puVar1;
  
  for (puVar1 = &DAT_180017600; puVar1 < &DAT_180017600; puVar1 = puVar1 + 1) {
    if ((code *)*puVar1 != (code *)0x0) {
      (*(code *)*puVar1)();
    }
  }
  return;
}


/* Address: 0x180001e70; Evidence: ev_3d1a28efa29c433a29e17d0d683ceb63dbe935f5c5820d11aa404df836994e2b */

void _guard_check_icall(void)

{
  return;
}


/* Address: 0x180001e74; Evidence: ev_b00ad0cdaa9a612417de367049902bc3242684119df2287fa37566c93c91229e */

/* WARNING: Removing unreachable block (ram,0x000180001f65) */
/* WARNING: Removing unreachable block (ram,0x000180001f55) */
/* WARNING: Removing unreachable block (ram,0x000180001f30) */
/* WARNING: Removing unreachable block (ram,0x000180001eae) */
/* WARNING: Removing unreachable block (ram,0x000180001e8c) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001e74(void)

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
    DAT_18001a060 = 0x8000;
    DAT_18001a068 = 0xffffffffffffffff;
    if ((((uVar8 == 0x106c0) || (uVar8 == 0x20660)) || (uVar8 == 0x20670)) ||
       ((uVar8 - 0x30650 < 0x21 &&
        ((0x100010001U >> ((ulonglong)(uVar8 - 0x30650) & 0x3f) & 1) != 0)))) {
      DAT_18001b080 = DAT_18001b080 | 1;
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
      DAT_18001b080 = DAT_18001b080 | 2;
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
  DAT_18001a058 = 1;
  DAT_18001a05c = 2;
  uVar9 = DAT_18001a050 & 0xfffffffffffffffe;
  if ((uVar5 >> 0x14 & 1) != 0) {
    DAT_18001a058 = 2;
    DAT_18001a05c = 6;
    uVar9 = DAT_18001a050 & 0xffffffffffffffee;
  }
  DAT_18001a050 = uVar9;
  if ((uVar5 >> 0x1b & 1) != 0) {
    uVar9 = xinuse(0);
    uVar9 = in_XCR0 & uVar9 & 0xffffffff;
    if (((uVar5 >> 0x1c & 1) != 0) && (bVar6 = (byte)uVar9, (bVar6 & 6) == 6)) {
      DAT_18001a058 = 3;
      uVar7 = DAT_18001a050;
      uVar5 = DAT_18001a05c | 8;
      if ((uVar8 & 0x20) != 0) {
        DAT_18001a058 = 5;
        uVar7 = DAT_18001a050 & 0xfffffffffffffffd;
        uVar5 = DAT_18001a05c | 0x28;
        if (((uVar8 & 0xd0030000) == 0xd0030000) && ((bVar6 & 0xe0) == 0xe0)) {
          DAT_18001a05c = DAT_18001a05c | 0x68;
          DAT_18001a058 = 6;
          uVar7 = DAT_18001a050 & 0xffffffffffffffd9;
          uVar5 = DAT_18001a05c;
        }
      }
      DAT_18001a05c = uVar5;
      DAT_18001a050 = uVar7;
      if ((uVar10 >> 0x17 & 1) != 0) {
        DAT_18001a050 = DAT_18001a050 & 0xfffffffffeffffff;
      }
      if (((uVar11 >> 0x13 & 1) != 0) && ((bVar6 & 0xe0) == 0xe0)) {
        _DAT_18001b07c = (uint)uVar12 & 0x400ff;
        DAT_18001a050 = ~((ulonglong)((uint)(uVar12 >> 0x10) & 6) | 0x1000029) & DAT_18001a050;
        if (1 < (byte)_DAT_18001b07c) {
          DAT_18001a050 = DAT_18001a050 & 0xffffffffffffffbf;
        }
      }
    }
    if (((uVar11 >> 0x15 & 1) != 0) && ((uVar9 >> 0x13 & 1) != 0)) {
      DAT_18001a050 = DAT_18001a050 & 0xffffffffffffff7f;
    }
  }
  return 0;
}


/* Address: 0x18000210c; Evidence: ev_0a1a60c1eeaf77bba627a079d36457d88bd1a9c8b5ab375f20459af929445957 */

/* Library Function - Single Match
    __scrt_is_ucrt_dll_in_use
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

bool __scrt_is_ucrt_dll_in_use(void)

{
  return DAT_18001bb2c != 0;
}


/* Address: 0x180002120; Evidence: ev_288d03e39cc3e3de417ff4518cb9f79655e3b0441b99c21862cc692b13ff8ba0 */

undefined8 FUN_180002120(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

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
          if (iVar4 < 1) goto LAB_18000224e;
        }
        if ((param_1->ExceptionCode == 0xe06d7363) &&
           (uVar5 = FUN_18000d8e0(0x18000f470), (int)uVar5 != 0)) {
          FUN_180002400((int *)param_1);
        }
        FUN_180002580();
        RtlUnwindEx(param_2,(PVOID)((ulonglong)puVar3[((ulonglong)uVar8 + 1) * 4] + lVar2),param_1,
                    (PVOID)(ulonglong)param_1->ExceptionCode,(PCONTEXT)param_4[5],
                    (PUNWIND_HISTORY_TABLE)param_4[8]);
        FUN_1800025b0();
      }
LAB_18000224e:
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


/* Address: 0x180002340; Evidence: ev_b5ca9ba7ec16b7e2efe768582cb95437feb76d5bc2a2728d5a631b0ee655f777 */

int FUN_180002340(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}


/* Address: 0x180002358; Evidence: ev_0b75653f9ddd920de98f4cdb484e92d0c7e68e78bbf8fcf2df740b54a0f08fff */

void FUN_180002358(PSLIST_HEADER param_1)

{
  PSLIST_ENTRY p_Var1;
  PSLIST_ENTRY_conflict p_Var2;
  
  p_Var2 = InterlockedFlushSList(param_1);
  while (p_Var2 != (PSLIST_ENTRY_conflict)0x0) {
    p_Var1 = p_Var2->Next;
    thunk_FUN_180006b50(p_Var2);
    p_Var2 = p_Var1;
  }
  return;
}


/* Address: 0x180002384; Evidence: ev_0d57413b91e11cddc06ed41e7d4a6be174c3dc9e13d68b030cfea2509af5087d */

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


/* Address: 0x1800023ac; Evidence: ev_a2ac8f1e7fc81f4ad7dbc63b905ed2ce2f8960c0ec56f35949f4a7d4dac043e2 */

bool FUN_1800023ac(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180002674();
  return pvVar1 != (LPVOID)0x0;
}


/* Address: 0x1800023c0; Evidence: ev_fd695147f2a954b22f19965b7f9c51aa5324927e5473c7638c2b9ff872325292 */

undefined1 FUN_1800023c0(void)

{
  FUN_180002610();
  return 1;
}


/* Address: 0x1800023d0; Evidence: ev_8c434f63bbbfe0a1a5c5040db9bfb59d9a5af59329b623622cd50f1002b922e5 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180002788();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x1800023ec; Evidence: ev_76944a9b428ad5b6de1621f4030f7e725d416a73572ec3a850f5c969aceecad1 */

undefined1 FUN_1800023ec(void)

{
  FUN_180002788();
  return 1;
}


/* Address: 0x180002400; Evidence: ev_beefc2f1181af5bbfb249db442961bc0988521883250c80abfc943a6519023f7 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180002400(int *param_1)

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
      FUN_180002474(*(undefined8 *)(param_1 + 10),
                    (undefined *)((longlong)*(int *)(pbVar1 + 4) + *(longlong *)(param_1 + 0xe)));
    }
  }
  return;
}


/* Address: 0x180002474; Evidence: ev_57778d09605755f8b566a3b3143965ea8e428c8aadd7d1bfb1b42167a01eb636 */

void FUN_180002474(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE)

{
                    /* WARNING: Could not recover jumptable at 0x000180002474. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180002478; Evidence: ev_b77610992f6eac8b623befd77edbb9020df2a3bc350db070f0b354de1dbc5dc8 */

/* Library Function - Single Match
    _IsExceptionObjectToBeDestroyed
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _IsExceptionObjectToBeDestroyed(longlong param_1)

{
  longlong lVar1;
  longlong *plVar2;
  
  lVar1 = FUN_180002658();
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


/* Address: 0x1800024a8; Evidence: ev_cb43d225834264458a38a3ab467090644ae253bed22f2d714159bd1da4087aa1 */

longlong FUN_1800024a8(longlong param_1,int *param_2)

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


/* Address: 0x1800024d0; Evidence: ev_580677bbcd5c9b68d9b9237e7ae670d5a1f79f7fe796fc599c657d96380746bf */

undefined8 FUN_1800024d0(undefined8 *param_1)

{
  int *piVar1;
  undefined8 uVar2;
  longlong lVar3;
  
  piVar1 = (int *)*param_1;
  if ((*piVar1 == -0x1fbcbcae) || (*piVar1 == -0x1fbcb0b3)) {
    lVar3 = FUN_180002658();
    if (0 < *(int *)(lVar3 + 0x30)) {
      lVar3 = FUN_180002658();
      *(int *)(lVar3 + 0x30) = *(int *)(lVar3 + 0x30) + -1;
    }
  }
  else if (*piVar1 == -0x1f928c9d) {
    lVar3 = FUN_180002658();
    *(int **)(lVar3 + 0x20) = piVar1;
    uVar2 = param_1[1];
    lVar3 = FUN_180002658();
    *(undefined8 *)(lVar3 + 0x28) = uVar2;
                    /* WARNING: Subroutine does not return */
    FUN_180005a1c();
  }
  return 0;
}


/* Address: 0x180002538; Evidence: ev_5084db10ebc3aec3ca970f1633e4b71917e01cfe196fefa9b3a7648580f50bb9 */

void Unwind_180002538(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_180005a1c();
}


/* Address: 0x180002580; Evidence: ev_6744b413c471491c42da81a7cdb361dca8c4b6213b1d2464ceb739b0ea311098 */

void FUN_180002580(void)

{
  FUN_1800025a0();
  return;
}


/* Address: 0x1800025a0; Evidence: ev_bdf0cb0ef79bab1bb437ea633be43fe70a9b6732808a8ddf12f669c97c11d7e6 */

void FUN_1800025a0(void)

{
  return;
}


/* Address: 0x1800025b0; Evidence: ev_992f238306ab9046128498f1c7d02d40189d0f08832dfe52d5f53e197eeaa016 */

void FUN_1800025b0(void)

{
  return;
}


/* Address: 0x1800025b4; Evidence: ev_aac3ef7f65f946de1124eec6e5f8fb51b3049ab2fba67398b147d5110ed697fe */

/* WARNING: Removing unreachable block (ram,0x0001800025c7) */
/* WARNING: Removing unreachable block (ram,0x0001800025dd) */
/* WARNING: Removing unreachable block (ram,0x0001800025e3) */
/* Library Function - Single Match
    __except_validate_context_record
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __except_validate_context_record(longlong param_1)

{
  return;
}


/* Address: 0x1800025f0; Evidence: ev_315169744e0aef20fc32ef3c753465261d06dce4204c4d779c94b6b76d84678d */

void FUN_1800025f0(undefined *param_1)

{
  if ((param_1 != (undefined *)0x0) && (param_1 != &DAT_18001b090)) {
    thunk_FUN_180006b50(param_1);
  }
  return;
}


/* Address: 0x180002610; Evidence: ev_ac73dc0d9ce621c1b9963806e650f4aa79ebdc1fa061b2d11d788f8f1daefe84 */

void FUN_180002610(void)

{
  undefined *puVar1;
  
  if (DAT_18001a070 != 0xffffffff) {
    puVar1 = (undefined *)__vcrt_FlsGetValue(DAT_18001a070);
    __vcrt_FlsSetValue(DAT_18001a070,(LPVOID)0x0);
    if ((puVar1 != (undefined *)0x0) && (puVar1 != &DAT_18001b090)) {
      thunk_FUN_180006b50(puVar1);
    }
  }
  return;
}


/* Address: 0x180002658; Evidence: ev_966de709177415e1616ee13c7264e68ec5fd460251d7fd59228c6bda1462609a */

void FUN_180002658(void)

{
  LPVOID pvVar1;
  
  pvVar1 = FUN_180002674();
  if (pvVar1 != (LPVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180002674; Evidence: ev_96eba4bbb77376e5dc2327fdb1844af382211ce505937ddbb82871abff6d0639 */

LPVOID FUN_180002674(void)

{
  DWORD dwErrCode;
  int iVar1;
  LPVOID pvVar2;
  LPVOID pvVar3;
  LPVOID pvVar4;
  
  if (DAT_18001a070 == 0xffffffff) {
    pvVar3 = (LPVOID)0x0;
  }
  else {
    dwErrCode = GetLastError();
    pvVar2 = (LPVOID)__vcrt_FlsGetValue(DAT_18001a070);
    pvVar4 = (LPVOID)0x0;
    pvVar3 = pvVar4;
    if (((pvVar2 != (LPVOID)0xffffffffffffffff) && (pvVar3 = pvVar2, pvVar2 == (LPVOID)0x0)) &&
       (iVar1 = __vcrt_FlsSetValue(DAT_18001a070,(LPVOID)0xffffffffffffffff), pvVar3 = pvVar4,
       iVar1 != 0)) {
      pvVar3 = _calloc_base(1,0x80);
      if ((pvVar3 == (LPVOID)0x0) || (iVar1 = __vcrt_FlsSetValue(DAT_18001a070,pvVar3), iVar1 == 0))
      {
        __vcrt_FlsSetValue(DAT_18001a070,(LPVOID)0x0);
        pvVar2 = pvVar3;
      }
      else {
        *(undefined4 *)((longlong)pvVar3 + 0x78) = 0xfffffffe;
        pvVar2 = pvVar4;
        pvVar4 = pvVar3;
      }
      thunk_FUN_180006b50(pvVar2);
      pvVar3 = pvVar4;
    }
    SetLastError(dwErrCode);
  }
  return pvVar3;
}


/* Address: 0x180002740; Evidence: ev_e88d64b7a70dd110401edbe1100c13edca0b77edc2dd98e51bfabd7b8e56c43e */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */
/* Library Function - Single Match
    __vcrt_initialize_ptd
   
   Library: Visual Studio 2019 Release */

uint __vcrt_initialize_ptd(void)

{
  uint uVar1;
  int iVar2;
  uint3 extraout_var;
  
  uVar1 = __vcrt_FlsAlloc(FUN_1800025f0);
  DAT_18001a070 = uVar1;
  if (uVar1 != 0xffffffff) {
    iVar2 = __vcrt_FlsSetValue(uVar1,&DAT_18001b090);
    if (iVar2 != 0) {
      _DAT_18001b108 = 0xfffffffe;
      return CONCAT31((int3)((uint)iVar2 >> 8),1);
    }
    FUN_180002788();
    uVar1 = (uint)extraout_var << 8;
  }
  return uVar1 & 0xffffff00;
}


/* Address: 0x180002788; Evidence: ev_c18212da55c3982a22a4b8bcf896ed2eee229200090b5af9384792bd585ffea7 */

undefined1 FUN_180002788(void)

{
  if (DAT_18001a070 != -1) {
    __vcrt_FlsFree(DAT_18001a070);
    DAT_18001a070 = -1;
  }
  return 1;
}


/* Address: 0x1800027b0; Evidence: ev_f0e5568f166f53c76f53637ee8964b21a9ee88cdcbce4d87405db6297112312e */

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
                      ((LPCRITICAL_SECTION)(&DAT_18001b110 + uVar2 * 0x28),4000,0);
    if ((int)uVar1 == 0) {
      uVar2 = __vcrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_18001b138 = DAT_18001b138 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 == 0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x1800027f8; Evidence: ev_3d9f5fc16433ca45af95602a64813994e4aeccf7658ff4df91582f47a90f7b71 */

/* Library Function - Single Match
    __vcrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release */

undefined8 __vcrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_18001b138;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_18001b110 + uVar1 * 0x28));
    DAT_18001b138 = DAT_18001b138 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180002830; Evidence: ev_8ab87b89d768e5a60bde7062d49e368f996fbf6ff8a0800bca358fbcf786af6c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180002830(undefined4 *param_1,undefined8 param_2,undefined8 param_3)

{
  longlong lVar1;
  undefined4 *local_18;
  undefined8 local_10;
  
  local_18 = param_1;
  local_10 = param_3;
  lVar1 = FUN_180002658();
  (**(code **)(lVar1 + 0x10))(*param_1,&local_18);
  return 0;
}


/* Address: 0x180002884; Evidence: ev_326ec3d2964471ecf7f07c2473af7c0535d1f4f8b220fb42941ddbef9193d9ac */

longlong FUN_180002884(longlong param_1,int param_2)

{
  uint uVar1;
  longlong lVar2;
  
  uVar1 = *(uint *)(param_1 + 0xc);
  do {
    if (uVar1 == 0) {
      return 0;
    }
    uVar1 = uVar1 - 1;
    lVar2 = FUN_180002658();
    lVar2 = (longlong)*(int *)(param_1 + 0x10) +
            *(longlong *)(lVar2 + 0x60) + (ulonglong)uVar1 * 0x14;
  } while ((param_2 <= *(int *)(lVar2 + 4)) || (*(int *)(lVar2 + 8) < param_2));
  return lVar2;
}


/* Address: 0x1800028e8; Evidence: ev_34262ded4c33eaada43a2d341ca54c885d9ae873b2163314b1b75cb919f5f02e */

bool FUN_1800028e8(ulonglong *param_1,longlong param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = FUN_18000318c(param_2,param_1);
  lVar2 = FUN_180002884(param_2,iVar1);
  return lVar2 != 0;
}


/* Address: 0x180002914; Evidence: ev_c4eda911a538efedd9dbfce77a9e9bd8c8b829df2a7684e2298df4ef328431bb */

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
  
  plVar2 = FUN_180002978((longlong *)param_1,(ulonglong *)param_2,(longlong)param_3,&local_res20);
  iVar1 = FUN_18000318c((longlong)param_3,(ulonglong *)param_2);
  lVar3 = FUN_180002884((longlong)param_3,iVar1);
  if (lVar3 == 0) {
    iVar1 = -1;
  }
  else {
    iVar1 = *(int *)(lVar3 + 4);
  }
  FUN_1800043d4(plVar2,(ulonglong *)param_2,(longlong)param_3,iVar1);
  return;
}


/* Address: 0x180002978; Evidence: ev_8e2c81e7268e004d1d695413b682dcc1b482851637501c03158d1c383bfb6684 */

longlong * FUN_180002978(longlong *param_1,ulonglong *param_2,longlong param_3,longlong *param_4)

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
  iVar4 = FUN_18000318c(param_3,param_2);
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
        if ((longlong)*piVar8 == (ulonglong)p_Var5->BeginAddress) goto code_r0x000180002a2f;
        uVar6 = (int)uVar7 + 1;
        uVar7 = (ulonglong)uVar6;
        piVar8 = piVar8 + 5;
      } while (uVar6 < uVar2);
    }
  } while (uVar2 <= (uint)uVar7);
code_r0x000180002a2f:
  *param_4 = *(longlong *)((longlong)*(int *)(lVar10 + 0x10 + uVar7 * 0x14) + *param_1);
  return param_4;
}


/* Address: 0x180002a64; Evidence: ev_d27dc6fd7ebe9ca9c9f57ed4a4dfc8473c732616c3b68aa985ae983234da3140 */

undefined8 *
FUN_180002a64(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
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
  iVar5 = FUN_18000318c(param_5,param_4);
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
LAB_180002aec:
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
  goto LAB_180002aec;
}


/* Address: 0x180002b9c; Evidence: ev_ec6eea5d724f9ad2d405599f2fae0e21baf2e6fa3ef2ca13f0352d47a0e35cb6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180002b9c(undefined8 *param_1,ULONG_PTR param_2,ULONG_PTR param_3,ULONG_PTR param_4,
                  ULONG_PTR param_5,ULONG_PTR param_6,int param_7,undefined8 param_8,
                  undefined8 param_9,undefined8 *param_10,byte param_11)

{
  undefined1 auStackY_e8 [32];
  EXCEPTION_RECORD local_b8;
  ulonglong local_18;
  
  local_18 = DAT_18001a000 ^ (ulonglong)auStackY_e8;
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
  local_b8.ExceptionInformation[0] = (ULONG_PTR)FUN_180004150;
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


/* Address: 0x180002ca0; Evidence: ev_2b4b8e93196879b017842965312681d57439e73cdecb3304bc540e652661b639 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180002658();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180002658();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180002658();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}


/* Address: 0x180002cdc; Evidence: ev_7aa51f3dc89ae2c1d37b3c55e8d4579b56ca2ca78f9a5674498b7eb134939aee */

void FUN_180002cdc(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180002658();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180002658();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180002658();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180002d30; Evidence: ev_cd4031831d0136ad926194c2ad94b99f38c124fe01bab63f676654d936a1201a */

undefined8 FUN_180002d30(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002658();
  return *(undefined8 *)(lVar1 + 0x60);
}


/* Address: 0x180002d44; Evidence: ev_be8f6f38fbcfb202472a7eb2299971f50b40d8d59f4817fbf4ac0f829f403d7a */

undefined8 FUN_180002d44(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002658();
  return *(undefined8 *)(lVar1 + 0x68);
}


/* Address: 0x180002d58; Evidence: ev_635b75cedcfdbad69f050424c8791624ac4266ff094ef05e9fee8a8193b2b831 */

void FUN_180002d58(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180002658();
  *(undefined8 *)(lVar1 + 0x60) = param_1;
  return;
}


/* Address: 0x180002d70; Evidence: ev_c7dc8dc47388f9dd8f675b356a7d20e946130fa61a5ded7661d60179744949fa */

void FUN_180002d70(undefined8 param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180002658();
  *(undefined8 *)(lVar1 + 0x68) = param_1;
  return;
}


/* Address: 0x180002d88; Evidence: ev_61dabbe022667cd5c674edd7dbef22545175b50cf277e8a89162b766139f7d44 */

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
  lVar2 = FUN_180002658();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180002658();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180002658();
  thunk_FUN_180003e10(param_1,&local_res8,param_3,param_4,
                      (_s_FuncInfo *)
                      ((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),0,0,0);
  return;
}


/* Address: 0x180002e10; Evidence: ev_ff0e9332cd78808f9fe3ae6f5dea87871bea481592d26683fe344fc85ea2e709 */

FARPROC FUN_180002e10(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
  pFVar4 = *(FARPROC *)(&DAT_18001b158 + uVar6 * 8);
  if (pFVar4 != (FARPROC)0xffffffffffffffff) {
    if (pFVar4 != (FARPROC)0x0) {
      return pFVar4;
    }
    for (; param_3 != param_4; param_3 = param_3 + 1) {
      uVar5 = (ulonglong)*param_3;
      hLibModule = *(HMODULE *)(&DAT_18001b140 + uVar5 * 8);
      if (hLibModule == (HMODULE)0x0) {
        lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_fibers_l1_1_1_1800102f8)[uVar5];
        hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
        if ((hLibModule != (HMODULE)0x0) ||
           (((DVar2 = GetLastError(), DVar2 == 0x57 &&
             (iVar3 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar3 != 0)) &&
            (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0)))
           ) {
          LOCK();
          lVar1 = *(longlong *)(&DAT_18001b140 + uVar5 * 8);
          *(HMODULE *)(&DAT_18001b140 + uVar5 * 8) = hLibModule;
          UNLOCK();
          if (lVar1 != 0) {
            FreeLibrary(hLibModule);
          }
          goto LAB_180002f41;
        }
        LOCK();
        *(undefined8 *)(&DAT_18001b140 + uVar5 * 8) = 0xffffffffffffffff;
        UNLOCK();
      }
      else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180002f41:
        pFVar4 = GetProcAddress(hLibModule,param_2);
        if (pFVar4 != (FARPROC)0x0) {
          LOCK();
          *(FARPROC *)(&DAT_18001b158 + uVar6 * 8) = pFVar4;
          UNLOCK();
          return pFVar4;
        }
        break;
      }
    }
    LOCK();
    *(undefined8 *)(&DAT_18001b158 + uVar6 * 8) = 0xffffffffffffffff;
    UNLOCK();
  }
  return (FARPROC)0x0;
}


/* Address: 0x180002f60; Evidence: ev_a1a1d3fc5664efb9447b4c460f227b006e04dcd9dd54f4b36bed63c0a01811ef */

/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180002e10(0,"FlsAlloc",(uint *)&DAT_1800103b8,(uint *)"FlsAlloc");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x000180002f9e. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsAlloc();
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000db70. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)(param_1);
  return;
}


/* Address: 0x180002fa8; Evidence: ev_e3b419ce6351f84a60e075b7b630b75d87607b354659d101d5a88980e40161be */

/* Library Function - Single Match
    __vcrt_FlsFree
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsFree(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE = FUN_180002e10(1,"FlsFree",(uint *)&DAT_1800103d0,(uint *)"FlsFree");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x000180002fe7. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsFree(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000db70. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180002ff0; Evidence: ev_dc08ad0d2e9c2974182934d3fa333ccaacdef3513cdf684b9cadbe7b5b0f7493 */

/* Library Function - Single Match
    __vcrt_FlsGetValue
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __vcrt_FlsGetValue(undefined4 param_1)

{
  FARPROC UNRECOVERED_JUMPTABLE;
  
  UNRECOVERED_JUMPTABLE =
       FUN_180002e10(2,"FlsGetValue",(uint *)&DAT_1800103e0,(uint *)"FlsGetValue");
  if (UNRECOVERED_JUMPTABLE == (FARPROC)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00018000302f. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    TlsGetValue(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000db70. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x180003038; Evidence: ev_5550904b772d18c2a2b8f6076c111662fd1144f6b20cfeb90b3408f1899f45ad */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsSetValue
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsSetValue(DWORD param_1,LPVOID param_2)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180002e10(3,"FlsSetValue",(uint *)&DAT_1800103f8,(uint *)"FlsSetValue");
  if (pFVar1 == (FARPROC)0x0) {
    TlsSetValue(param_1,param_2);
  }
  else {
    (*pFVar1)();
  }
  return;
}


/* Address: 0x18000308c; Evidence: ev_45c4880d28aa6304ea60cf1c5011e6fff0c9e3fc495498ab2f6fa89d31b4d565 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_InitializeCriticalSectionEx
   
   Library: Visual Studio 2017 Release */

void __vcrt_InitializeCriticalSectionEx(LPCRITICAL_SECTION param_1,DWORD param_2,undefined4 param_3)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180002e10(4,"InitializeCriticalSectionEx",(uint *)&DAT_180010410,
                         (uint *)"InitializeCriticalSectionEx");
  if (pFVar1 == (FARPROC)0x0) {
    InitializeCriticalSectionAndSpinCount(param_1,param_2);
  }
  else {
    (*pFVar1)(param_1,param_2,param_3);
  }
  return;
}


/* Address: 0x1800030f0; Evidence: ev_e0ba922f7f2f309e77800ec1924140dbec6535fa6915b3ca48500d9d51d39ccd */

void FUN_1800030f0(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + *param_1) == -2) {
    FUN_180003194(param_3,(longlong)param_2,*param_2);
  }
  return;
}


/* Address: 0x180003118; Evidence: ev_528c44cf5480b9c98898c391b528b0f3298fc2609b2b9ac94b73a36f7f0b3567 */

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
  
  plVar1 = FUN_180002978(param_1,param_2,param_3,local_res18);
  return *(undefined4 *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1);
}


/* Address: 0x180003144; Evidence: ev_9190a41b4b33cad6cc39801fb31a3e4207faa31bf57b22b2d35f1f6f2f7b98b0 */

void FUN_180003144(longlong *param_1,longlong param_2,undefined4 param_3)

{
  *(undefined4 *)((longlong)*(int *)(param_2 + 0x1c) + *param_1) = param_3;
  return;
}


/* Address: 0x180003150; Evidence: ev_25a262bc463b8199e630368b0cbc18f853c6f960ec07ebdef7abc0cbd3b2977b */

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
  
  plVar1 = FUN_180002978(param_1,param_2,param_3,local_res18);
  if (*(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) < param_4) {
    *(int *)((longlong)*(int *)(param_3 + 0x1c) + 4 + *plVar1) = param_4;
  }
  return;
}


/* Address: 0x18000318c; Evidence: ev_01ba5aa1e1a573d46188005ad514d6a426944959175f6e5f5aa9cda1c773d269 */

void FUN_18000318c(longlong param_1,ulonglong *param_2)

{
  FUN_180003194(param_1,(longlong)param_2,*param_2);
  return;
}


/* Address: 0x180003194; Evidence: ev_e28fa072a6420a29163b6d14c7b9dd678d3a4db1366b659d2f20570477bf18ef */

undefined4 FUN_180003194(longlong param_1,longlong param_2,ulonglong param_3)

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


/* Address: 0x1800031fc; Evidence: ev_be3876fda5746e8111e729a967b9a8bdc0d881041bb8379dc561ec833743c5d5 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

char FUN_1800031fc(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
    lVar2 = FUN_180002d30();
    uVar4 = iVar1 + lVar2;
  }
  if (uVar4 == 0) {
    return '\0';
  }
  iVar1 = *(int *)(param_3 + 4);
  uVar4 = uVar5;
  if (iVar1 != 0) {
    lVar2 = FUN_180002d30();
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
  if ((((*param_3 & 0x80) == 0) || ((*param_4 & 0x10) == 0)) || (DAT_18001b088 == 0)) {
    if ((*param_3 & 8) == 0) {
      if ((*param_4 & 1) == 0) {
        iVar1 = *(int *)(param_4 + 0x18);
        uVar4 = uVar5;
        if (iVar1 != 0) {
          lVar2 = FUN_180002d44();
          uVar4 = iVar1 + lVar2;
        }
        if (uVar4 != 0) {
          if ((*(longlong *)(param_1 + 0x28) != 0) && (param_2 != (undefined1 (*) [32])0x0)) {
            iVar1 = *(int *)(param_4 + 0x18);
            if (iVar1 != 0) {
              lVar2 = FUN_180002d44();
              uVar5 = iVar1 + lVar2;
            }
            if (uVar5 != 0) {
              uVar6 = (ulonglong)(((*param_4 & 4) != 0) + 1);
              goto LAB_1800033ae;
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
                  FUN_1800024a8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
        FUN_18000dfb0(param_2,pauVar3,(longlong)iVar1);
        goto LAB_1800033ae;
      }
      if ((*(undefined1 (**) [32])(param_1 + 0x28) == (undefined1 (*) [32])0x0) ||
         (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
        abort();
      }
      FUN_18000dfb0(param_2,*(undefined1 (**) [32])(param_1 + 0x28),
                    (longlong)*(int *)(param_4 + 0x14));
      uVar6 = uVar5;
      if ((*(int *)(param_4 + 0x14) != 8) || (*(longlong *)*param_2 == 0)) goto LAB_1800033ae;
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
    lVar2 = (*(code *)DAT_18001b088)();
    if ((lVar2 == 0) || (param_2 == (undefined1 (*) [32])0x0)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    *(longlong *)*param_2 = lVar2;
  }
  lVar2 = FUN_1800024a8(lVar2,(int *)(param_4 + 8));
  *(longlong *)*param_2 = lVar2;
  uVar6 = uVar5;
LAB_1800033ae:
  return (char)uVar6;
}


/* Address: 0x1800033f0; Evidence: ev_28135c5ed213311f5ee91cb5dd2c9e03d96ab80d3401c99fa5dc41f6d6dcf848 */

void FUN_1800033f0(longlong param_1,undefined1 (*param_2) [32],byte *param_3,byte *param_4)

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
  cVar1 = FUN_1800031fc(param_1,param_2,param_3,param_4);
  iVar2 = (int)CONCAT71(extraout_var,cVar1);
  if (iVar2 == 1) {
    lVar3 = FUN_1800024a8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180002d44();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_18000476c(pauVar5,UNRECOVERED_JUMPTABLE,lVar3);
  }
  else if (iVar2 == 2) {
    lVar3 = FUN_1800024a8(*(longlong *)(param_1 + 0x28),(int *)(param_4 + 8));
    iVar2 = *(int *)(param_4 + 0x18);
    if (iVar2 != 0) {
      lVar4 = FUN_180002d44();
      UNRECOVERED_JUMPTABLE = (undefined *)(lVar4 + iVar2);
    }
    FUN_180004778(pauVar5,UNRECOVERED_JUMPTABLE,lVar3,1);
  }
  return;
}


/* Address: 0x1800034b0; Evidence: ev_0093421720a20720b62b0a2b955254bb88def11ce4dcaf05d4ee64e2ccdaf7ee */

void FUN_1800034b0(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
  pauVar4 = (undefined1 (*) [32])FUN_180002978(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_1800033f0(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180002d30();
  FUN_180002b9c(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}


/* Address: 0x180003588; Evidence: ev_b111ea7b836454a7c6f214667caa0e096b3effd8d635339880153344ab9a341f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003588(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,uint *param_5
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
  
  local_58 = DAT_18001a000 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar6 = FUN_180004560(param_2,param_4,(longlong)param_5);
  if ((-2 < iVar6) && (iVar6 < (int)param_5[1])) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar8 = FUN_180002658();
      if (*(longlong *)(lVar8 + 0x20) == 0) {
        return;
      }
      lVar8 = FUN_180002658();
      param_1 = *(int **)(lVar8 + 0x20);
      lVar8 = FUN_180002658();
      local_100 = *(ULONG_PTR *)(lVar8 + 0x28);
      FUN_180002d70(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_180003a83;
      lVar8 = FUN_180002658();
      if (*(longlong *)(lVar8 + 0x38) != 0) {
        lVar8 = FUN_180002658();
        piVar12 = *(int **)(lVar8 + 0x38);
        lVar8 = FUN_180002658();
        *(undefined8 *)(lVar8 + 0x38) = 0;
        cVar4 = FUN_1800045fc((longlong)param_1,piVar12);
        if (cVar4 == '\0') {
          uVar9 = FUN_1800046e4(piVar12);
          if ((char)uVar9 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_180005a1c();
          }
          FUN_180002400(param_1);
          FUN_180004088(&local_c8);
          FUN_1800048d8(&local_c8,&DAT_180018460);
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
        FUN_180002a64(&local_90,&local_b0,iVar6,param_4,(longlong)param_5);
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
                  lVar8 = FUN_180002d44();
                  piVar12 = (int *)(lVar8 + 4 + (longlong)iVar14);
                  iVar14 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar8 = FUN_180002d44();
                  for (iVar14 = *(int *)(lVar8 + iVar14); 0 < iVar14; iVar14 = iVar14 + -1) {
                    iVar2 = *piVar12;
                    lVar8 = FUN_180002d44();
                    uVar10 = FUN_180003cf0((byte *)&local_70,(byte *)(iVar2 + lVar8),
                                           *(byte **)(param_1 + 0xc));
                    if ((int)uVar10 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_1800034b0((ULONG_PTR)param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,
                                    (byte *)&local_70,(byte *)(iVar2 + lVar8),
                                    in_stack_fffffffffffffed0);
                      goto LAB_1800038f3;
                    }
                    piVar12 = piVar12 + 1;
                  }
                  uVar13 = (int)uVar9 + 1;
                  uVar9 = (ulonglong)uVar13;
                } while (uVar13 != local_d8);
              }
            }
LAB_1800038f3:
            uVar15 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar7 = uVar7 + 1;
          } while (uVar7 < local_78);
        }
      }
      if ((0x19930520 < (*param_5 & 0x1fffffff)) &&
         (((uVar7 = param_5[8], uVar7 != 0 && (lVar8 = FUN_180002d30(), lVar8 + (int)uVar7 != 0)) ||
          (((param_5[9] & 4) != 0 && (bVar5 = FUN_1800028e8(param_4,(longlong)param_5), !bVar5))))))
      {
        if ((param_5[9] & 4) != 0) {
          lVar8 = FUN_180002658();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_180002658();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_180005a1c();
        }
        uVar7 = param_5[8];
        if (uVar7 == 0) {
          piVar12 = (int *)0x0;
        }
        else {
          lVar8 = FUN_180002d30();
          piVar12 = (int *)((int)uVar7 + lVar8);
        }
        cVar4 = FUN_1800045fc((longlong)param_1,piVar12);
        if (cVar4 == '\0') {
          plVar11 = FUN_180002978(param_2,param_4,(longlong)param_5,&local_e0);
          FUN_180002b9c(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar11,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar15,0xffffffff),0,param_4,param_6);
        }
      }
    }
    else if (param_5[3] != 0) {
      if (param_6 != 0) goto LAB_180003a83;
      FUN_180003a8c(param_1,param_2,local_100,param_4,(ULONG_PTR)param_5,iVar6);
    }
    lVar8 = FUN_180002658();
    if (*(longlong *)(lVar8 + 0x38) == 0) {
      return;
    }
  }
LAB_180003a83:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180003a8c; Evidence: ev_bd91d65a08f04427ed85063889c203310e6b3d7c5bc312885499e3dbb47224f8 */

void FUN_180003a8c(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
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
    lVar3 = FUN_180002658();
    if (*(longlong *)(lVar3 + 0x10) != 0) {
      pvVar4 = EncodePointer((PVOID)0x0);
      lVar3 = FUN_180002658();
      if ((((*(PVOID *)(lVar3 + 0x10) != pvVar4) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar1 = FUN_180002830(param_1,param_2,param_3), iVar1 != 0)
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
    FUN_180002a64(&local_60,&local_98,param_6,param_4,param_5);
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
          if ((iVar1 != 0) && (lVar3 = FUN_180002d30(), lVar3 + iVar1 != 0)) {
            iVar1 = *(int *)(pbVar5 + 4);
            if (iVar1 == 0) {
              lVar3 = 0;
            }
            else {
              lVar3 = FUN_180002d30();
              lVar3 = lVar3 + iVar1;
            }
            if (*(char *)(lVar3 + 0x10) != '\0') goto LAB_180003cb5;
          }
          if ((*pbVar5 & 0x40) == 0) {
            FUN_1800034b0((ULONG_PTR)param_1,param_2,param_3,param_4,param_5,pbVar5,(byte *)0x0,
                          (int *)local_78);
          }
        }
LAB_180003cb5:
        uVar2 = uVar2 + 1;
      } while (uVar2 < local_48);
    }
  }
  return;
}


/* Address: 0x180003cf0; Evidence: ev_b41b2778d68cd8f9e5eaad77197bb09f6b6224b5839d134c599efef178d8b680 */

undefined8 FUN_180003cf0(byte *param_1,byte *param_2,byte *param_3)

{
  int iVar1;
  longlong lVar2;
  longlong lVar3;
  longlong lVar4;
  
  iVar1 = *(int *)(param_1 + 4);
  lVar4 = 0;
  if ((iVar1 != 0) && (lVar2 = FUN_180002d30(), lVar2 + iVar1 != 0)) {
    iVar1 = *(int *)(param_1 + 4);
    lVar2 = lVar4;
    if (iVar1 != 0) {
      lVar2 = FUN_180002d30();
      lVar2 = iVar1 + lVar2;
    }
    if ((*(char *)(lVar2 + 0x10) != '\0') && (((*param_1 & 0x80) == 0 || ((*param_2 & 0x10) == 0))))
    {
      iVar1 = *(int *)(param_1 + 4);
      lVar2 = lVar4;
      if (iVar1 != 0) {
        lVar2 = FUN_180002d30();
        lVar2 = lVar2 + iVar1;
      }
      lVar3 = FUN_180002d44();
      if (lVar2 != *(int *)(param_2 + 4) + lVar3) {
        iVar1 = *(int *)(param_1 + 4);
        if (iVar1 != 0) {
          lVar4 = FUN_180002d30();
          lVar4 = iVar1 + lVar4;
        }
        iVar1 = *(int *)(param_2 + 4);
        lVar2 = FUN_180002d44();
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


/* Address: 0x180003e10; Evidence: ev_cff7f4b1fa75b198a969438e3807c6812894daf7d56ccc74aba3fd36bfc2f782 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180003e10(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180002658();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180003e7e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180003e7e:
      if (bVar5) goto LAB_180003e95;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180003e95:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180002d30(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180002d44();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180003588(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180003f21:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_180003194((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000403d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180003f21;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000403d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_1800043d4((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x180004044; Evidence: ev_10b1ca60ee53f6421b3e73e2c3581353b94bcb8213c08d3df3ac212f0255cb28 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
thunk_FUN_180003e10(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
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
  lVar2 = FUN_180002658();
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        bVar5 = *(longlong *)(param_1 + 0x18) == 0x19930520;
        goto LAB_180003e7e;
      }
    }
    else {
      bVar5 = *param_1 == -0x7fffffda;
LAB_180003e7e:
      if (bVar5) goto LAB_180003e95;
    }
    if ((0x19930521 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
       ((param_5->EHFlags & 1) != 0)) {
      return 1;
    }
  }
LAB_180003e95:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    if ((param_5->nTryBlocks == 0) &&
       ((((param_5->magicNumber_and_bbtFlags & 0x1fffffff) < 0x19930521 ||
         (iVar1 = param_5->dispESTypeList, iVar1 == 0)) ||
        (lVar2 = FUN_180002d30(), lVar2 + iVar1 == 0)))) {
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
      lVar2 = FUN_180002d44();
      pcVar4 = (code *)(lVar2 + iVar1);
      if (pcVar4 != (code *)0x0) {
        uVar3 = (*pcVar4)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar7,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180003588(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,
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
LAB_180003f21:
    __FrameHandler3::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_180003194((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) {
LAB_18000403d:
                    /* WARNING: Subroutine does not return */
        abort();
      }
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180003f21;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) || (param_5->maxState <= iVar1)) goto LAB_18000403d;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_1800043d4((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}


/* Address: 0x18000404c; Evidence: ev_9f9cab174b9c58080830c72ae436dc049aa1a92568eea0b6f677e5a9b4035edf */

undefined8 * FUN_18000404c(undefined8 *param_1,longlong param_2)

{
  *param_1 = std::exception::vftable;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180004830((longlong *)(param_2 + 8),param_1 + 1);
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x180004088; Evidence: ev_4cfa89f227045958217127277467ab03c2a7442d87d2f60b378bfaa5c5fc5887 */

undefined8 * FUN_180004088(undefined8 *param_1)

{
  param_1[2] = 0;
  param_1[1] = "bad exception";
  *param_1 = std::bad_exception::vftable;
  return param_1;
}


/* Address: 0x1800040ac; Evidence: ev_b618ce00db08933eaf0b59e34fcc9c86d4c5d4e2ab5f98f6927b25dffa66cd75 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180004830((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}


/* Address: 0x180004100; Evidence: ev_731dc27ede08065da3194b1f6425b41007f24fec27957e0fc96d44da961f9173 */

undefined8 * FUN_180004100(undefined8 *param_1,uint param_2)

{
  *param_1 = std::exception::vftable;
  FUN_1800048b0(param_1 + 1);
  if ((param_2 & 1) != 0) {
    thunk_FUN_180006b50(param_1);
  }
  return param_1;
}


/* Address: 0x180004150; Evidence: ev_58cd6749ad42f9da82e106da31ee69e796e51fa188ea7c610fe72183dcb101d4 */

undefined8 FUN_180004150(longlong param_1)

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
  
  lVar6 = FUN_180002658();
  uVar1 = *(undefined8 *)(lVar6 + 0x28);
  lVar6 = FUN_180002658();
  uVar2 = *(undefined8 *)(lVar6 + 0x20);
  piVar3 = *(int **)(param_1 + 0x50);
  lVar6 = *(longlong *)(param_1 + 0x48);
  lVar8 = *(longlong *)(param_1 + 0x40);
  plVar4 = *(longlong **)(param_1 + 0x28);
  __except_validate_context_record(lVar8);
  lVar7 = FUN_180002658();
  *(int **)(lVar7 + 0x20) = piVar3;
  lVar7 = FUN_180002658();
  *(longlong *)(lVar7 + 0x28) = lVar8;
  lVar8 = FUN_180002658();
  puVar9 = _CreateFrameInfo(local_48,*(undefined8 *)(*(longlong *)(lVar8 + 0x20) + 0x28));
  if (*(longlong *)(param_1 + 0x58) != 0) {
    FUN_180002658();
  }
  uVar10 = _CallSettingFrame();
  FUN_180002cdc((longlong)puVar9);
  if ((((*piVar3 == -0x1f928c9d) && (piVar3[6] == 4)) &&
      ((piVar3[8] == 0x19930520 || (piVar3[8] + 0xe66cfadfU < 2)))) &&
     (iVar5 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar3 + 10)), iVar5 != 0)) {
    FUN_180002400(piVar3);
  }
  lVar8 = FUN_180002658();
  *(undefined8 *)(lVar8 + 0x20) = uVar2;
  lVar8 = FUN_180002658();
  *(undefined8 *)(lVar8 + 0x28) = uVar1;
  *(undefined8 *)((longlong)*(int *)(lVar6 + 0x1c) + *plVar4) = 0xfffffffffffffffe;
  return uVar10;
}


/* Address: 0x18000433c; Evidence: ev_790a1042f27a32e8858c396707d2487558a21e938f5e455a093a652389a9ac08 */

undefined8 FUN_18000433c(undefined8 *param_1,longlong param_2,undefined4 *param_3)

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
      lVar2 = FUN_180002658();
      *(undefined4 *)(lVar2 + 0x40) = 1;
      *param_3 = 1;
      return 1;
    }
  }
  return 0;
}


/* Address: 0x1800043d4; Evidence: ev_d40fa2ab9a621aa5773bea900d28b738e10a5967090932e63892d9124c252362 */

void FUN_1800043d4(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  int iVar1;
  int iVar2;
  undefined8 uVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar3 = FUN_180002d30();
  iVar2 = FUN_1800030f0(param_1,param_2,param_3);
  lVar4 = FUN_180002658();
  *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + 1;
  while ((iVar2 != -1 && (param_4 < iVar2))) {
    if ((iVar2 < 0) || (*(int *)(param_3 + 4) <= iVar2)) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    lVar4 = FUN_180002d30();
    lVar5 = (longlong)iVar2 * 8;
    iVar2 = *(int *)(*(int *)(param_3 + 8) + lVar5 + lVar4);
    iVar1 = *(int *)(param_3 + 8);
    lVar4 = FUN_180002d30();
    if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) == 0) {
      lVar4 = 0;
    }
    else {
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002d30();
      iVar1 = *(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1);
      lVar4 = FUN_180002d30();
      lVar4 = lVar4 + iVar1;
    }
    if (lVar4 != 0) {
      FUN_180003144(param_1,param_3,iVar2);
      iVar1 = *(int *)(param_3 + 8);
      lVar4 = FUN_180002d30();
      if (*(int *)(lVar4 + lVar5 + 4 + (longlong)iVar1) != 0) {
        FUN_180002d30();
        FUN_180002d30();
      }
      _CallSettingFrame();
      FUN_180002d58(uVar3);
    }
  }
  lVar4 = FUN_180002658();
  if (0 < *(int *)(lVar4 + 0x30)) {
    lVar4 = FUN_180002658();
    *(int *)(lVar4 + 0x30) = *(int *)(lVar4 + 0x30) + -1;
  }
  if ((iVar2 != -1) && (param_4 < iVar2)) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  FUN_180003144(param_1,param_3,iVar2);
  return;
}


/* Address: 0x180004560; Evidence: ev_4f2b6619f9ee94eb3d3228c39e95471285d73b74af2808f6cc033b25970100a5 */

int FUN_180004560(longlong *param_1,ulonglong *param_2,longlong param_3)

{
  int iVar1;
  int iVar2;
  longlong local_res20;
  
  iVar1 = FUN_18000318c(param_3,param_2);
  FUN_180002978(param_1,param_2,param_3,&local_res20);
  iVar2 = GetUnwindTryBlock(param_1,param_2,param_3);
  if (iVar2 < iVar1) {
    FUN_180003144(&local_res20,param_3,iVar1);
    SetUnwindTryBlock(param_1,param_2,param_3,iVar1);
  }
  else {
    iVar1 = GetUnwindTryBlock(param_1,param_2,param_3);
  }
  return iVar1;
}


/* Address: 0x1800045fc; Evidence: ev_44d43c6da8eae8fa76a163e0e03ba3ced6f770628c6db7dedfa2cdc4bf282d2b */

undefined1 FUN_1800045fc(longlong param_1,int *param_2)

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
      lVar4 = FUN_180002d44();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_180002d44();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_180002d44();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_180002d30();
          uVar6 = FUN_180003cf0((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
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


/* Address: 0x1800046e4; Evidence: ev_f3a1323360bc406803e418f89585c866ba384379f7cc2f14ef59ef0344d4cc04 */

ulonglong FUN_1800046e4(int *param_1)

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
      lVar2 = FUN_180002d30();
      if (*(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1) == 0) {
        lVar2 = 0;
      }
      else {
        iVar1 = param_1[1];
        lVar2 = FUN_180002d30();
        iVar1 = *(int *)(lVar2 + lVar4 + 4 + (longlong)iVar1);
        lVar2 = FUN_180002d30();
        lVar2 = lVar2 + iVar1;
      }
      iVar1 = FUN_180002340(lVar2 + 8,0x18001aa28);
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


/* Address: 0x18000476c; Evidence: ev_461a096318f793a821cf4d93d578bba5ff4158b4f764dfb8fe37cf5e0fa00828 */

void FUN_18000476c(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3)

{
                    /* WARNING: Could not recover jumptable at 0x000180004772. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3);
  return;
}


/* Address: 0x180004778; Evidence: ev_7463acbc3b9357cc7c02884792f86400f3962e71ee15804705910ea990864c20 */

void FUN_180004778(undefined8 param_1,undefined *UNRECOVERED_JUMPTABLE,undefined8 param_3,
                  undefined4 param_4)

{
                    /* WARNING: Could not recover jumptable at 0x000180004784. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*(code *)UNRECOVERED_JUMPTABLE)(param_1,param_3,param_4);
  return;
}


/* Address: 0x180004790; Evidence: ev_b33d64f1a61fffef032312bdcb9222fd5e482e74c45a9e68810ad940d5ec95d6 */

char * FUN_180004790(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}


/* Address: 0x1800047f0; Evidence: ev_d06831c056679daf0eb5bdd3b7ca11ec6d0642bd4cac86425caa7628844ab75c */

/* Library Function - Single Match
    _CallSettingFrame
   
   Library: Visual Studio */

void _CallSettingFrame(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_180002580();
  (*pcVar1)();
  FUN_1800025b0();
  FUN_180002580();
  return;
}


/* Address: 0x180004830; Evidence: ev_311a420664b3c9ceea4f70de5236fcc33cdd121bc950a086a09040aea7cddcda */

void FUN_180004830(longlong *param_1,longlong *param_2)

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
      FUN_180005a60(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_180006b50((LPVOID)0x0);
  }
  return;
}


/* Address: 0x1800048b0; Evidence: ev_14fb65c11a9b199aebf4828732570a46255871dafc9c1c430e770e2a6a99ebb4 */

void FUN_1800048b0(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180006b50((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}


/* Address: 0x1800048d8; Evidence: ev_16003ec0dac595569b6b61a55b761b768cd529d62e22505740fdb6710ae0f88f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800048d8(longlong *param_1,byte *param_2)

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


/* Address: 0x180004980; Evidence: ev_b672d9742514c3d2853ae07971325c850db1b1345946fb0aa811f04f8d1cef31 */

longlong * FUN_180004980(longlong *param_1,longlong *param_2)

{
  uint uVar1;
  undefined *puVar2;
  longlong lVar3;
  
  *(undefined1 *)(param_1 + 3) = 0;
  puVar2 = PTR_DAT_18001a200;
  if (param_2 != (longlong *)0x0) {
    lVar3 = param_2[1];
    param_1[1] = *param_2;
    param_1[2] = lVar3;
    return param_1;
  }
  if (DAT_18001b304 == 0) {
    param_1[1] = (longlong)PTR_PTR_18001a1f8;
    param_1[2] = (longlong)puVar2;
    return param_1;
  }
  lVar3 = FUN_180006648();
  *param_1 = lVar3;
  param_1[1] = *(longlong *)(lVar3 + 0x90);
  param_1[2] = *(longlong *)(lVar3 + 0x88);
  __acrt_update_locale_info(lVar3,param_1 + 1);
  FUN_180006880(*param_1,param_1 + 2);
  uVar1 = *(uint *)(*param_1 + 0x3a8);
  if ((uVar1 & 2) == 0) {
    *(uint *)(*param_1 + 0x3a8) = uVar1 | 2;
    *(undefined1 *)(param_1 + 3) = 1;
  }
  return param_1;
}


/* Address: 0x180004a40; Evidence: ev_eb5a9bffeb84de85cd6906d541d94a95e05960987263a471ad1fc4e6ca948677 */

undefined8 FUN_180004a40(longlong param_1,longlong param_2)

{
  undefined4 *puVar1;
  
  if ((param_1 == 0) || (param_2 == 0)) {
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 0x16;
    FUN_180005ff8();
  }
  return 0x7fffffff;
}


/* Address: 0x180004a70; Evidence: ev_00879117a3299e1aa52f071882bcde066c3c3cbd240683e48c1884315dd5f354 */

void FUN_180004a70(byte *param_1,byte *param_2)

{
  byte bVar1;
  byte bVar2;
  uint uVar3;
  uint uVar4;
  
  if (DAT_18001b304 != 0) {
    FUN_180004ae0(param_1,param_2,(undefined8 *)0x0);
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
  FUN_180004a40((longlong)param_1,(longlong)param_2);
  return;
}


/* Address: 0x180004ae0; Evidence: ev_925db3bdd8391dbcd066088a6248b302fa678dd8ff57fc88e0de04b8873f66df */

int FUN_180004ae0(byte *param_1,byte *param_2,undefined8 *param_3)

{
  byte bVar1;
  int iVar2;
  undefined4 *puVar3;
  longlong local_28;
  undefined *local_20;
  longlong lStack_18;
  char local_10;
  
  if ((param_1 == (byte *)0x0) || (param_2 == (byte *)0x0)) {
    puVar3 = (undefined4 *)FUN_1800061a0();
    *puVar3 = 0x16;
    FUN_180005ff8();
    return 0x7fffffff;
  }
  local_10 = '\0';
  if (param_3 == (undefined8 *)0x0) {
    if (DAT_18001b304 == 0) {
      local_20 = PTR_PTR_18001a1f8;
      local_10 = '\0';
    }
    else {
      local_28 = FUN_180006648();
      local_20 = *(undefined **)(local_28 + 0x90);
      lStack_18 = *(longlong *)(local_28 + 0x88);
      __acrt_update_locale_info(local_28,(longlong *)&local_20);
      FUN_180006880(local_28,&lStack_18);
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


/* Address: 0x180004c00; Evidence: ev_14806072b9ca43a1ffccb9e649c1ad4c6440bc63837ec7e047a42dd830ebe671 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004c00(undefined8 *param_1,undefined8 *param_2)

{
  for (; param_1 != param_2; param_1 = param_1 + 1) {
    if ((code *)*param_1 != (code *)0x0) {
      (*(code *)*param_1)();
    }
  }
  return;
}


/* Address: 0x180004c38; Evidence: ev_0f2106219b1c03422465f527d7962f02a0875fd24ba9b6e6af1136af4abb44ce */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180004c38(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x180004c74; Evidence: ev_cbb24a17dd569614a952975196d30f8f6a5790bd34632adc3eb10aee74331bfe */

/* Library Function - Single Match
    _seh_filter_dll
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined4 _seh_filter_dll(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  
  if (param_1 != -0x1f928c9d) {
    return 0;
  }
  uVar1 = FUN_180004c88(-0x1f928c9d,param_2);
  return uVar1;
}


/* Address: 0x180004c88; Evidence: ev_a29447706ecca10bf76675fe2405b10ea839fc080abdf68fc86ee66abf34a78d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined4 FUN_180004c88(int param_1,undefined8 param_2)

{
  undefined4 uVar1;
  int *piVar2;
  code *pcVar3;
  undefined8 uVar4;
  undefined8 *puVar5;
  int *piVar6;
  int *piVar7;
  undefined4 uVar8;
  
  puVar5 = FUN_1800066a8();
  if (puVar5 != (undefined8 *)0x0) {
    piVar2 = (int *)*puVar5;
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
          uVar4 = puVar5[1];
          puVar5[1] = param_2;
          if (piVar6[1] == 8) {
            for (piVar7 = piVar2 + 0xc; piVar7 != piVar2 + 0x30; piVar7 = piVar7 + 4) {
              piVar7[2] = 0;
              piVar7[3] = 0;
            }
            uVar1 = *(undefined4 *)(puVar5 + 2);
            if (*piVar6 == -0x3fffff73) {
              uVar8 = 0x82;
LAB_180004dc6:
              *(undefined4 *)(puVar5 + 2) = uVar8;
            }
            else {
              if (*piVar6 == -0x3fffff72) {
                uVar8 = 0x83;
                goto LAB_180004dc6;
              }
              if (*piVar6 == -0x3fffff71) {
                uVar8 = 0x86;
                goto LAB_180004dc6;
              }
              if (*piVar6 == -0x3fffff70) {
                uVar8 = 0x81;
                goto LAB_180004dc6;
              }
              if (*piVar6 == -0x3fffff6f) {
                uVar8 = 0x84;
                goto LAB_180004dc6;
              }
              if (*piVar6 == -0x3fffff6e) {
                uVar8 = 0x8a;
                goto LAB_180004dc6;
              }
              if (*piVar6 == -0x3fffff6d) {
                uVar8 = 0x85;
                goto LAB_180004dc6;
              }
              if (*piVar6 == -0x3ffffd4c) {
                uVar8 = 0x8e;
                goto LAB_180004dc6;
              }
              uVar8 = uVar1;
              if (*piVar6 == -0x3ffffd4b) {
                uVar8 = 0x8d;
                goto LAB_180004dc6;
              }
            }
            (*pcVar3)(8,uVar8);
            *(undefined4 *)(puVar5 + 2) = uVar1;
          }
          else {
            piVar6[2] = 0;
            piVar6[3] = 0;
            (*pcVar3)(piVar6[1]);
          }
          puVar5[1] = uVar4;
        }
        return 0xffffffff;
      }
    }
  }
  return 0;
}


/* Address: 0x180004df4; Evidence: ev_4cd80519216b98f9566e202d09322e183880d474bdea72916ca2a12733d3bc95 */

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
  FUN_180004e2c(param_3);
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180004e2c; Evidence: ev_08e198ae9fa4ff54a6cac34092d575e2b99617ad621707638d129926ca212856 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180004e2c(undefined8 *param_1)

{
  byte bVar1;
  undefined *puVar2;
  
  if (DAT_18001b198 != '\0') {
    return;
  }
  LOCK();
  DAT_18001b188 = 1;
  UNLOCK();
  if (*(int *)*param_1 == 0) {
    if (DAT_18001b190 != DAT_18001a000) {
      bVar1 = (byte)DAT_18001a000 & 0x3f;
      (*(code *)((DAT_18001a000 ^ DAT_18001b190) >> bVar1 |
                (DAT_18001a000 ^ DAT_18001b190) << 0x40 - bVar1))(0,0,0);
    }
    puVar2 = &DAT_18001b2c8;
  }
  else {
    if (*(int *)*param_1 != 1) goto LAB_180004e9b;
    puVar2 = &DAT_18001b2e0;
  }
  FUN_1800057d4(puVar2);
LAB_180004e9b:
  if (*(int *)*param_1 == 0) {
    FUN_180004c00((undefined8 *)&DAT_18000f2f8,(undefined8 *)&DAT_18000f318);
  }
  FUN_180004c00((undefined8 *)&DAT_18000f320,(undefined8 *)&DAT_18000f328);
  if (*(int *)param_1[1] == 0) {
    DAT_18001b198 = '\x01';
    *(undefined1 *)param_1[2] = 1;
  }
  return;
}


/* Address: 0x180004eec; Evidence: ev_5e62f5ac0bcebe5e5fb915eed888b54374b63186ff2e061c2ccd0f0e5e8e1df2 */

void FUN_180004eec(uint param_1,undefined4 param_2,int param_3)

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
      FUN_180005000(param_1);
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
    bVar2 = FUN_180006a98();
    if ((int)CONCAT71(extraout_var,bVar2) == 1) {
      bVar2 = false;
    }
    else {
      uVar3 = FUN_180006a64();
      bVar2 = (char)uVar3 == '\0';
    }
    if (local_res18[0] == 0) {
      FUN_180004fd0(param_1,bVar2);
      pcVar1 = (code *)swi(3);
      (*pcVar1)();
      return;
    }
  }
  return;
}


/* Address: 0x180004fd0; Evidence: ev_930adcdbee0c905dcc630e9078fddbd951040806b245a970c9e7b011ce713232 */

void FUN_180004fd0(UINT param_1,char param_2)

{
  HANDLE hProcess;
  
  if (param_2 != '\0') {
    hProcess = GetCurrentProcess();
    TerminateProcess(hProcess,param_1);
  }
  FUN_180005000(param_1);
                    /* WARNING: Subroutine does not return */
  ExitProcess(param_1);
}


/* Address: 0x180005000; Evidence: ev_d5d1e7bbecdf144ae2aa797dac59c6547b994af2382035a90f38bd4b1f897713 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005000(uint param_1)

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


/* Address: 0x180005064; Evidence: ev_8f1c69434c2122b2305c2282f59dd4048864a177d81522822d3953d96c7228ee */

void FUN_180005064(undefined8 param_1)

{
  DAT_18001b190 = param_1;
  return;
}


/* Address: 0x18000506c; Evidence: ev_1c306193cffa70b5f1dff6f525abe7cf057e32b657d6c7726f324e4703c427c1 */

void FUN_18000506c(void)

{
  FUN_180004eec(0,0,1);
  return;
}


/* Address: 0x18000507c; Evidence: ev_109e9acf3f990eef5373c24e6067b5c96eb8f621cb785ad8b056a4284d9aef28 */

void FUN_18000507c(uint param_1)

{
  FUN_180004eec(param_1,2,0);
  return;
}


/* Address: 0x180005088; Evidence: ev_01ed5c9c6c08f421cae3ab508cfc5b7e5738cd5cc0a4220d07a62072cb8984f5 */

undefined4 FUN_180005088(void)

{
  return DAT_18001b188;
}


/* Address: 0x180005090; Evidence: ev_bfb08a87b6969aefc6d5d3f30a21c07b0aa4e472c1cead6d2325f04dcf12b1b3 */

void FUN_180005090(char *param_1,undefined8 *param_2,char *param_3,longlong *param_4,
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
      iVar5 = FUN_180008438((int)cVar3);
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
        goto LAB_180005142;
      }
    }
    param_1 = pcVar6;
  } while ((bVar2) || ((cVar3 != ' ' && (cVar3 != '\t'))));
  if (param_3 != (char *)0x0) {
    param_3[-1] = '\0';
  }
LAB_180005142:
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
        iVar5 = FUN_180008438((int)*pcVar6);
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


/* Address: 0x180005250; Evidence: ev_5ef38d8981c87300aff6dc002a5cf0c190795c48962ad0aa3f74b0e4a101601d */

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
      FUN_180006b50((LPVOID)0x0);
      return pvVar2;
    }
  }
  return (LPVOID)0x0;
}


/* Address: 0x1800052b0; Evidence: ev_194e346d27cfc4142ce4538c5d3d7fb898b4714e82b86cee6718bf432cbf43cd */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_1800052b0(int param_1)

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
    puVar3 = (undefined4 *)FUN_1800061a0();
    *puVar3 = 0x16;
    FUN_180005ff8();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_180007754((HMODULE)0x0,&DAT_18001b1a0,0x104);
  _DAT_18001b590 = &DAT_18001b1a0;
  if ((DAT_18001b5b0 == (char *)0x0) || (pcVar6 = DAT_18001b5b0, *DAT_18001b5b0 == '\0')) {
    pcVar6 = &DAT_18001b1a0;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_180005090(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    puVar3 = (undefined4 *)FUN_1800061a0();
    uVar7 = 0xc;
    *puVar3 = 0xc;
  }
  else {
    FUN_180005090(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180006f10(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_180006b50(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_180006b50(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_18001b598 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_18001b598 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_18001b5a0 = plVar2;
      FUN_180006b50((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_180005415;
    }
    _DAT_18001b598 = (int)local_res18 + -1;
    DAT_18001b5a0 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_180005415:
  FUN_180006b50(plVar4);
  return uVar7;
}


/* Address: 0x180005430; Evidence: ev_bdd14647d7f98abbecedf794b50ec6b49021954c70e2c935cfeb7df6169d2bfe */

undefined8 FUN_180005430(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001b2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800085e8();
    if (pcVar2 == (char *)0x0) {
      FUN_180006b50((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_1800054a4(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001b2a8;
        puVar1 = DAT_18001b2c0;
      }
      DAT_18001b2c0 = puVar1;
      DAT_18001b2a8 = puVar4;
      FUN_180006b50((LPVOID)0x0);
      FUN_180006b50(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x1800054a4; Evidence: ev_b665885e6f90a22fb27d09b77b59168c83633113054efcb2bd84fc9860f110a8 */

undefined8 * FUN_1800054a4(char *param_1)

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
LAB_180005507:
    FUN_180006b50((LPVOID)0x0);
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
          FUN_180006b50((LPVOID)0x0);
          goto LAB_180005507;
        }
        uVar5 = FUN_180005a60(pcVar4,uVar8,(longlong)param_1);
        if ((int)uVar5 != 0) {
                    /* WARNING: Subroutine does not return */
          _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
        }
        *puVar9 = pcVar4;
        puVar9 = puVar9 + 1;
        FUN_180006b50((LPVOID)0x0);
      }
    }
    FUN_180006b50((LPVOID)0x0);
  }
  return puVar3;
}


/* Address: 0x1800055b8; Evidence: ev_e7d5d834c4524d218ec1b79a4c9735b33d1a6c5902f01da114431cc3336d1fb9 */

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
      FUN_180006b50(pvVar1);
      puVar2 = puVar2 + 1;
      pvVar1 = (LPVOID)*puVar2;
    }
    FUN_180006b50(param_1);
  }
  return;
}


/* Address: 0x1800055fc; Evidence: ev_50b9d5db213cbc6fa46ff201010de7af6e8db7bf82b795f98a4dd7a58d0aa694 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001b2c0) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x180005618; Evidence: ev_ac025f617f82916dd17751571e282a77f35f7ac6621e6cc46084bf96c49b7e5c */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001b2b8) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}


/* Address: 0x180005634; Evidence: ev_d280de51aa78b60defdaba14490d202dcbf6a57574b93b48298f88109cc1bfc1 */

void FUN_180005634(void)

{
  uninitialize_environment_internal<>(&DAT_18001b2a8);
  uninitialize_environment_internal<>((undefined8 *)&DAT_18001b2b0);
  free_environment<>(DAT_18001b2c0);
  free_environment<>(DAT_18001b2b8);
  return;
}


/* Address: 0x180005678; Evidence: ev_fabbdd1bcca9b4a26d534c4ea01ba47d95a214017c3ea546fb50ef0ce52e87c5 */

undefined8 thunk_FUN_180005430(void)

{
  undefined8 *puVar1;
  char *pcVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  
  uVar3 = 0;
  if (DAT_18001b2a8 == (undefined8 *)0x0) {
    __acrt_initialize_multibyte();
    pcVar2 = FUN_1800085e8();
    if (pcVar2 == (char *)0x0) {
      FUN_180006b50((LPVOID)0x0);
      uVar3 = 0xffffffff;
    }
    else {
      puVar4 = FUN_1800054a4(pcVar2);
      puVar1 = puVar4;
      if (puVar4 == (undefined8 *)0x0) {
        uVar3 = 0xffffffff;
        puVar4 = DAT_18001b2a8;
        puVar1 = DAT_18001b2c0;
      }
      DAT_18001b2c0 = puVar1;
      DAT_18001b2a8 = puVar4;
      FUN_180006b50((LPVOID)0x0);
      FUN_180006b50(pcVar2);
    }
  }
  else {
    uVar3 = 0;
  }
  return uVar3;
}


/* Address: 0x180005680; Evidence: ev_4b2038b6dc5c3f9a640e90881de4c4c6ddbab8e6b7a5a05b10564c0acb32e03d */

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
  uVar1 = FUN_1800056bc(param_3);
  __acrt_unlock(*param_4);
  return uVar1 & 0xffffffff;
}


/* Address: 0x1800056bc; Evidence: ev_504132926b0636d39a823e8af8a8d964cfabe30c37cb7654f7ebe4c986500229 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800056bc(undefined8 *param_1)

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
  
  uVar1 = DAT_18001a000;
  puVar8 = *(ulonglong **)*param_1;
  if (puVar8 == (ulonglong *)0x0) {
    uVar2 = 0xffffffff;
  }
  else {
    bVar5 = (byte)DAT_18001a000 & 0x3f;
    puVar10 = (ulonglong *)
              ((DAT_18001a000 ^ *puVar8) >> bVar5 | (DAT_18001a000 ^ *puVar8) << 0x40 - bVar5);
    puVar8 = (ulonglong *)
             ((DAT_18001a000 ^ puVar8[1]) >> bVar5 | (DAT_18001a000 ^ puVar8[1]) << 0x40 - bVar5);
    if ((longlong)puVar10 - 1U < 0xfffffffffffffffe) {
      uVar7 = (uint)DAT_18001a000 & 0x3f;
      puVar9 = puVar8;
      uVar3 = DAT_18001a000;
      puVar13 = puVar10;
      while (puVar8 = puVar8 + -1, puVar10 <= puVar8) {
        if (*puVar8 != uVar1) {
          uVar3 = *puVar8 ^ uVar3;
          *puVar8 = uVar1;
          (*(code *)(uVar3 >> (sbyte)uVar7 | uVar3 << 0x40 - (sbyte)uVar7))();
          uVar7 = (uint)DAT_18001a000 & 0x3f;
          uVar11 = DAT_18001a000 ^ **(ulonglong **)*param_1;
          uVar3 = DAT_18001a000 ^ (*(ulonglong **)*param_1)[1];
          sVar6 = (sbyte)uVar7;
          puVar12 = (ulonglong *)(uVar11 >> sVar6 | uVar11 << 0x40 - sVar6);
          puVar4 = (ulonglong *)(uVar3 >> sVar6 | uVar3 << 0x40 - sVar6);
          uVar3 = DAT_18001a000;
          if ((puVar12 != puVar13) || (puVar4 != puVar9)) {
            puVar8 = puVar4;
            puVar9 = puVar4;
            puVar10 = puVar12;
            puVar13 = puVar12;
          }
        }
      }
      if (puVar10 != (ulonglong *)0xffffffffffffffff) {
        FUN_180006b50(puVar10);
        uVar3 = DAT_18001a000;
      }
      **(ulonglong **)*param_1 = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 8) = uVar3;
      *(ulonglong *)(*(longlong *)*param_1 + 0x10) = uVar3;
    }
    uVar2 = 0;
  }
  return uVar2;
}


/* Address: 0x1800057d4; Evidence: ev_3ddecfb0bb8718b12d2245624988005f62defa6ba6f82ad71f0daaa1747d13d5 */

void FUN_1800057d4(undefined8 param_1)

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


/* Address: 0x180005818; Evidence: ev_c5f759128aab9a5dfb1fb053c8c95b72160b48be9d577a9f73c773acf852b5cf */

/* Library Function - Single Match
    _initialize_onexit_table
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _initialize_onexit_table(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = DAT_18001a000;
  if (param_1 == (longlong *)0x0) {
    return 0xffffffff;
  }
  if (*param_1 == param_1[2]) {
    *param_1 = DAT_18001a000;
    param_1[1] = lVar1;
    param_1[2] = lVar1;
  }
  return 0;
}


/* Address: 0x180005840; Evidence: ev_325755f4bb9d119d0a25cd83b25bd52d82ff4addbd3f18c9fcfcf980b9f009eb */

undefined8 FUN_180005840(void)

{
  DAT_18001b308 = &PTR_DAT_18001a0a0;
  return 0x18001a001;
}


/* Address: 0x180005860; Evidence: ev_1b128cad3808841ee31c484681aad634fb3087cefb408a06eabb23191d807340 */

undefined8 FUN_180005860(void)

{
  undefined8 uVar1;
  
  _initialize_onexit_table((longlong *)&DAT_18001b2c8);
  uVar1 = _initialize_onexit_table((longlong *)&DAT_18001b2e0);
  return CONCAT71((int7)((ulonglong)uVar1 >> 8),1);
}


/* Address: 0x180005890; Evidence: ev_c02bc3dba191f08368caebc86cfe650bfd6e02e53ae0a048cb1963e3d8ca0a0b */

undefined1 FUN_180005890(void)

{
  return 1;
}


/* Address: 0x1800058a0; Evidence: ev_39385485ceae56e2ab76503e09d20e997930a65965b9c73eb71f616f19820a16 */

undefined1 FUN_1800058a0(void)

{
  FUN_180005634();
  return 1;
}


/* Address: 0x1800058b0; Evidence: ev_409e5eecaf2c2a51ec3f8a4c38334d69ae10923121bad51c34ceb79e9950cad1 */

undefined1 FUN_1800058b0(void)

{
  undefined8 uVar1;
  
  uVar1 = DAT_18001a000;
  FUN_180005e9c(DAT_18001a000);
  FUN_180009050(uVar1);
  FUN_180009184(uVar1);
  FUN_180009400(uVar1);
  FUN_180005064(uVar1);
  return 1;
}


/* Address: 0x1800058f0; Evidence: ev_09e9e4a70b08de152fb34c8884d89cc89a867f84560fe04580143f500c0c6cce */

void FUN_1800058f0(void)

{
  __vcrt_uninitialize('\0');
  return;
}


/* Address: 0x180005900; Evidence: ev_9594b469abac0ed54a750d8dfe61448e1d0c43028d51e5178de1a559772bed30 */

undefined8 FUN_180005900(void)

{
  uint uVar1;
  ulonglong uVar2;
  
  LOCK();
  uVar1 = *DAT_18001b580;
  uVar2 = (ulonglong)uVar1;
  *DAT_18001b580 = *DAT_18001b580 - 1;
  UNLOCK();
  if ((uVar1 == 1) && (DAT_18001b580 != (uint *)&DAT_18001a210)) {
    uVar2 = FUN_180006b50(DAT_18001b580);
    DAT_18001b580 = (uint *)&DAT_18001a210;
  }
  return CONCAT71((int7)(uVar2 >> 8),1);
}


/* Address: 0x180005940; Evidence: ev_d801ee63c189ad3d85437f95df7cff24c0b3ae0482781d244b89c65ce895a8b9 */

undefined1 FUN_180005940(void)

{
  FUN_180006b50(DAT_18001bac8);
  DAT_18001bac8 = (LPVOID)0x0;
  FUN_180006b50(DAT_18001bad0);
  DAT_18001bad0 = (LPVOID)0x0;
  FUN_180006b50(DAT_18001b5a0);
  DAT_18001b5a0 = (LPVOID)0x0;
  FUN_180006b50(DAT_18001b5a8);
  DAT_18001b5a8 = (LPVOID)0x0;
  return 1;
}


/* Address: 0x18000599c; Evidence: ev_5074e677133f4ae82daadef50939fc41aa2ad88b6f94ff9114470ddfa191a41d */

void FUN_18000599c(void)

{
  FUN_180008f50(&PTR_FUN_180010630,(undefined8 *)&DAT_180010730);
  return;
}


/* Address: 0x1800059b0; Evidence: ev_1bfc76e0ca9b148916af675a1e774b8b6161e08d044f2a80e5642be734040de5 */

bool FUN_1800059b0(void)

{
  PVOID pvVar1;
  
  pvVar1 = FUN_1800066a8();
  return pvVar1 != (PVOID)0x0;
}


/* Address: 0x1800059c4; Evidence: ev_d9a2f6dca1bdfe8054a21835f1752f054949afe6108ea7452943d186651bb0c9 */

undefined1 FUN_1800059c4(void)

{
  FUN_1800065f8();
  return 1;
}


/* Address: 0x1800059d4; Evidence: ev_289beba2048374053506e5b541c8efdcd5b064a9d8ff2b4440bba2aeb57ab9d8 */

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
    if (DAT_18001bac0 != 0) {
      iVar1 = common_flush_all(true);
      in_RAX = CONCAT44(extraout_var,iVar1);
    }
    return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
  }
  uVar2 = FUN_180008fd0(0x180010630,0x180010730);
  return uVar2;
}


/* Address: 0x180005a0c; Evidence: ev_1e9993406e586021e9da4a41cefc7e90de2ad3430d0a4e0db493e5a0f28860af */

undefined4 FUN_180005a0c(void)

{
  undefined4 uVar1;
  
  uVar1 = FUN_1800067f0();
  return CONCAT31((int3)((uint)uVar1 >> 8),1);
}


/* Address: 0x180005a1c; Evidence: ev_d370cae0e5aa19003b1fee448f1a4e81aa2094d90f4a61ac9cce7902f3aedff9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005a1c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006648();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180005a40; Evidence: ev_0b471f61c93560d27107439ad11e9f5275fe80a475cb9285bc0371a06c93f6a2 */

void thunk_FUN_180006b50(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001b678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180006060(DVar2);
    puVar4 = (uint *)FUN_1800061a0();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x180005a50; Evidence: ev_86d21d37e76d6f5a7cabd1df6b72f2b8b9cc57969c5ad648f359bf7b0d1d50e8 */

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
      pvVar3 = HeapAlloc(DAT_18001b678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180009010(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_1800061a0();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180005a60; Evidence: ev_f532e8f520ce6f41366285bbbd7fb76ba337ef9b7ba7e0779a9a1b11e0f0e995 */

undefined8 FUN_180005a60(char *param_1,longlong param_2,longlong param_3)

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
      puVar2 = (undefined4 *)FUN_1800061a0();
      *puVar2 = 0x22;
      FUN_180005ff8();
      return 0x22;
    }
    *param_1 = '\0';
  }
  puVar2 = (undefined4 *)FUN_1800061a0();
  *puVar2 = 0x16;
  FUN_180005ff8();
  return 0x16;
}


/* Address: 0x180005ae0; Evidence: ev_0249163a7ffa053bd80f1c2f62c2891a82996a3180bdf51f43f3d771f19aa902 */

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
    FUN_1800091a4(0x16);
  }
  if ((DAT_18001a080 & 2) != 0) {
    BVar2 = IsProcessorFeaturePresent(0x17);
    puVar4 = auStack_28;
    if (BVar2 != 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(7);
      puVar4 = auStack_20;
    }
    *(undefined8 *)(puVar4 + -8) = 0x180005b2b;
    FUN_180005d2c(3,0x40000015,1);
  }
  *(undefined8 *)(puVar4 + -8) = 0x180005b35;
  FUN_18000507c(3);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}


/* Address: 0x180005b40; Evidence: ev_7106ad249947651e02ebf99a0c5d5db3ce77c1b95582a9375267dab5cf58e876 */

longlong FUN_180005b40(longlong *param_1)

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
    p_Var1 = FUN_180006738(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
    if (p_Var1 == (__acrt_ptd *)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return *param_1;
}


/* Address: 0x180005bb0; Evidence: ev_90e82a959504d6099b4c7474135b902fc8675843ce95db2abe2ac69e86cb5dfd */

void FUN_180005bb0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005b40(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180006848(lVar1,param_1 + 3,param_1[1]);
  FUN_1800068b4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}


/* Address: 0x180005c30; Evidence: ev_0c86e4a2b0846bd3ba6efc91f5f13a629bd4bc60bbee78ad74ae957ac4ed3d9b */

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
      pvVar3 = HeapAlloc(DAT_18001b678,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180009010(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_1800061a0();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180005c40; Evidence: ev_cf6f358590bc6d81c1b1489277de5366476f8bd14e77c3c7ccf172c193c4ea5e */

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


/* Address: 0x180005c74; Evidence: ev_4dfb5005fa1e492be5725767161ddbacde12ccecc9ad0cbb129dd4c1abd9f0ea */

__acrt_ptd * FUN_180005c74(longlong *param_1)

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
    p_Var1 = FUN_180006738(local_res8,lVar2);
    *param_1 = (longlong)p_Var1;
    SetLastError(local_res8[0]);
  }
  return p_Var1;
}


/* Address: 0x180005ce0; Evidence: ev_468999c20192196dc25fa2ef452189731cb3acc77a4cc2721599ee2c70ea376f */

longlong FUN_180005ce0(longlong param_1,longlong param_2)

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


/* Address: 0x180005d2c; Evidence: ev_0bb4506dde53e130469f095d35558b2fb6e7b9748f7fdb2dc2c0488720fa2303 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005d2c(int param_1,DWORD param_2,DWORD param_3)

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
  
  local_28 = DAT_18001a000 ^ (ulonglong)auStackY_608;
  if (param_1 != -1) {
    FUN_180001c9c();
  }
  FUN_18000dbf0((undefined1 (*) [32])&local_598,0,0x98);
  FUN_18000dbf0((undefined1 (*) [32])&local_4f8,0,0x4d0);
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
    FUN_180001c9c();
  }
  return;
}


/* Address: 0x180005e9c; Evidence: ev_d45f12f0d838373faeeaa8e11418f1239b701f7c6019e1f2a0c2cb1c6d0f2cb8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005e9c(undefined8 param_1)

{
  _DAT_18001b2f8 = param_1;
  return;
}


/* Address: 0x180005ea4; Evidence: ev_c5c12b9a77f50a1670237c2a3974bc81d32e9beb1faa4f7a5a0dbef2ab58ddb7 */

void FUN_180005ea4(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
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
  local_20 = DAT_18001b304 == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_18001a1f8;
    puStack_28 = PTR_DAT_18001a200;
  }
  FUN_180005f40(param_1,param_2,param_3,param_4,param_5,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar1 = FUN_180005b40(local_48);
    *(undefined4 *)(lVar1 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar1 = FUN_180005b40(local_48);
    *(undefined4 *)(lVar1 + 0x24) = local_14;
  }
  return;
}


/* Address: 0x180005f40; Evidence: ev_f6c21a7059cb6ac979a3575e5c7a85edf6a9a94553095a4ebfe82198471d2412 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005f40(wchar_t *param_1,wchar_t *param_2,wchar_t *param_3,uint param_4,uintptr_t param_5
                  ,longlong *param_6)

{
  __acrt_ptd *p_Var1;
  ulonglong *puVar2;
  byte bVar3;
  code *pcVar4;
  
  p_Var1 = FUN_180005c74(param_6);
  if ((p_Var1 == (__acrt_ptd *)0x0) || (pcVar4 = *(code **)(p_Var1 + 0x3b8), pcVar4 == (code *)0x0))
  {
    puVar2 = (ulonglong *)FUN_180005ce0(0x18001b2f8,(longlong)param_6);
    bVar3 = (byte)DAT_18001a000 & 0x3f;
    pcVar4 = (code *)((*puVar2 ^ DAT_18001a000) >> bVar3 | (*puVar2 ^ DAT_18001a000) << 0x40 - bVar3
                     );
    if (pcVar4 == (code *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson(param_1,param_2,param_3,param_4,param_5);
    }
  }
  (*pcVar4)(param_1,param_2,param_3,param_4,param_5);
  return;
}


/* Address: 0x180005ff8; Evidence: ev_fe5e175cadd32ecc432a983d17d00cf27887f1b51ea88d0bc9e5675ab28cfbe6 */

void FUN_180005ff8(void)

{
  FUN_180005ea4((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  return;
}


/* Address: 0x180006018; Evidence: ev_ab4d6a2c7329bf0a7b6a680adac24ad8aad2481ff1d3fa1e14ef8260e9c702a2 */

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
  *(undefined8 *)(puVar3 + -8) = 0x180006046;
  FUN_180005d2c(2,0xc0000417,1);
  *(undefined8 *)(puVar3 + -8) = 0x18000604c;
  hProcess = GetCurrentProcess();
                    /* WARNING: Could not recover jumptable at 0x000180006058. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TerminateProcess(hProcess,0xc0000417);
  return;
}


/* Address: 0x180006060; Evidence: ev_800e66cc741a11dcfc27743486e9065f2751d01ba629419d2530f31187c43fb3 */

uint FUN_180006060(uint param_1)

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
      return *(uint *)(&DAT_180010734 + (ulonglong)(param_1 - 1) * 8);
    }
    if (param_1 < 0x719) {
      uVar5 = 0x2d;
      uVar7 = 0;
      uVar8 = 0x2c;
      do {
        uVar9 = uVar5 >> 1;
        if (uVar9 == 0) {
          if (uVar5 != 0) {
            puVar4 = (uint *)(&DAT_180010730 + uVar7 * 8);
            if (param_1 != *puVar4) {
              puVar4 = (uint *)0x0;
            }
LAB_180006101:
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
        puVar4 = (uint *)(&DAT_180010730 + lVar1 * 8);
        if (param_1 == *puVar4) goto LAB_180006101;
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


/* Address: 0x180006130; Evidence: ev_94f44ca22b3cc74c22dd02f9ae996b15da4ee066eebf5d3c144e217fd168d911 */

void FUN_180006130(uint param_1)

{
  uint uVar1;
  uint *puVar2;
  
  puVar2 = (uint *)FUN_18000617c();
  *puVar2 = param_1;
  uVar1 = FUN_180006060(param_1);
  puVar2 = (uint *)FUN_1800061a0();
  *puVar2 = uVar1;
  return;
}


/* Address: 0x180006158; Evidence: ev_c06f5e6c178f36082c5d494207375907d91020a65da3a5483f92ea8bc1539782 */

void FUN_180006158(uint param_1,longlong param_2)

{
  uint uVar1;
  
  *(undefined1 *)(param_2 + 0x38) = 1;
  *(uint *)(param_2 + 0x34) = param_1;
  uVar1 = FUN_180006060(param_1);
  *(uint *)(param_2 + 0x2c) = uVar1;
  *(undefined1 *)(param_2 + 0x30) = 1;
  return;
}


/* Address: 0x18000617c; Evidence: ev_2561c7e87cdf08febeee2ee0de49777efca33362d3829b2ec659ff2275c8ad90 */

undefined * FUN_18000617c(void)

{
  PVOID pvVar1;
  undefined *puVar2;
  
  pvVar1 = FUN_1800066a8();
  puVar2 = (undefined *)((longlong)pvVar1 + 0x24);
  if (pvVar1 == (PVOID)0x0) {
    puVar2 = &DAT_18001a094;
  }
  return puVar2;
}


/* Address: 0x1800061a0; Evidence: ev_8a994cd3b7dca7d422501778154ba591cba530a2197da74e28277689ca82f0ec */

undefined * FUN_1800061a0(void)

{
  PVOID pvVar1;
  undefined *puVar2;
  
  pvVar1 = FUN_1800066a8();
  puVar2 = (undefined *)((longlong)pvVar1 + 0x20);
  if (pvVar1 == (PVOID)0x0) {
    puVar2 = &DAT_18001a090;
  }
  return puVar2;
}


/* Address: 0x1800061c4; Evidence: ev_789cc5812bb8dabcad0482cd511f414490cab294432c1170c332a8624a239741 */

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


/* Address: 0x180006204; Evidence: ev_4a3ad0a781ca3e226a452b5ab1f6a47612933b72da1082deed675988e06b7018 */

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


/* Address: 0x180006244; Evidence: ev_5b8cf745015dda922956ef97c7b712d4faca6cae657aef45dd7161add494cc06 */

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


/* Address: 0x18000628c; Evidence: ev_0c35c1829b266fd2d395e024e2ba6742cd149be200100efb71dc2f5a4e74eb3d */

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
    if ((iVar1 == 1) && (piVar2 != (int *)&DAT_18001a210)) {
      FUN_180006b50(piVar2);
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x1800062ec; Evidence: ev_3e83e3836641e50d7031287606afb36a86c475bfa32ccaec660c32b43d1d4d86 */

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
  local_28 = &DAT_18001b308;
  *(undefined4 *)(param_1 + 0x28) = 1;
  *(undefined **)param_1 = &DAT_180010490;
  *(undefined4 *)(param_1 + 0x3a8) = 1;
  *(undefined **)(param_1 + 0x88) = &DAT_18001a210;
  *(undefined2 *)(param_1 + 0xbc) = 0x43;
  *(undefined2 *)(param_1 + 0x1c2) = 0x43;
  *(undefined8 *)(param_1 + 0x3a0) = 0;
  local_30 = param_1;
  operator()<>(local_res10,local_res20,&local_20,local_res18);
  operator()<>(local_res10,local_38 + 1,&local_18,local_38);
  return;
}


/* Address: 0x1800063c0; Evidence: ev_91940e4936d77093997d75e02d387fecee707aa12a7474f798f3387a0495990a */

void FUN_1800063c0(__acrt_ptd *param_1)

{
  if (param_1 != (__acrt_ptd *)0x0) {
    destroy_ptd_array(param_1);
    FUN_180006b50(param_1);
  }
  return;
}


/* Address: 0x1800063e0; Evidence: ev_01e7f9bce51ebe0bc0a55a09f972a7a0e117073110d937fcd7faab1f1cef2e36 */

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
  if (*(undefined **)param_1 != &DAT_180010490) {
    FUN_180006b50(*(undefined **)param_1);
  }
  FUN_180006b50(*(LPVOID *)(local_20 + 0x70));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x58));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x60));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x68));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x48));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x50));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x78));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x80));
  FUN_180006b50(*(LPVOID *)(local_20 + 0x3c0));
  operator()<>(local_res10,local_res20,&local_18,local_res18);
  operator()<>(local_res10,local_28 + 1,&local_10,local_28);
  return;
}


/* Address: 0x1800064d8; Evidence: ev_6bc53f41a864993fc73a55499e66c4aa1de9fb952ccc702da4fff0955fbcc5ee */

__acrt_ptd * FUN_1800064d8(void)

{
  DWORD dwErrCode;
  BOOL BVar1;
  __acrt_ptd *lpFlsData;
  
  dwErrCode = GetLastError();
  BVar1 = FlsSetValue(DAT_18001a098,(PVOID)0xffffffffffffffff);
  if (BVar1 != 0) {
    lpFlsData = _calloc_base(1,0x3c8);
    if (lpFlsData != (__acrt_ptd *)0x0) {
      BVar1 = FlsSetValue(DAT_18001a098,lpFlsData);
      if (BVar1 == 0) {
        FlsSetValue(DAT_18001a098,(PVOID)0x0);
        FUN_180006b50(lpFlsData);
        lpFlsData = (__acrt_ptd *)0x0;
      }
      else {
        construct_ptd_array(lpFlsData);
        FUN_180006b50((LPVOID)0x0);
      }
      SetLastError(dwErrCode);
      return lpFlsData;
    }
    FlsSetValue(DAT_18001a098,(PVOID)0x0);
    FUN_180006b50((LPVOID)0x0);
  }
  SetLastError(dwErrCode);
  return (__acrt_ptd *)0x0;
}


/* Address: 0x180006590; Evidence: ev_00cd5b9cf57db92cdd9e43f3ecebb3cedc93bd6feb0a0bcbe2861f2cf9ccb898 */

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
    if (((ppuVar1 != DAT_18001b308) && (ppuVar1 != &PTR_DAT_18001a0a0)) &&
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


/* Address: 0x1800065f8; Evidence: ev_7f10811ba1e9def5c647fd66161195b9d8a523902f13d2b9eae4f38406240da6 */

void FUN_1800065f8(void)

{
  __acrt_ptd *p_Var1;
  
  if (DAT_18001a098 == 0xffffffff) {
    p_Var1 = (__acrt_ptd *)0x0;
  }
  else {
    p_Var1 = FlsGetValue(DAT_18001a098);
  }
  if (p_Var1 != (__acrt_ptd *)0x0) {
    FlsSetValue(DAT_18001a098,(PVOID)0x0);
    destroy_ptd_array(p_Var1);
    FUN_180006b50(p_Var1);
  }
  return;
}


/* Address: 0x180006648; Evidence: ev_57380889bf8c4dfcb617bf585a2f9e8b34b090584bcaae3e12ab1b06437f2a49 */

void FUN_180006648(void)

{
  PVOID pvVar1;
  
  pvVar1 = FUN_1800066a8();
  if (pvVar1 != (PVOID)0x0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x180006664; Evidence: ev_e0a9f7513ed11bc8e0bc57c1b57ee24f7f6cf64f50b2d7708155bf0f75632668 */

void FUN_180006664(void)

{
  PVOID pvVar1;
  __acrt_ptd *p_Var2;
  
  if (DAT_18001a098 == 0xffffffff) {
    pvVar1 = (PVOID)0x0;
  }
  else {
    pvVar1 = FlsGetValue(DAT_18001a098);
  }
  if (pvVar1 != (PVOID)0xffffffffffffffff) {
    if (pvVar1 == (PVOID)0x0) {
      p_Var2 = FUN_1800064d8();
      if (p_Var2 == (__acrt_ptd *)0x0) goto LAB_1800066a0;
    }
    return;
  }
LAB_1800066a0:
                    /* WARNING: Subroutine does not return */
  abort();
}


/* Address: 0x1800066a8; Evidence: ev_0ff339f4cffc79b2bc33c1024bc152f776bcc84ad490a92a1a21d234f10860b8 */

PVOID FUN_1800066a8(void)

{
  DWORD dwErrCode;
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  if (DAT_18001b300 == '\0') {
    dwErrCode = GetLastError();
    p_Var1 = p_Var2;
    if (DAT_18001a098 != 0xffffffff) {
      p_Var1 = FlsGetValue(DAT_18001a098);
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800064d8();
    }
    SetLastError(dwErrCode);
  }
  else {
    p_Var1 = p_Var2;
    if (DAT_18001a098 != 0xffffffff) {
      p_Var1 = (__acrt_ptd *)FUN_180008a1c();
    }
    if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
       (p_Var2 = p_Var1, p_Var1 == (__acrt_ptd *)0x0)) {
      p_Var2 = FUN_1800064d8();
    }
  }
  return p_Var2;
}


/* Address: 0x180006738; Evidence: ev_079e30609920361b82ebd3441c279b5f851740f4c07bdc83091de20f6f129a85 */

__acrt_ptd * FUN_180006738(undefined8 param_1,longlong param_2)

{
  __acrt_ptd *p_Var1;
  __acrt_ptd *p_Var2;
  
  p_Var2 = (__acrt_ptd *)0x0;
  p_Var1 = p_Var2;
  if (DAT_18001a098 != 0xffffffff) {
    p_Var1 = FlsGetValue(DAT_18001a098);
  }
  if ((p_Var1 != (__acrt_ptd *)0xffffffffffffffff) &&
     ((p_Var1 != (__acrt_ptd *)0x0 || (p_Var1 = FUN_1800064d8(), p_Var1 != (__acrt_ptd *)0x0)))) {
    p_Var2 = p_Var1 + param_2 * 0x3c8;
  }
  return p_Var2;
}


/* Address: 0x1800067a0; Evidence: ev_e6355fcca480f13c042c9a4e4d253014c1c17031cb6457d65f47b76064291efb */

ulonglong FUN_1800067a0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  PVOID pvVar3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001b300 = FUN_180008bc0();
  DAT_18001a098 = FlsAlloc(FUN_1800063c0);
  uVar2 = CONCAT44(extraout_var,DAT_18001a098);
  if (DAT_18001a098 != 0xffffffff) {
    pvVar3 = FUN_1800066a8();
    if (pvVar3 != (PVOID)0x0) {
      return CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
    }
    uVar1 = FUN_1800067f0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}


/* Address: 0x1800067f0; Evidence: ev_862c9e1b6c7c516c9c877b1cb9e8bdcd9022724372a02512b1698957324df26c */

undefined4 FUN_1800067f0(void)

{
  BOOL in_EAX;
  
  if (DAT_18001a098 != 0xffffffff) {
    in_EAX = FlsFree(DAT_18001a098);
    DAT_18001a098 = 0xffffffff;
  }
  return CONCAT31((int3)((uint)in_EAX >> 8),1);
}


/* Address: 0x180006814; Evidence: ev_abb890cfa2a0647a232d38758382138e7b1ed602b5ec74b0d2066faf9d0217c3 */

/* Library Function - Single Match
    __acrt_update_locale_info
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_update_locale_info(longlong param_1,longlong *param_2)

{
  undefined **ppuVar1;
  
  if ((*param_2 != DAT_18001b308) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180006848; Evidence: ev_19d07eedebb287a9cfcf9dfd211583d2dec7aa8caedd5ddba56c11b81b551795 */

void FUN_180006848(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001b308)[param_3]) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}


/* Address: 0x180006880; Evidence: ev_25a829a3f385de32bbfa99248f04bb861ee3bfce7f425633b3cf11c5d4f6d2f9 */

void FUN_180006880(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001b580) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_1800080e0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x1800068b4; Evidence: ev_dcccad362c2c35900e3dcbd133cc4764abfac80ccae6f6b627a50663af998e88 */

void FUN_1800068b4(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_18001b580)[param_3]) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_1800080e0();
    *param_2 = lVar1;
  }
  return;
}


/* Address: 0x1800068ec; Evidence: ev_0e8ce13c545b259d5ada9fe13391609e79ef9d20a4fd4c1a4dd9cf3fd6e6bd53 */

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
  for (plVar2 = &DAT_18001b308; plVar2 != &DAT_18001b310; plVar2 = plVar2 + 1) {
    if ((undefined **)*plVar2 != &PTR_DAT_18001a0a0) {
      ppuVar1 = _updatetlocinfoEx_nolock(plVar2,&PTR_DAT_18001a0a0);
      *plVar2 = (longlong)ppuVar1;
    }
  }
  __acrt_unlock(*(int *)param_3);
  return;
}


/* Address: 0x18000695c; Evidence: ev_6c8ab30a40da281f4c2535e22c2ec139f63362f5cc06a0736f4357093ee7b607 */

undefined4 FUN_18000695c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001b304;
  LOCK();
  DAT_18001b304 = 1;
  UNLOCK();
  return uVar1;
}


/* Address: 0x180006970; Evidence: ev_af1c08c9836e7dd98ee4a0ea40b89f6e089f3cedf74f0c14e3d859e6c70e720d */

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


/* Address: 0x1800069a0; Evidence: ev_fb3ce51533e3ac08fdaaa8823a1a11b643a04a68bafc4d97ab82acddf18ecde7 */

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
    BVar1 = InitializeCriticalSectionEx((LPCRITICAL_SECTION)(&DAT_18001b310 + uVar2 * 5),4000,0);
    if (BVar1 == 0) {
      uVar2 = __acrt_uninitialize_locks();
      return uVar2 & 0xffffffffffffff00;
    }
    DAT_18001b568 = DAT_18001b568 + 1;
    uVar3 = (int)uVar2 + 1;
    uVar2 = (ulonglong)uVar3;
  } while (uVar3 < 0xf);
  return CONCAT71((int7)(CONCAT44(extraout_var,BVar1) >> 8),1);
}


/* Address: 0x1800069e8; Evidence: ev_d9b71975a33b8361038a9320cc60659a4c8bbb0f05db2e7f76962347369c092c */

/* Library Function - Multiple Matches With Different Base Names
    __acrt_lock
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_lock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800069fa. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(&DAT_18001b310 + (longlong)param_1 * 5);
  return;
}


/* Address: 0x180006a10; Evidence: ev_507f5034e7f08f70e017d4e685d001785020101f6271a61749583a90cfab8f20 */

/* Library Function - Single Match
    __acrt_uninitialize_locks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_locks(void)

{
  undefined8 in_RAX;
  undefined8 extraout_RAX;
  ulonglong uVar1;
  
  uVar1 = (ulonglong)DAT_18001b568;
  while ((int)uVar1 != 0) {
    uVar1 = (ulonglong)((int)uVar1 - 1);
    DeleteCriticalSection((LPCRITICAL_SECTION)(&DAT_18001b310 + uVar1 * 5));
    DAT_18001b568 = DAT_18001b568 - 1;
    in_RAX = extraout_RAX;
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180006a48; Evidence: ev_c2fa8150df829cf066d596bfa687d2d72ac38544ddb583f75d63dcf9427de49c */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x000180006a5a. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_18001b310 + (longlong)param_1 * 5);
  return;
}


/* Address: 0x180006a64; Evidence: ev_c9db9eea92a5d427f3dd8874431001d80a60d2707ed0b452174063d58da5c8f9 */

uint FUN_180006a64(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}


/* Address: 0x180006a80; Evidence: ev_dbf6bc2ec83b02fb0a235a659a7818a1bb92e4b5de107d42bfe354e6fc569925 */

uint FUN_180006a80(void)

{
  return *(uint *)(*(longlong *)((longlong)ProcessEnvironmentBlock + 0x20) + 8) >> 0x1f;
}


/* Address: 0x180006a98; Evidence: ev_e8a7eaaf6c69a96a22f66b050e01d2208ef0da4cac1bcdb90e64e0b5db7deda0 */

bool FUN_180006a98(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_180006a80();
  if ((char)uVar1 == '\0') {
    FUN_18000895c(local_res8);
  }
  return local_res8[0] != 1;
}


/* Address: 0x180006ad0; Evidence: ev_237617239fac4951c0715d345d9c543f45cbb9b3d95dc8a0b6fc840c8a8ae6c6 */

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
      pvVar3 = HeapAlloc(DAT_18001b678,8,dwBytes);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180009010(dwBytes), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_1800061a0();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180006b50; Evidence: ev_644050701d4bbbc83dc63f8bd00414ccba7533e7f330e23b9f8cf61384da0f47 */

void FUN_180006b50(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001b678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180006060(DVar2);
    puVar4 = (uint *)FUN_1800061a0();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x180006bb0; Evidence: ev_c80c27087b9d48b44eada424ab405f11f169a643788b6491a1e643a15bf3254b */

ulonglong FUN_180006bb0(ulonglong param_1,ulonglong param_2)

{
  if (param_1 < param_2) {
    return 0xffffffff;
  }
  return (ulonglong)(param_2 < param_1);
}


/* Address: 0x180006bc4; Evidence: ev_47976e98cd0e8675bfb78a3ec1b61c5fff9918569e2761d7a7e32cf6b6ede5d5 */

uint FUN_180006bc4(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_180006b50(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_180008478(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180006b50(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_180008478(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180006130(DVar2);
      puVar4 = (uint *)FUN_1800061a0();
      return *puVar4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180006b50(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x180006d64; Evidence: ev_0f1fd8fb0c97c1cb9fad2a9bf0d8d2e3575f17c12991432516a5a30ff5324764 */

uint FUN_180006d64(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      FUN_180006b50(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != 0) {
      iVar1 = FUN_180008508(param_4,0,param_1,0xffffffff);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180006b50(*(LPVOID *)(param_2 + 0x10));
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
        iVar1 = FUN_180008508(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180006130(DVar2);
      puVar4 = (uint *)FUN_1800061a0();
      return *puVar4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180006b50(*(LPVOID *)(param_2 + 0x10));
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


/* Address: 0x180006f10; Evidence: ev_53b51b8d84b767327bb2a3faf8194794c995fa80ad6419229eb07381a5dad508 */

ulonglong FUN_180006f10(undefined8 *param_1,undefined8 *param_2)

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
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 0x16;
    FUN_180005ff8();
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
      pbVar4 = FUN_18000acf0(pbVar4,(byte *)&local_res10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000714c((longlong)*param_1,0,0,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_180006b50((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000705f;
        }
      }
      else {
        uVar10 = FUN_1800072d0((uchar *)*param_1,pbVar4,(longlong *)&local_58);
        plVar8 = local_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = local_58;
          if (local_58 != plStack_50) {
            do {
              FUN_180006b50((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000705f;
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
      FUN_180006b50((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006b50((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000705f:
      FUN_180006b50(plVar8);
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
          iVar1 = FUN_18000ab20(pcVar9,(longlong)(local_res20 + (local_res18 - (longlong)pcVar9)),
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
      FUN_180006b50((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006b50((LPVOID)*plVar11);
      }
      FUN_180006b50(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x18000714c; Evidence: ev_a3c5d04cf548fabba7cfe35eae4347d83c29b681273fa0f01bd26ee45e756dcc */

undefined8 FUN_18000714c(longlong param_1,longlong param_2,ulonglong param_3,longlong *param_4)

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
  if (((param_3 != 0) && (iVar1 = FUN_18000ab20(pcVar2,uVar8,param_2,param_3), iVar1 != 0)) ||
     (iVar1 = FUN_18000ab20(pcVar2 + param_3,uVar8 - param_3,param_1,uVar6), iVar1 != 0)) {
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
  if (param_4[1] == param_4[2]) {
    if (*param_4 == 0) {
      pvVar3 = _calloc_base(4,8);
      *param_4 = (longlong)pvVar3;
      FUN_180006b50((LPVOID)0x0);
      lVar4 = *param_4;
      if (lVar4 != 0) {
        param_4[1] = lVar4;
        param_4[2] = lVar4 + 0x20;
        goto LAB_1800072a2;
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
          FUN_180006b50((LPVOID)0x0);
          goto LAB_1800072a2;
        }
        FUN_180006b50((LPVOID)0x0);
      }
    }
    uVar7 = 0xc;
    FUN_180006b50(pcVar2);
  }
  else {
LAB_1800072a2:
    *(char **)param_4[1] = pcVar2;
    param_4[1] = param_4[1] + 8;
  }
  FUN_180006b50((LPVOID)0x0);
  return uVar7;
}


/* Address: 0x1800072d0; Evidence: ev_10f3b2e32e97237d80aeed0c523dd90ab860eabd9a072f20c1239cdc824b6958 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_1800072d0(uchar *param_1,uchar *param_2,longlong *param_3)

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
  
  local_48 = DAT_18001a000 ^ (ulonglong)auStackY_378;
  while ((param_2 != param_1 &&
         ((0x2d < (byte)(*param_2 - 0x2f) ||
          ((0x200000000801U >> ((longlong)(char)(*param_2 - 0x2f) & 0x3fU) & 1) == 0))))) {
    param_2 = (uchar *)FUN_18000b0a8(param_1,param_2);
  }
  if ((*param_2 == ':') && (param_2 != param_1 + 1)) {
    uVar5 = FUN_18000714c((longlong)param_1,0,0,param_3);
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
    FUN_18000dbf0((undefined1 (*) [32])&local_298,0,0x250);
    local_338 = 0;
    local_330 = 0;
    local_328 = (LPCWSTR)0x0;
    local_320 = 0;
    local_318 = 0;
    local_310 = '\0';
    FUN_180004980(&local_308,(longlong *)0x0);
    if (*(int *)(local_300 + 0xc) == 0xfde9) {
      if (local_2f0 != '\0') {
        *(uint *)(local_308 + 0x3a8) = *(uint *)(local_308 + 0x3a8) & 0xfffffffd;
      }
      uVar3 = 0xfde9;
    }
    else {
      IVar6 = FUN_1800089b8();
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
    uVar3 = FUN_180006bc4((char *)param_1,(longlong)&local_338,local_348,uVar3);
    lpFileName = local_328;
    if (uVar3 != 0) {
      lpFileName = (LPCWSTR)0x0;
    }
    hFindFile = FindFirstFileExW(lpFileName,FindExInfoStandard,&local_298,FindExSearchNameMatch,
                                 (LPVOID)0x0,0);
    if (hFindFile == (HANDLE)0xffffffffffffffff) {
      uVar5 = FUN_18000714c((longlong)param_1,0,0,param_3);
      uVar5 = uVar5 & 0xffffffff;
      if (local_310 != '\0') {
        FUN_180006b50(local_328);
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
        FUN_180004980(&local_2e8,(longlong *)0x0);
        uVar3 = 0xfde9;
        if (*(int *)(local_2e0 + 0xc) == 0xfde9) {
          if (local_2d0 != '\0') {
            *(uint *)(local_2e8 + 0x3a8) = *(uint *)(local_2e8 + 0x3a8) & 0xfffffffd;
          }
        }
        else {
          IVar6 = FUN_1800089b8();
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
        uVar3 = FUN_180006d64(local_298.cFileName,(longlong)&local_2c8,local_348,uVar3);
        pcVar2 = local_2b8;
        pcVar8 = local_2b8;
        if (uVar3 != 0) {
          pcVar8 = (char *)0x0;
        }
        if ((*pcVar8 == '.') && ((pcVar8[1] == '\0' || ((pcVar8[1] == '.' && (pcVar8[2] == '\0')))))
           ) {
          if (local_2a0 != '\0') {
            FUN_180006b50(local_2b8);
          }
        }
        else {
          uVar7 = FUN_18000714c((longlong)pcVar8,(longlong)param_1,uVar5,param_3);
          if ((int)uVar7 != 0) {
            if (local_2a0 != '\0') {
              FUN_180006b50(pcVar2);
            }
            FindClose(hFindFile);
            if (local_310 == '\0') {
              return uVar7 & 0xffffffff;
            }
            FUN_180006b50(local_328);
            return uVar7 & 0xffffffff;
          }
          uVar5 = local_340;
          if (local_2a0 != (char)uVar7) {
            FUN_180006b50(pcVar2);
            uVar5 = local_340;
          }
        }
        BVar4 = FindNextFileW(hFindFile,&local_298);
      } while (BVar4 != 0);
      lVar9 = param_3[1] - *param_3 >> 3;
      if (lVar10 != lVar9) {
        FUN_18000a780((undefined1 *)(*param_3 + lVar10 * 8),lVar9 - lVar10,8,FUN_180006bb0);
      }
      FindClose(hFindFile);
      if (local_310 != '\0') {
        FUN_180006b50(local_328);
      }
      uVar5 = 0;
    }
  }
  return uVar5;
}


/* Address: 0x180007630; Evidence: ev_d7bc4cff52a183b5b18e1eccc515eb9a8af5f102add2891c747b650c4aae5890 */

ulonglong thunk_FUN_180006f10(undefined8 *param_1,undefined8 *param_2)

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
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 0x16;
    FUN_180005ff8();
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
      pbVar4 = FUN_18000acf0(pbVar4,(byte *)&lStackX_10);
      if (pbVar4 == (byte *)0x0) {
        uVar10 = FUN_18000714c((longlong)*param_1,0,0,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_180006b50((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000705f;
        }
      }
      else {
        uVar10 = FUN_1800072d0((uchar *)*param_1,pbVar4,(longlong *)&plStack_58);
        plVar8 = plStack_58;
        uVar3 = uVar10 & 0xffffffff;
        if ((int)uVar10 != 0) {
          plVar7 = plStack_58;
          if (plStack_58 != plStack_50) {
            do {
              FUN_180006b50((LPVOID)*plVar7);
              plVar7 = plVar7 + 1;
            } while (plVar7 != plStack_50);
          }
          goto LAB_18000705f;
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
      FUN_180006b50((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006b50((LPVOID)*plVar11);
      }
      uVar3 = 0xffffffff;
LAB_18000705f:
      FUN_180006b50(plVar8);
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
          iVar1 = FUN_18000ab20(pcVar9,(longlong)(pcStackX_20 + (uStackX_18 - (longlong)pcVar9)),
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
      FUN_180006b50((LPVOID)0x0);
      for (plVar11 = plVar8; plVar11 != plVar7; plVar11 = plVar11 + 1) {
        FUN_180006b50((LPVOID)*plVar11);
      }
      FUN_180006b50(plVar8);
      uVar3 = 0;
    }
  }
  return uVar3;
}


/* Address: 0x180007638; Evidence: ev_2300fc357a77301a130ff296cfe3284041d8d946a797b1f336e7ab752f2693fa */

undefined4 FUN_180007638(short *param_1,longlong param_2,undefined8 param_3,uint param_4)

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
      iVar1 = FUN_180008508(param_4,0,param_1,0xffffffff);
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < (ulonglong)(longlong)iVar1) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          goto LAB_18000768c;
        }
        iVar1 = FUN_180008508(param_4,0,param_1,0xffffffff);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_180006130(DVar2);
      puVar3 = (undefined4 *)FUN_1800061a0();
      return *puVar3;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
LAB_18000768c:
      puVar3 = (undefined4 *)FUN_1800061a0();
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


/* Address: 0x180007754; Evidence: ev_5546fe549b8d3cd66c0ec473db0c9f16b11e16b40dccf44a7008abbfd07bcdb5 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180007754(HMODULE param_1,undefined8 param_2,ulonglong param_3)

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
  
  local_18 = DAT_18001a000 ^ (ulonglong)auStack_2a8;
  DVar1 = GetModuleFileNameW(param_1,local_228,0x105);
  if (DVar1 == 0) {
    DVar1 = GetLastError();
    FUN_180006130(DVar1);
    local_240 = 0;
  }
  else {
    local_240 = 0;
    local_238 = 0;
    local_260 = param_2;
    local_258 = param_3 & 0xffffffff;
    local_250 = param_2;
    local_248 = param_3 & 0xffffffff;
    FUN_180004980(&local_280,(longlong *)0x0);
    uVar3 = 0xfde9;
    if (*(int *)(local_278 + 0xc) == 0xfde9) {
      if (local_268 != '\0') {
        *(uint *)(local_280 + 0x3a8) = *(uint *)(local_280 + 0x3a8) & 0xfffffffd;
      }
    }
    else {
      IVar2 = FUN_1800089b8();
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
    FUN_180007638(local_228,(longlong)&local_260,local_288,uVar3);
    local_240 = local_240 & 0xffffffff;
  }
  return local_240;
}


/* Address: 0x180007878; Evidence: ev_e6e51b5b3359773f1ec5516ecba0377fdea1288e05237eb91a14643c1fc4a485 */

void FUN_180007878(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  if (DAT_18001b570 == (undefined1 (*) [32])0x0) {
LAB_18000792b:
    puVar5 = (undefined4 *)FUN_1800061a0();
    *puVar5 = 0x16;
    FUN_180005ff8();
  }
  else {
    if (puVar4 == (undefined8 *)0x0) {
      FUN_18000dbf0(DAT_18001b570,0,0x101);
      goto LAB_18000792b;
    }
    lVar8 = 2;
    pauVar7 = DAT_18001b570;
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
  if (DAT_18001b578 != (undefined1 (*) [32])0x0) {
    pauVar7 = DAT_18001b578;
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
      goto LAB_1800079dc;
    }
    FUN_18000dbf0(DAT_18001b578,0,0x100);
  }
  puVar5 = (undefined4 *)FUN_1800061a0();
  *puVar5 = 0x16;
  FUN_180005ff8();
LAB_1800079dc:
  piVar2 = (int *)**(undefined8 **)param_3[1];
  LOCK();
  iVar1 = *piVar2;
  *piVar2 = *piVar2 + -1;
  UNLOCK();
  if ((iVar1 == 1) && ((undefined *)**(undefined8 **)param_3[1] != &DAT_18001a210)) {
    FUN_180006b50((LPVOID)**(undefined8 **)param_3[1]);
  }
  **(undefined8 **)param_3[1] = *(undefined8 *)(*(longlong *)*param_3 + 0x88);
  LOCK();
  **(int **)(*(longlong *)*param_3 + 0x88) = **(int **)(*(longlong *)*param_3 + 0x88) + 1;
  UNLOCK();
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180007a48; Evidence: ev_861f57102a0216e269e20faa1bfc37ee9db6d3d02e7351a335e26e1962138e96 */

/* Library Function - Single Match
    int __cdecl getSystemCP(int)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl getSystemCP(int param_1)

{
  longlong local_28;
  longlong local_20;
  char local_10;
  
  FUN_180004980(&local_28,(longlong *)0x0);
  DAT_18001b588 = 0;
  if (param_1 == -2) {
    DAT_18001b588 = 1;
    param_1 = GetOEMCP();
  }
  else if (param_1 == -3) {
    DAT_18001b588 = 1;
    param_1 = GetACP();
  }
  else if (param_1 == -4) {
    DAT_18001b588 = 1;
    param_1 = *(UINT *)(local_20 + 0xc);
  }
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return param_1;
}


/* Address: 0x180007ac8; Evidence: ev_67f63b02fc829fc492d042cc50e7f446d701c82c244c11f0036b81dd7d989ee2 */

void FUN_180007ac8(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  undefined2 *puVar3;
  longlong lVar4;
  
  FUN_18000dbf0((undefined1 (*) [32])(param_1 + 0x18),0,0x101);
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
    *(undefined1 *)(param_1 + lVar4 + 0x18) = (&DAT_18001a228)[lVar4];
    lVar4 = lVar1;
  } while (lVar1 < 0x101);
  do {
    lVar1 = lVar2 + 1;
    *(undefined1 *)(param_1 + lVar2 + 0x119) = (&DAT_18001a329)[lVar2];
    lVar2 = lVar1;
  } while (lVar1 < 0x100);
  return;
}


/* Address: 0x180007b60; Evidence: ev_7730e5255293d81a94431a05189d057a9b4fa41864c9136533d901a340d085a6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180007b60(longlong param_1)

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
  
  local_18 = DAT_18001a000 ^ (ulonglong)auStackY_788;
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
    FUN_18000a5a8((longlong *)0x0,1,local_718,0x100,local_418,*(uint *)(param_1 + 4),0);
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


/* Address: 0x180007d58; Evidence: ev_e81d8a0463bb0df15b2c675c12d00fc871d9882421d60a0cf8267bae95f0c3dc */

ulonglong FUN_180007d58(int param_1,char param_2,__acrt_ptd *param_3,__crt_multibyte_data **param_4)

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
      FUN_180006b50((LPVOID)0x0);
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
      uVar12 = FUN_1800080fc(iVar8,(longlong)puVar9);
      uVar10 = uVar12 & 0xffffffff;
      if ((int)uVar12 == -1) {
        puVar13 = (undefined4 *)FUN_1800061a0();
        *puVar13 = 0x16;
        FUN_180006b50(puVar9);
        uVar10 = 0xffffffff;
      }
      else {
        if (param_2 == '\0') {
          FUN_18000695c();
        }
        piVar2 = *(int **)(local_res18 + 0x88);
        LOCK();
        iVar8 = *piVar2;
        *piVar2 = *piVar2 + -1;
        UNLOCK();
        if ((iVar8 == 1) && (*(undefined **)(local_res18 + 0x88) != &DAT_18001a210)) {
          FUN_180006b50(*(undefined **)(local_res18 + 0x88));
        }
        *(undefined4 *)puVar9 = 1;
        *(undefined8 **)(local_res18 + 0x88) = puVar9;
        if ((DAT_18001a858 & *(uint *)(local_res18 + 0x3a8)) == 0) {
          local_258 = &local_res18;
          local_250 = &local_res20;
          local_264[0] = 5;
          local_264[1] = 5;
          FUN_180007878(local_268,local_264 + 1,&local_258,local_264);
          if (param_2 != '\0') {
            PTR_DAT_18001a200 = *local_res20;
          }
        }
        FUN_180006b50((LPVOID)0x0);
      }
    }
  }
  return uVar10;
}


/* Address: 0x180007fc8; Evidence: ev_d8a753366e150a551da1be65d0353931d76c24d3333f87f1e531cc972a668afb */

/* Library Function - Single Match
    struct __crt_multibyte_data * __ptr64 __cdecl update_thread_multibyte_data_internal(struct
   __acrt_ptd * __ptr64 const,struct __crt_multibyte_data * __ptr64 * __ptr64 const)
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

__crt_multibyte_data * __cdecl
update_thread_multibyte_data_internal(__acrt_ptd *param_1,__crt_multibyte_data **param_2)

{
  int iVar1;
  __crt_multibyte_data *p_Var2;
  
  if (((*(uint *)(param_1 + 0x3a8) & DAT_18001a858) == 0) || (*(longlong *)(param_1 + 0x90) == 0)) {
    __acrt_lock(5);
    p_Var2 = *(__crt_multibyte_data **)(param_1 + 0x88);
    if (p_Var2 != *param_2) {
      if (p_Var2 != (__crt_multibyte_data *)0x0) {
        LOCK();
        iVar1 = *(int *)p_Var2;
        *(int *)p_Var2 = *(int *)p_Var2 + -1;
        UNLOCK();
        if ((iVar1 == 1) && (p_Var2 != (__crt_multibyte_data *)&DAT_18001a210)) {
          FUN_180006b50(p_Var2);
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


/* Address: 0x180008080; Evidence: ev_32fc2f9df9c8823251738e0b3ca4cbe5c4b827e614f3b9395ead32f82ee2ef71 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18001b58c == '\0') {
    DAT_18001b578 = &DAT_18001a550;
    DAT_18001b580 = &DAT_18001a210;
    DAT_18001b570 = &DAT_18001a440;
    p_Var1 = (__acrt_ptd *)FUN_180006664();
    in_RAX = FUN_180007d58(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001b580);
    DAT_18001b58c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}


/* Address: 0x1800080e0; Evidence: ev_eba9fb7b5b4dcd735404f5a744d1287d2dd6c119198cd6ae39bb4920b44d8d4a */

void FUN_1800080e0(void)

{
  __acrt_ptd *p_Var1;
  
  p_Var1 = (__acrt_ptd *)FUN_180006648();
  update_thread_multibyte_data_internal(p_Var1,(__crt_multibyte_data **)&DAT_18001b580);
  return;
}


/* Address: 0x1800080fc; Evidence: ev_4e82b0537f3bd5fdc07ee1bab6511536d4b1238abee8b708ebe606cac629ea7e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_1800080fc(int param_1,longlong param_2)

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
  
  local_30 = DAT_18001a000 ^ (ulonglong)auStack_68;
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
LAB_180008394:
    FUN_180007ac8(param_2);
    return 0;
  }
  puVar6 = &DAT_18001a660;
  uVar14 = 1;
  pwVar17 = pwVar8;
  do {
    if (*puVar6 == uVar4) {
      FUN_18000dbf0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
      pbVar18 = &DAT_18001a650;
      lVar9 = 4;
      pbVar7 = &DAT_18001a670 + (longlong)pwVar17 * 0x30;
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
                    (((longlong)pwVar17 * 0x30 - param_2) + 0x18001a658 + (longlong)puVar13);
        puVar13 = puVar13 + 1;
        lVar9 = lVar9 + -1;
      } while (lVar9 != 0);
      goto LAB_18000838a;
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
      if (DAT_18001b588 == 0) {
        return 0xffffffff;
      }
      goto LAB_180008394;
    }
    FUN_18000dbf0((undefined1 (*) [32])(param_2 + 0x18),0,0x101);
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
LAB_18000838a:
  FUN_180007b60(param_2);
  return 0;
}


/* Address: 0x1800083c4; Evidence: ev_94acb2bba99dabb178be054ae401426226d54acb5234495fc5994b737d602eaf */

undefined8 FUN_1800083c4(longlong *param_1,uint param_2,uint param_3,byte param_4)

{
  undefined8 uVar1;
  longlong local_28;
  longlong *local_20;
  longlong local_18;
  char local_10;
  
  FUN_180004980(&local_28,param_1);
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


/* Address: 0x180008438; Evidence: ev_f1790da98f1908da3251f67fe0710a89b1ad9a7b93990be52f872b6e9b8a83cf */

void FUN_180008438(uint param_1)

{
  FUN_1800083c4((longlong *)0x0,param_1,0,4);
  return;
}


/* Address: 0x180008450; Evidence: ev_b9e7b478f241002d37b324b6458c73ac0209ca7bb7dcc318fef2c1ea4480caf9 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined1 FUN_180008450(void)

{
  DAT_18001b5b0 = GetCommandLineA();
  _DAT_18001b5b8 = GetCommandLineW();
  return 1;
}


/* Address: 0x180008478; Evidence: ev_478bfd69355f0acb8e6dae92f92c32f6d318a2ba087af349e1e85460eb81edfe */

void FUN_180008478(uint param_1,ulonglong param_2)

{
  bool bVar1;
  
  if (param_1 < 0xdead) {
    if (param_1 != 0xdeac) {
      if (param_1 < 0xc434) {
        if ((((param_1 != 0xc433) && (param_1 != 0x2a)) && (param_1 != 0xc42c)) &&
           ((param_1 != 0xc42d && (param_1 != 0xc42e)))) {
          bVar1 = param_1 == 0xc431;
LAB_1800084c5:
          if (!bVar1) goto LAB_1800084c9;
        }
      }
      else if (param_1 != 0xc435) {
        if (param_1 == 0xd698) goto LAB_180008503;
        if (param_1 != 0xdeaa) {
          bVar1 = param_1 == 0xdeab;
          goto LAB_1800084c5;
        }
      }
    }
  }
  else if ((((param_1 != 0xdead) && (param_1 != 0xdeae)) && (param_1 != 0xdeaf)) &&
          (((param_1 != 0xdeb0 && (param_1 != 0xdeb1)) &&
           ((param_1 != 0xdeb2 && ((param_1 != 0xdeb3 && (param_1 != 65000)))))))) {
    if (param_1 != 0xfde9) goto LAB_1800084c9;
LAB_180008503:
    param_2 = (ulonglong)((uint)param_2 & 8);
    goto LAB_1800084c9;
  }
  param_2 = 0;
LAB_1800084c9:
                    /* WARNING: Could not recover jumptable at 0x0001800084c9. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  MultiByteToWideChar(param_1,param_2);
  return;
}


/* Address: 0x180008508; Evidence: ev_29d37bd91da3f20bf6ca298d19af71601001f3866d5fbaafc170812ae15540ab */

void FUN_180008508(uint param_1,uint param_2,undefined8 param_3,undefined4 param_4)

{
  int iVar1;
  uint uVar2;
  bool bVar3;
  undefined4 *in_stack_00000040;
  
  uVar2 = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_1800085a8;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_1800085a8;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_180008599;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_1800085a8;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_1800085a8;
    iVar1 = param_1 - 65000;
LAB_180008599:
    if (iVar1 == 0) goto LAB_1800085a8;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    uVar2 = param_2 & 0xffffff7f;
  }
LAB_1800085a8:
  if ((param_1 - 65000 < 2) && (in_stack_00000040 != (undefined4 *)0x0)) {
    *in_stack_00000040 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800085df. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,uVar2,param_3,param_4);
  return;
}


/* Address: 0x1800085e8; Evidence: ev_c298eacf0ccf1ffff885180d00cb704037fdeb19e4d9bd502a9811037139530c */

LPVOID FUN_1800085e8(void)

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
    iVar2 = FUN_180008508(0,0,pWVar3,uVar7);
    if (iVar2 != 0) {
      pvVar6 = _malloc_base((longlong)iVar2);
      if (pvVar6 != (LPVOID)0x0) {
        iVar2 = FUN_180008508(0,0,pWVar3,uVar7);
        if (iVar2 == 0) {
          FUN_180006b50(pvVar6);
          pvVar6 = (LPVOID)0x0;
        }
        else {
          FUN_180006b50((LPVOID)0x0);
        }
        FreeEnvironmentStringsW(pWVar3);
        return pvVar6;
      }
      FUN_180006b50((LPVOID)0x0);
    }
    FreeEnvironmentStringsW(pWVar3);
  }
  return (LPVOID)0x0;
}


/* Address: 0x180008700; Evidence: ev_da08d596eeec17f64cce0c0c991f77156b57369eaef151f3a452ece9ef05331c */

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
      FUN_18000dbf0((undefined1 (*) [32])((longlong)pvVar3 + uVar2),0,uVar4 - uVar2);
    }
  }
  else {
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 0xc;
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x1800087a8; Evidence: ev_8030aece1484b877726f3f416e5b69e08dc81bd07d2681e4eb9e27d48c6b0146 */

FARPROC FUN_1800087a8(uint param_1,LPCSTR param_2,uint *param_3,uint *param_4)

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
LAB_18000889a:
      __acrt_lock(0xe);
      local_res18[0] = 0;
      BVar5 = VirtualProtect(&DAT_18001e000,0x100,4,local_res18);
      if (BVar5 != 0) {
        pFVar6 = pFVar7;
        if (pFVar7 == (FARPROC)0x0) {
          pFVar6 = (FARPROC)0xffffffffffffffff;
        }
        LOCK();
        (&DAT_18001e000)[param_1] = pFVar6;
        UNLOCK();
        BVar5 = VirtualProtect(&DAT_18001e000,0x100,2,local_res18);
        if (BVar5 != 0) {
          __acrt_unlock(0xe);
          return pFVar7;
        }
      }
                    /* WARNING: Subroutine does not return */
      abort();
    }
    uVar2 = *param_3;
    hLibModule = (HMODULE)(&DAT_18001b5c0)[uVar2];
    if (hLibModule == (HMODULE)0x0) {
      lpLibFileName = (wchar_t *)(&PTR_u_api_ms_win_core_datetime_l1_1_1_180010f80)[uVar2];
      hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0x800);
      if ((hLibModule != (HMODULE)0x0) ||
         ((((DVar3 = GetLastError(), DVar3 == 0x57 &&
            (iVar4 = wcsncmp(lpLibFileName,L"api-ms-",7), iVar4 != 0)) &&
           (iVar4 = wcsncmp(lpLibFileName,L"ext-ms-",7), iVar4 != 0)) &&
          (hLibModule = LoadLibraryExW(lpLibFileName,(HANDLE)0x0,0), hLibModule != (HMODULE)0x0))))
      {
        LOCK();
        lVar1 = (&DAT_18001b5c0)[uVar2];
        (&DAT_18001b5c0)[uVar2] = hLibModule;
        UNLOCK();
        if (lVar1 != 0) {
          FreeLibrary(hLibModule);
        }
        goto LAB_180008940;
      }
      LOCK();
      (&DAT_18001b5c0)[uVar2] = 0xffffffffffffffff;
      UNLOCK();
    }
    else if (hLibModule != (HMODULE)0xffffffffffffffff) {
LAB_180008940:
      pFVar7 = GetProcAddress(hLibModule,param_2);
      goto LAB_18000889a;
    }
    param_3 = param_3 + 1;
  } while( true );
}


/* Address: 0x18000895c; Evidence: ev_a2fe779f42b0e0b5c11459c0938af60139e213138e0165be9e6c029f69fb22ab */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_18000895c(undefined8 param_1)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001e0d0 == (FARPROC)0xffffffffffffffff) {
    return 0xc0000225;
  }
  pFVar1 = DAT_18001e0d0;
  if ((DAT_18001e0d0 == (FARPROC)0x0) &&
     (pFVar1 = FUN_1800087a8(0x1a,"AppPolicyGetProcessTerminationMethod",(uint *)&DAT_1800115cc,
                             (uint *)"AppPolicyGetProcessTerminationMethod"), pFVar1 == (FARPROC)0x0
     )) {
    return 0xc0000225;
  }
  IVar2 = (*pFVar1)(0xfffffffffffffffa,param_1);
  return IVar2;
}


/* Address: 0x1800089b8; Evidence: ev_c0e9858eff2cf8c229ba179efa9476a4f3c5f62b43b16db86d47fe39fd66184f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

INT_PTR FUN_1800089b8(void)

{
  FARPROC pFVar1;
  INT_PTR IVar2;
  
  if (DAT_18001e000 == (FARPROC)0xffffffffffffffff) {
    return 1;
  }
  pFVar1 = DAT_18001e000;
  if ((DAT_18001e000 == (FARPROC)0x0) &&
     (pFVar1 = FUN_1800087a8(0,"AreFileApisANSI",(uint *)&DAT_180011568,(uint *)&DAT_18001156c),
     pFVar1 == (FARPROC)0x0)) {
    return 1;
  }
  IVar2 = (*pFVar1)();
  return IVar2;
}


/* Address: 0x180008a04; Evidence: ev_4f0cb1084b6dead4fcece5942cc38ad128c0a770e268ad51ca5768ae4a4dd203 */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008a04. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}


/* Address: 0x180008a0c; Evidence: ev_9104a668d4927fa77b6aba89edbfd2c15589f9c70f37222e12170601f1062764 */

BOOL __stdcall FlsFree(DWORD dwFlsIndex)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008a0c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsFree(dwFlsIndex);
  return BVar1;
}


/* Address: 0x180008a14; Evidence: ev_bd254a7db271169a7547774cb045856b7ec0750c7c8290e7dcad88e95c52a48a */

PVOID __stdcall FlsGetValue(DWORD dwFlsIndex)

{
  PVOID pvVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008a14. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  pvVar1 = FlsGetValue(dwFlsIndex);
  return pvVar1;
}


/* Address: 0x180008a1c; Evidence: ev_3193f8e9422010982f254dc4bbfbf3a73c271415ad224293317c38edbfc30d2d */

void FUN_180008a1c(void)

{
                    /* WARNING: Could not recover jumptable at 0x000180008a23. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*DAT_18001e018)();
  return;
}


/* Address: 0x180008a28; Evidence: ev_bed9b36538b86f83e96ee698ac467e386997329be440f889b45bc418394cf6b2 */

BOOL __stdcall FlsSetValue(DWORD dwFlsIndex,PVOID lpFlsData)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008a28. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = FlsSetValue(dwFlsIndex,lpFlsData);
  return BVar1;
}


/* Address: 0x180008a30; Evidence: ev_5dfff2a58a301e707537ac2e342cc9351f5666dcb6d6c675b0b9103086ae6cf5 */

BOOL __stdcall
InitializeCriticalSectionEx(LPCRITICAL_SECTION lpCriticalSection,DWORD dwSpinCount,DWORD Flags)

{
  BOOL BVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180008a30. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  BVar1 = InitializeCriticalSectionEx(lpCriticalSection,dwSpinCount,Flags);
  return BVar1;
}


/* Address: 0x180008a38; Evidence: ev_f53925896b90b9965e08fc76fec5d92be606f4e8287a2a9225efadd192457973 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008a38(ushort *param_1,uint param_2,LPCWSTR param_3,uint param_4,LPWSTR param_5,
                  int param_6,undefined8 param_7,undefined8 param_8,undefined8 param_9)

{
  LCID Locale;
  FARPROC pFVar1;
  
  if (DAT_18001e090 == (FARPROC)0xffffffffffffffff) {
LAB_180008ae3:
    Locale = FUN_180008b2c(param_1,0);
    LCMapStringW(Locale,param_2,param_3,param_4,param_5,param_6);
  }
  else {
    pFVar1 = DAT_18001e090;
    if (DAT_18001e090 == (FARPROC)0x0) {
      pFVar1 = FUN_1800087a8(0x12,"LCMapStringEx",(uint *)&DAT_180011598,(uint *)"LCMapStringEx");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008ae3;
    }
    (*pFVar1)(param_1,(ulonglong)param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  }
  return;
}


/* Address: 0x180008b2c; Evidence: ev_4bfab1fe536bdce71c0a4d4b836ce4a7fbce1b31ff313a517be5470c21494afe */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008b2c(ushort *param_1,uint param_2)

{
  FARPROC pFVar1;
  
  if (DAT_18001e0a0 == (FARPROC)0xffffffffffffffff) {
LAB_180008b7b:
    FUN_18000b5fc(param_1);
  }
  else {
    pFVar1 = DAT_18001e0a0;
    if (DAT_18001e0a0 == (FARPROC)0x0) {
      pFVar1 = FUN_1800087a8(0x14,"LocaleNameToLCID",(uint *)&DAT_1800115b0,
                             (uint *)"LocaleNameToLCID");
      if (pFVar1 == (FARPROC)0x0) goto LAB_180008b7b;
    }
    (*pFVar1)(param_1,(ulonglong)param_2);
  }
  return;
}


/* Address: 0x180008b90; Evidence: ev_9ae33dfd91417c23bdac8bc0714f0664107e8cb67a7e251912a8979fe27e2edc */

bool FUN_180008b90(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18001e000,0x100,2,local_res8);
  return BVar1 != 0;
}


/* Address: 0x180008bc0; Evidence: ev_92405819bafcab337b23e81b0a78214bce46aa1993b77aaf3d130b9bc48b22ae */

bool FUN_180008bc0(void)

{
  FARPROC pFVar1;
  bool bVar2;
  
  if (DAT_18001e018 == -1) {
    pFVar1 = (FARPROC)0x0;
  }
  else {
    bVar2 = DAT_18001e018 == 0;
    if (!bVar2) goto LAB_180008bfa;
    pFVar1 = FUN_1800087a8(3,"FlsGetValue2",(uint *)&DAT_180011580,(uint *)"FlsGetValue2");
  }
  bVar2 = pFVar1 == (FARPROC)0x0;
LAB_180008bfa:
  return !bVar2;
}


/* Address: 0x180008c10; Evidence: ev_b5db45f7b5c49e8abaa2f7e1fc14198e0b1a86aa5ae9b9338558c0f1b4acdb99 */

/* Library Function - Single Match
    __acrt_uninitialize_winapi_thunks
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_uninitialize_winapi_thunks(char param_1)

{
  HMODULE hLibModule;
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  if (param_1 == '\0') {
    puVar1 = &DAT_18001b5c0;
    do {
      hLibModule = (HMODULE)*puVar1;
      if (hLibModule != (HMODULE)0x0) {
        if (hLibModule != (HMODULE)0xffffffffffffffff) {
          FreeLibrary(hLibModule);
        }
        *puVar1 = 0;
      }
      puVar1 = puVar1 + 1;
      in_RAX = &DAT_18001b678;
    } while (puVar1 != &DAT_18001b678);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}


/* Address: 0x180008c70; Evidence: ev_06d41daa7ccff8afa0b9b12cc6c690cd33bf71cf227a099a1569528ce816d423 */

bool FUN_180008c70(void)

{
  DAT_18001b678 = GetProcessHeap();
  return DAT_18001b678 != (HANDLE)0x0;
}


/* Address: 0x180008ca0; Evidence: ev_cac7ec2f482836f23a2298859f003fd8f58aab492a8d5d45cb7aed2fc55e90bb */

undefined1 FUN_180008ca0(void)

{
  DAT_18001b678 = 0;
  return 1;
}


/* Address: 0x180008cc8; Evidence: ev_e171114a8b265bfdff514076b87d1528d667f5eb9ce9c2867814b8f561cd82a4 */

void FUN_180008cc8(void)

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
  
  FUN_18000dbf0((undefined1 (*) [32])&local_78,0,0x68);
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
    if ((int)DAT_18001ba80 < (int)uVar7) {
      uVar7 = DAT_18001ba80;
    }
    uVar8 = (ulonglong)uVar7;
    if (uVar7 != 0) {
      do {
        if ((((*(longlong *)pbVar4 != -1) && (*(longlong *)pbVar4 != -2)) && ((*puVar6 & 1) != 0))
           && (((*puVar6 & 8) != 0 || (DVar2 = GetFileType(*(HANDLE *)pbVar4), DVar2 != 0)))) {
          uVar3 = (ulonglong)((uint)lVar5 & 0x3f);
          lVar1 = (&DAT_18001b680)[lVar5 >> 6];
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


/* Address: 0x180008dc8; Evidence: ev_b07296b320ef00670130341cef3fefc7a59998503209e884f387e2c42c944c36 */

void FUN_180008dc8(void)

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
    lVar2 = (&DAT_18001b680)[(longlong)(int)uVar5 >> 6];
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
          goto LAB_180008ea6;
        }
      }
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x40;
      *(undefined8 *)(lVar2 + 0x28 + uVar4 * 0x48) = 0xfffffffffffffffe;
      if (DAT_18001bac0 != 0) {
        *(undefined4 *)(*(longlong *)(lVar6 + DAT_18001bac0) + 0x18) = 0xfffffffe;
      }
    }
    else {
      pbVar1 = (byte *)(lVar2 + 0x38 + uVar4 * 0x48);
      *pbVar1 = *pbVar1 | 0x80;
    }
LAB_180008ea6:
    uVar5 = uVar5 + 1;
    lVar6 = lVar6 + 8;
    if (uVar5 == 3) {
      return;
    }
  } while( true );
}


/* Address: 0x180008ed0; Evidence: ev_ab1dc72b02a314e5e2579ef5b575ca21cfa61ff9a20dab82113500cca1547e7f */

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
    FUN_180008cc8();
    FUN_180008dc8();
  }
  __acrt_unlock(7);
  return bVar2;
}


/* Address: 0x180008f10; Evidence: ev_7e46904ab104ad513153a1203119c6429f8cceed454630523195fba4ffe5cca7 */

/* Library Function - Single Match
    __acrt_uninitialize_lowio
   
   Library: Visual Studio 2019 Release */

undefined1 __acrt_uninitialize_lowio(void)

{
  ulonglong uVar1;
  
  uVar1 = 0;
  do {
    if (*(LPCRITICAL_SECTION *)((longlong)&DAT_18001b680 + uVar1) != (LPCRITICAL_SECTION)0x0) {
      __acrt_lowio_destroy_handle_array(*(LPCRITICAL_SECTION *)((longlong)&DAT_18001b680 + uVar1));
      *(undefined8 *)((longlong)&DAT_18001b680 + uVar1) = 0;
    }
    uVar1 = uVar1 + 8;
  } while (uVar1 < 0x400);
  return 1;
}


/* Address: 0x180008f50; Evidence: ev_431986a6f12be22de630dd60fbd6560e5b727dc100f321479c27b24ce65c7fa0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180008f50(undefined8 *param_1,undefined8 *param_2)

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


/* Address: 0x180008fd0; Evidence: ev_e73ce9d02f3946395185d1553a3c207dc3f38996724fd978bb1674f2eb247db6 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180008fd0(longlong param_1,longlong param_2)

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


/* Address: 0x180009010; Evidence: ev_3af07de10dd86736b92d44d27b9ae747ba04b310e5ad5e7b6b87009d84e76d4d */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

bool FUN_180009010(undefined8 param_1)

{
  int iVar1;
  code *pcVar2;
  bool bVar3;
  
  pcVar2 = (code *)FUN_180009060();
  bVar3 = false;
  if (pcVar2 != (code *)0x0) {
    iVar1 = (*pcVar2)(param_1);
    bVar3 = iVar1 != 0;
  }
  return bVar3;
}


/* Address: 0x180009050; Evidence: ev_4d8d16e0c841085a7cff5c204fb5cfeb9c7360eed0d790abc12e26dedf7ea8de */

void FUN_180009050(undefined8 param_1)

{
  DAT_18001ba88 = param_1;
  return;
}


/* Address: 0x180009060; Evidence: ev_ccf6e289e1f3142d11bd1248ebf5e98f796e8a050b1fba5df7ceb65e07409893 */

ulonglong FUN_180009060(void)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(0);
  bVar1 = (byte)DAT_18001a000 & 0x3f;
  uVar2 = DAT_18001ba88 ^ DAT_18001a000;
  __acrt_unlock(0);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x1800090a0; Evidence: ev_f8329ac1f1e3e7ccdfab393d0bf05db53c0eb336436d33b9b3169e3e906eba53 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_18001a000 & 0x3f;
  uVar3 = DAT_18001a000 ^ DAT_18001ba88;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_18001ba88 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_18001a000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}


/* Address: 0x18000910c; Evidence: ev_022891732e74b05e2e52a81665b0e1695a7426ff017a180bf06c3b5d8d052b27 */

ulonglong FUN_18000910c(undefined8 param_1,int *param_2,undefined8 param_3,int *param_4)

{
  byte bVar1;
  ulonglong uVar2;
  
  __acrt_lock(*param_2);
  bVar1 = (byte)DAT_18001a000 & 0x3f;
  uVar2 = DAT_18001baa0 ^ DAT_18001a000;
  __acrt_unlock(*param_4);
  return uVar2 >> bVar1 | uVar2 << 0x40 - bVar1;
}


/* Address: 0x180009154; Evidence: ev_d65822d6523bde67b3fd6712e9f2c00428983003222265e49b2b8e89897bb02a */

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
  FUN_18000910c(local_res8,local_res18,local_res8,local_res10);
  return;
}


/* Address: 0x180009184; Evidence: ev_8ebd6267af1cbac178f544049fe8af6718a4eeae91ade816c4bfb5ec8be14ac8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180009184(undefined8 param_1)

{
  _DAT_18001ba90 = param_1;
  _DAT_18001ba98 = param_1;
  DAT_18001baa0 = param_1;
  _DAT_18001baa8 = param_1;
  return;
}


/* Address: 0x1800091a4; Evidence: ev_8e912843263b2bbaf8251e0f7207a64c5e43cd3530de212876fa38ffee465c6c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_1800091a4(uint param_1)

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
  longlong *plVar10;
  undefined4 local_res10;
  longlong *plVar11;
  
  plVar11 = (longlong *)0x0;
  plVar10 = (longlong *)0x0;
  local_res10 = 0;
  bVar1 = true;
  if (param_1 == 2) {
LAB_1800091fb:
    if (param_1 == 2) {
      puVar9 = (ulonglong *)&DAT_18001ba90;
    }
    else if (param_1 == 6) {
LAB_18000929d:
      puVar9 = &DAT_18001baa0;
      plVar10 = plVar11;
    }
    else if (param_1 == 0xf) {
      puVar9 = (ulonglong *)&DAT_18001baa8;
    }
    else if (param_1 == 0x15) {
      puVar9 = (ulonglong *)&DAT_18001ba98;
      plVar10 = plVar11;
    }
    else {
      if (param_1 == 0x16) goto LAB_18000929d;
      puVar9 = (ulonglong *)0x0;
      plVar10 = plVar11;
    }
  }
  else {
    if (param_1 != 4) {
      if (param_1 != 6) {
        if ((param_1 == 8) || (param_1 == 0xb)) goto LAB_18000922b;
        if ((param_1 != 0xf) && ((param_1 != 0x15 && (param_1 != 0x16)))) goto LAB_18000927d;
      }
      goto LAB_1800091fb;
    }
LAB_18000922b:
    plVar10 = FUN_1800066a8();
    if (plVar10 == (longlong *)0x0) {
      return 0xffffffff;
    }
    lVar5 = *plVar10;
    lVar3 = lVar5 + 0xc0;
    for (; lVar5 != lVar3; lVar5 = lVar5 + 0x10) {
      if (*(uint *)(lVar5 + 4) == param_1) goto LAB_180009278;
    }
    lVar5 = 0;
LAB_180009278:
    if (lVar5 == 0) {
LAB_18000927d:
      puVar2 = (undefined4 *)FUN_1800061a0();
      *puVar2 = 0x16;
      FUN_180005ff8();
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
    bVar7 = (byte)DAT_18001a000 & 0x3f;
    pcVar8 = (code *)(((ulonglong)pcVar8 ^ DAT_18001a000) >> bVar7 |
                     ((ulonglong)pcVar8 ^ DAT_18001a000) << 0x40 - bVar7);
  }
  if (pcVar8 == (code *)0x1) goto LAB_180009386;
  if (pcVar8 == (code *)0x0) {
    if (bVar1) {
      __acrt_unlock(3);
    }
    FUN_18000507c(3);
    pcVar8 = (code *)swi(3);
    uVar6 = (*pcVar8)();
    return uVar6;
  }
  if ((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) {
    lVar5 = plVar10[1];
    plVar10[1] = 0;
    if (param_1 == 8) {
      lVar3 = FUN_180006648();
      local_res10 = *(undefined4 *)(lVar3 + 0x10);
      lVar3 = FUN_180006648();
      *(undefined4 *)(lVar3 + 0x10) = 0x8c;
      goto LAB_18000933e;
    }
  }
  else {
LAB_18000933e:
    if (param_1 == 8) {
      lVar3 = *plVar10;
      for (lVar4 = lVar3 + 0x30; lVar4 != lVar3 + 0xc0; lVar4 = lVar4 + 0x10) {
        *(undefined8 *)(lVar4 + 8) = 0;
      }
      goto LAB_180009386;
    }
  }
  *puVar9 = DAT_18001a000;
LAB_180009386:
  if (bVar1) {
    __acrt_unlock(3);
  }
  if (pcVar8 != (code *)0x1) {
    if (param_1 == 8) {
      lVar3 = FUN_180006648();
      (*pcVar8)(8,*(undefined4 *)(lVar3 + 0x10));
    }
    else {
      (*pcVar8)(param_1);
    }
    if (((param_1 < 0xc) && ((0x910U >> (param_1 & 0x1f) & 1) != 0)) &&
       (plVar10[1] = lVar5, param_1 == 8)) {
      lVar5 = FUN_180006648();
      *(undefined4 *)(lVar5 + 0x10) = local_res10;
    }
  }
  return 0;
}


/* Address: 0x180009400; Evidence: ev_1b3b398efea13950aa67f978fb195c7d821663f735baff47e9f823af39b6c6e0 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180009400(undefined8 param_1)

{
  _DAT_18001bab0 = param_1;
  return;
}


/* Address: 0x180009408; Evidence: ev_8a11128c7bfcfa3909ef618f86932dfd68d12f740e8ccfb9a8cd205efe2f8b17 */

void FUN_180009408(undefined8 param_1,longlong *param_2,undefined8 *param_3,longlong *param_4)

{
  uint uVar1;
  int iVar2;
  
  FUN_1800098cc(*param_2);
  if ((*(longlong *)*param_3 != 0) &&
     (uVar1 = *(uint *)(*(longlong *)*param_3 + 0x14), (uVar1 >> 0xd & 1) != 0)) {
    if (((((byte)uVar1 & 3) == 2) && ((uVar1 & 0xc0) != 0)) || ((uVar1 >> 0xb & 1) != 0)) {
      if ((*(char *)param_3[2] != '\0') || ((*(uint *)(*(longlong *)*param_3 + 0x14) >> 1 & 1) != 0)
         ) {
        iVar2 = FUN_180009674(*(int **)*param_3);
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
  FUN_1800098d8(*param_4);
  return;
}


/* Address: 0x1800094a4; Evidence: ev_fb9405dcd4ff3cbadcec66d5b8513dd4a0d61fad63af11e7c7954876af9c0dcd */

void FUN_1800094a4(undefined8 param_1,int *param_2,undefined8 *param_3,int *param_4)

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
  plVar1 = DAT_18001bac0 + DAT_18001bab8;
  for (plVar3 = DAT_18001bac0; local_40 = plVar3, plVar3 != plVar1; plVar3 = plVar3 + 1) {
    local_58 = *plVar3;
    if ((local_58 != 0) && (uVar2 = *(uint *)(local_58 + 0x14), (uVar2 >> 0xd & 1) != 0)) {
      if (((((byte)uVar2 & 3) == 2) && ((uVar2 & 0xc0) != 0)) || ((uVar2 >> 0xb & 1) != 0)) {
        local_20 = param_3[2];
        local_28 = param_3[1];
        local_30 = *param_3;
        local_38 = &local_58;
        local_50 = local_58;
        local_48 = local_58;
        FUN_180009408(local_res10,&local_48,&local_38,&local_50);
      }
      else {
        *(int *)*param_3 = *(int *)*param_3 + 1;
      }
    }
  }
  __acrt_unlock(*param_4);
  return;
}


/* Address: 0x180009588; Evidence: ev_1a5060cafa2326e54d6452f6ded17a32f508ccf362263de594ef1f1471b68c99 */

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
  FUN_1800094a4(local_res10,local_28 + 1,&local_20,local_28);
  if (local_res8[0] != '\0') {
    local_res18[0] = local_res20[0];
  }
  return local_res18[0];
}


/* Address: 0x1800095e8; Evidence: ev_6f69468ad51f310eb3ee26281039673f57f000c68dca5267dde8888e459dee53 */

undefined8 FUN_1800095e8(int *param_1,longlong *param_2)

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
      uVar2 = FUN_180009ec0((longlong)param_1);
      uVar2 = FUN_18000c314(uVar2,pauVar1,uVar3,param_2);
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


/* Address: 0x180009674; Evidence: ev_b31775bd95c049f26bd6f10d00eed87e338eb67ca405d83efb77fcd992479a73 */

int FUN_180009674(int *param_1)

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
  local_20 = DAT_18001b304 == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_18001a1f8;
    puStack_28 = PTR_DAT_18001a200;
  }
  if (param_1 == (int *)0x0) {
    iVar1 = common_flush_all(false);
    goto LAB_1800096f9;
  }
  uVar2 = FUN_1800095e8(param_1,local_48);
  if ((int)uVar2 == 0) {
    if (((uint)param_1[5] >> 0xb & 1) != 0) {
      iVar1 = FUN_180009ec0((longlong)param_1);
      iVar1 = _commit(iVar1);
      if (iVar1 != 0) goto LAB_1800096d4;
    }
    iVar1 = 0;
  }
  else {
LAB_1800096d4:
    iVar1 = -1;
  }
LAB_1800096f9:
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar3 = FUN_180005b40(local_48);
    *(undefined4 *)(lVar3 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar3 = FUN_180005b40(local_48);
    *(undefined4 *)(lVar3 + 0x24) = local_14;
  }
  return iVar1;
}


/* Address: 0x180009748; Evidence: ev_afedbad031d38f4cca36507f7efd05e290ef69b7a8b7f6a53b0a652ac3905c00 */

int __cdecl common_flush_all(bool param_1)

{
  int iVar1;
  
  iVar1 = common_flush_all(true);
  return iVar1;
}


/* Address: 0x180009750; Evidence: ev_fa4abf97ca97f4d63f08243273ca49cef404c022772660b62db273756e4469e5 */

undefined8 FUN_180009750(void)

{
  longlong lVar1;
  longlong lVar2;
  undefined4 *puVar3;
  int iVar4;
  longlong lVar5;
  undefined *puVar6;
  
  lVar1 = 0;
  lVar5 = 3;
  if (DAT_18001bab8 == 0) {
    iVar4 = 0x200;
  }
  else {
    iVar4 = 3;
    if (2 < DAT_18001bab8) goto LAB_18000978d;
  }
  DAT_18001bab8 = iVar4;
LAB_18000978d:
  DAT_18001bac0 = _calloc_base((longlong)DAT_18001bab8,8);
  FUN_180006b50((LPVOID)0x0);
  if (DAT_18001bac0 == (LPVOID)0x0) {
    DAT_18001bab8 = 3;
    DAT_18001bac0 = _calloc_base(3,8);
    FUN_180006b50((LPVOID)0x0);
    if (DAT_18001bac0 == (LPVOID)0x0) {
      return 0xffffffff;
    }
  }
  puVar3 = &DAT_18001a768;
  puVar6 = &DAT_18001a750;
  lVar2 = lVar1;
  do {
    InitializeCriticalSectionEx((LPCRITICAL_SECTION)(puVar6 + 0x30),4000,0);
    *(undefined **)(lVar1 + (longlong)DAT_18001bac0) = puVar6;
    if (*(longlong *)((&DAT_18001b680)[lVar2 >> 6] + 0x28 + (ulonglong)((uint)lVar2 & 0x3f) * 0x48)
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


/* Address: 0x180009870; Evidence: ev_daab6a2f3372058ed28fb8e7028ca4a0d60a88b2dffe7e2f589c57a0e1becb90 */

/* Library Function - Single Match
    __acrt_uninitialize_stdio
   
   Library: Visual Studio 2019 Release */

void __acrt_uninitialize_stdio(bool param_1)

{
  longlong lVar1;
  
  common_flush_all(param_1);
  FUN_18000c764();
  lVar1 = 0;
  do {
    __acrt_stdio_free_buffer_nolock(*(undefined8 **)(lVar1 + (longlong)DAT_18001bac0));
    DeleteCriticalSection
              ((LPCRITICAL_SECTION)(*(longlong *)(lVar1 + (longlong)DAT_18001bac0) + 0x30));
    lVar1 = lVar1 + 8;
  } while (lVar1 != 0x18);
  FUN_180006b50(DAT_18001bac0);
  DAT_18001bac0 = (LPVOID)0x0;
  return;
}


/* Address: 0x1800098cc; Evidence: ev_7933c9ba3d9add5496ea87ceee1f2545426245d800ed5aaa1e030a8a446ed2eb */

void FUN_1800098cc(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800098d0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x1800098d8; Evidence: ev_c042714f0c6bc7bf061951a1bd5ca0232402ba4382e99b7585a7aedeb0d91f65 */

void FUN_1800098d8(longlong param_1)

{
                    /* WARNING: Could not recover jumptable at 0x0001800098dc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(param_1 + 0x30);
  return;
}


/* Address: 0x1800098f0; Evidence: ev_4dee24dc9d40354ca4390555ce75a18861297d92415d480528ac917ff7ed5bd3 */

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
      pvVar3 = HeapAlloc(DAT_18001b678,0,param_1);
      if (pvVar3 != (LPVOID)0x0) {
        return pvVar3;
      }
      iVar2 = FUN_18000a740();
    } while ((iVar2 != 0) &&
            (bVar1 = FUN_180009010(param_1), (int)CONCAT71(extraout_var,bVar1) != 0));
  }
  puVar4 = (undefined4 *)FUN_1800061a0();
  *puVar4 = 0xc;
  return (LPVOID)0x0;
}


/* Address: 0x180009950; Evidence: ev_d428fc4d532d7230835ec52e17c76b2d1ba7cfca9cd866a4e7f711be29903df2 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_180009950(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_18001bad8 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_180005bb0(param_4);
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
              (iVar3 = FUN_180008478(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_180008478(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_180009cc0(param_1,param_2,param_3,(uint *)&DAT_18001bad8,(longlong)param_4);
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


/* Address: 0x180009ac8; Evidence: ev_fe753fe702203afceeacc4942d84ad5ec76841faada5284b9c716e0536e12197 */

ulonglong FUN_180009ac8(byte *param_1)

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


/* Address: 0x180009b00; Evidence: ev_a4b24ab0500e738cbde6cc68520fe99b545d7da0bb363129e00162c18e6c0614 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_180009b00(ulonglong param_1,byte *param_2,ulonglong param_3,uint *param_4,
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
  
  local_48 = DAT_18001a000 ^ (ulonglong)auStack_78;
  puVar5 = (uint *)&DAT_18001bae0;
  if (param_4 != (uint *)0x0) {
    puVar5 = param_4;
  }
  pbVar6 = (byte *)0x18000fc72;
  uVar2 = 1;
  if (param_2 != (byte *)0x0) {
    pbVar6 = param_2;
    uVar2 = param_3;
  }
  puVar10 = (uint *)(-(ulonglong)(param_2 != (byte *)0x0) & param_1);
  if (uVar2 == 0) {
LAB_180009b62:
    uVar2 = 0xfffffffffffffffe;
  }
  else {
    if (*(short *)((longlong)puVar5 + 6) == 0) {
      uVar3 = FUN_180009ac8(pbVar6);
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
LAB_180009bed:
        uVar9 = (ulonglong)bVar7;
        uVar3 = uVar9;
        if (uVar2 <= uVar9) {
          uVar3 = uVar2;
        }
        while ((ulonglong)((longlong)pbVar6 - (longlong)param_2) < uVar3) {
          bVar1 = *pbVar6;
          pbVar6 = pbVar6 + 1;
          if ((bVar1 & 0xc0) != 0x80) goto LAB_180009c96;
          uVar4 = bVar1 & 0x3f | uVar4 << 6;
        }
        if (uVar3 < uVar9) {
          *(ushort *)(puVar5 + 1) = (ushort)uVar8 & 0xff;
          *(ushort *)((longlong)puVar5 + 6) = (ushort)(byte)(bVar7 - (char)uVar3);
          *puVar5 = uVar4;
          goto LAB_180009b62;
        }
        if ((0x7ff < uVar4 - 0xd800) && (uVar4 < 0x110000)) {
          auStack_60[2] = 0x80;
          auStack_60[3] = 0x800;
          auStack_60[4] = 0x10000;
          if (auStack_60[uVar8 & 0xff] <= uVar4) {
            if (puVar10 != (uint *)0x0) {
              *puVar10 = uVar4;
            }
            uVar2 = FUN_18000c8bc(-(ulonglong)(uVar4 != 0) & uVar9,(undefined8 *)puVar5);
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
      if ((((byte)(bVar1 - 2) < 3) && (bVar7 != 0)) && (bVar7 < bVar1)) goto LAB_180009bed;
    }
LAB_180009c96:
    uVar2 = FUN_18000c8c4((undefined8 *)puVar5,param_5);
  }
  return uVar2;
}


/* Address: 0x180009cc0; Evidence: ev_e07852723d6e1503414748858bae7a2cfede64e1e3234f934a4b3d12770c5899 */

void FUN_180009cc0(undefined2 *param_1,byte *param_2,ulonglong param_3,uint *param_4,
                  longlong param_5)

{
  ulonglong uVar1;
  uint local_18 [4];
  
  local_18[0] = 0;
  uVar1 = FUN_180009b00((ulonglong)local_18,param_2,param_3,param_4,param_5);
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


/* Address: 0x180009d08; Evidence: ev_0a5575605c17e863fd1c19dd70b5ae4f8415202b5c44080f29694e4758bc1e8d */

byte * FUN_180009d08(ushort *param_1,undefined8 *param_2,ulonglong param_3,uint *param_4,
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
      uVar5 = FUN_180009b00(0,pbVar4,uVar5,param_4,param_5);
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
      uVar5 = FUN_180009b00((ulonglong)local_res8,pbVar4,uVar5,param_4,param_5);
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


/* Address: 0x180009ec0; Evidence: ev_036199ef2901f3be4917dbfb9db07ab559784dda1286c801af0b04fe0257fc18 */

undefined4 FUN_180009ec0(longlong param_1)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  
  if (param_1 == 0) {
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 0x16;
    FUN_180005ff8();
    uVar1 = 0xffffffff;
  }
  else {
    uVar1 = *(undefined4 *)(param_1 + 0x18);
  }
  return uVar1;
}


/* Address: 0x180009ee8; Evidence: ev_16b8d4e6c84ce951e47a33f4814b7c992abd4d04744ffa4ff2f6022b522522e5 */

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
    if (((undefined *)puVar2[-2] != &DAT_18001a208) &&
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


/* Address: 0x180009f74; Evidence: ev_1e934a00e0c7109e99e654e066c4fd52ae0395eb7a6b8c5fbce6038f72c1f0b6 */

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
       (*(undefined ***)((longlong)param_1 + 0xf8) != &PTR_DAT_18001a860)) &&
      (*(int **)((longlong)param_1 + 0xe0) != (int *)0x0)) &&
     (**(int **)((longlong)param_1 + 0xe0) == 0)) {
    piVar1 = *(int **)((longlong)param_1 + 0xf0);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_180006b50(piVar1);
      __acrt_locale_free_monetary(*(longlong *)((longlong)param_1 + 0xf8));
    }
    piVar1 = *(int **)((longlong)param_1 + 0xe8);
    if ((piVar1 != (int *)0x0) && (*piVar1 == 0)) {
      FUN_180006b50(piVar1);
      __acrt_locale_free_numeric(*(undefined8 **)((longlong)param_1 + 0xf8));
    }
    FUN_180006b50(*(LPVOID *)((longlong)param_1 + 0xe0));
    FUN_180006b50(*(LPVOID *)((longlong)param_1 + 0xf8));
  }
  if ((*(int **)((longlong)param_1 + 0x100) != (int *)0x0) &&
     (**(int **)((longlong)param_1 + 0x100) == 0)) {
    FUN_180006b50((LPVOID)(*(longlong *)((longlong)param_1 + 0x108) + -0xfe));
    FUN_180006b50((LPVOID)(*(longlong *)((longlong)param_1 + 0x110) + -0x80));
    FUN_180006b50((LPVOID)(*(longlong *)((longlong)param_1 + 0x118) + -0x80));
    FUN_180006b50(*(LPVOID *)((longlong)param_1 + 0x100));
  }
  __acrt_locale_free_lc_time_if_unreferenced(*(undefined ***)((longlong)param_1 + 0x120));
  puVar3 = (undefined8 *)((longlong)param_1 + 0x128);
  lVar2 = 6;
  puVar4 = (undefined8 *)((longlong)param_1 + 0x38);
  do {
    if ((((undefined *)puVar4[-2] != &DAT_18001a208) &&
        (piVar1 = (int *)*puVar4, piVar1 != (int *)0x0)) && (*piVar1 == 0)) {
      FUN_180006b50(piVar1);
      FUN_180006b50((LPVOID)*puVar3);
    }
    if (((puVar4[-3] != 0) && (piVar1 = (int *)puVar4[-1], piVar1 != (int *)0x0)) && (*piVar1 == 0))
    {
      FUN_180006b50(piVar1);
    }
    puVar3 = puVar3 + 1;
    puVar4 = puVar4 + 4;
    lVar2 = lVar2 + -1;
  } while (lVar2 != 0);
  FUN_180006b50(param_1);
  return;
}


/* Address: 0x18000a0ec; Evidence: ev_80b3d67042a3ede06470bf9b58e44cb32e7d4057ff57ed6f35c431dcc540f8a2 */

/* Library Function - Single Match
    __acrt_locale_add_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_add_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108a0)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + 1;
    UNLOCK();
    return iVar2 + 1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000a114; Evidence: ev_a95239f5de54c21546961f1f1be7ff15fdecc3ede540707bd936391a391df50f */

/* Library Function - Single Match
    __acrt_locale_free_lc_time_if_unreferenced
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_lc_time_if_unreferenced(undefined **param_1)

{
  if (((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108a0)) &&
     (*(int *)((longlong)param_1 + 0x15c) == 0)) {
    __acrt_locale_free_time(param_1);
    FUN_180006b50(param_1);
  }
  return;
}


/* Address: 0x18000a14c; Evidence: ev_d277e0e48880461aecb4b0996f0ac2025cf77bef88437f045dd7e275ddefe5d5 */

/* Library Function - Single Match
    __acrt_locale_release_lc_time_reference
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

int __acrt_locale_release_lc_time_reference(undefined **param_1)

{
  int *piVar1;
  int iVar2;
  
  if ((param_1 != (undefined **)0x0) && (param_1 != &PTR_DAT_1800108a0)) {
    LOCK();
    piVar1 = (int *)((longlong)param_1 + 0x15c);
    iVar2 = *piVar1;
    *piVar1 = *piVar1 + -1;
    UNLOCK();
    return iVar2 + -1;
  }
  return 0x7fffffff;
}


/* Address: 0x18000a174; Evidence: ev_266461d081409926fd0281e9199580ba510723918898f9eb030cbb9d04f440f7 */

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
      if (((undefined *)puVar2[-2] != &DAT_18001a208) &&
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


/* Address: 0x18000a21c; Evidence: ev_7d9a2717ce0ce8484657c9945395d4902ce89b0a1887e2cc0658f9e56df498a6 */

/* Library Function - Single Match
    __acrt_update_thread_locale_data
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined ** __acrt_update_thread_locale_data(void)

{
  longlong lVar1;
  undefined **ppuVar2;
  
  lVar1 = FUN_180006648();
  if (((DAT_18001a858 & *(uint *)(lVar1 + 0x3a8)) == 0) ||
     (ppuVar2 = *(undefined ***)(lVar1 + 0x90), ppuVar2 == (undefined **)0x0)) {
    __acrt_lock(4);
    ppuVar2 = _updatetlocinfoEx_nolock((longlong *)(lVar1 + 0x90),DAT_18001b308);
    __acrt_unlock(4);
    if (ppuVar2 == (undefined **)0x0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
  }
  return ppuVar2;
}


/* Address: 0x18000a28c; Evidence: ev_76539ce113dbd7c73a070282689998e15415601fa2d3860228ba52553d78592e */

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
         (ppuVar1 != &PTR_DAT_18001a0a0)) {
        __acrt_free_locale(ppuVar1);
      }
    }
  }
  return param_2;
}


/* Address: 0x18000a2f4; Evidence: ev_a20ece2c99d8664d72169df14add6ee834857c1cd85a18e1c418b80207a2ea68 */

/* Library Function - Single Match
    __acrt_locale_free_monetary
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_monetary(longlong param_1)

{
  if (param_1 != 0) {
    if (*(undefined **)(param_1 + 0x18) != PTR_DAT_18001a878) {
      FUN_180006b50(*(undefined **)(param_1 + 0x18));
    }
    if (*(undefined **)(param_1 + 0x20) != PTR_DAT_18001a880) {
      FUN_180006b50(*(undefined **)(param_1 + 0x20));
    }
    if (*(undefined **)(param_1 + 0x28) != PTR_DAT_18001a888) {
      FUN_180006b50(*(undefined **)(param_1 + 0x28));
    }
    if (*(undefined **)(param_1 + 0x30) != PTR_DAT_18001a890) {
      FUN_180006b50(*(undefined **)(param_1 + 0x30));
    }
    if (*(undefined **)(param_1 + 0x38) != PTR_DAT_18001a898) {
      FUN_180006b50(*(undefined **)(param_1 + 0x38));
    }
    if (*(undefined **)(param_1 + 0x40) != PTR_DAT_18001a8a0) {
      FUN_180006b50(*(undefined **)(param_1 + 0x40));
    }
    if (*(undefined **)(param_1 + 0x48) != PTR_DAT_18001a8a8) {
      FUN_180006b50(*(undefined **)(param_1 + 0x48));
    }
    if (*(undefined **)(param_1 + 0x68) != PTR_DAT_18001a8c8) {
      FUN_180006b50(*(undefined **)(param_1 + 0x68));
    }
    if (*(undefined **)(param_1 + 0x70) != PTR_DAT_18001a8d0) {
      FUN_180006b50(*(undefined **)(param_1 + 0x70));
    }
    if (*(undefined **)(param_1 + 0x78) != PTR_DAT_18001a8d8) {
      FUN_180006b50(*(undefined **)(param_1 + 0x78));
    }
    if (*(undefined **)(param_1 + 0x80) != PTR_DAT_18001a8e0) {
      FUN_180006b50(*(undefined **)(param_1 + 0x80));
    }
    if (*(undefined **)(param_1 + 0x88) != PTR_DAT_18001a8e8) {
      FUN_180006b50(*(undefined **)(param_1 + 0x88));
    }
    if (*(undefined **)(param_1 + 0x90) != PTR_DAT_18001a8f0) {
      FUN_180006b50(*(undefined **)(param_1 + 0x90));
    }
  }
  return;
}


/* Address: 0x18000a400; Evidence: ev_c91049ec6ccff4a17d59107e8b0e67f811f83f8b179bb2c16559169647d6a123 */

/* Library Function - Single Match
    __acrt_locale_free_numeric
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_numeric(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    if ((undefined *)*param_1 != PTR_DAT_18001a860) {
      FUN_180006b50((undefined *)*param_1);
    }
    if ((undefined *)param_1[1] != PTR_DAT_18001a868) {
      FUN_180006b50((undefined *)param_1[1]);
    }
    if ((undefined *)param_1[2] != PTR_DAT_18001a870) {
      FUN_180006b50((undefined *)param_1[2]);
    }
    if ((undefined *)param_1[0xb] != PTR_DAT_18001a8b8) {
      FUN_180006b50((undefined *)param_1[0xb]);
    }
    if ((undefined *)param_1[0xc] != PTR_DAT_18001a8c0) {
      FUN_180006b50((undefined *)param_1[0xc]);
    }
  }
  return;
}


/* Address: 0x18000a46c; Evidence: ev_78676b372587bd0c1a86bc31542b09e15ef5de8e504df320dc6f0b0bb5f02695 */

void FUN_18000a46c(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_180006b50((LPVOID)*param_1);
  }
  return;
}


/* Address: 0x18000a4a0; Evidence: ev_0f909f6afaa413e95231d35ba7b412cbf7d9e0c8ffc94c60caa0026a292d97a5 */

/* Library Function - Single Match
    __acrt_locale_free_time
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_locale_free_time(undefined8 *param_1)

{
  if (param_1 != (undefined8 *)0x0) {
    FUN_18000a46c(param_1,7);
    FUN_18000a46c(param_1 + 7,7);
    FUN_18000a46c(param_1 + 0xe,0xc);
    FUN_18000a46c(param_1 + 0x1a,0xc);
    FUN_18000a46c(param_1 + 0x26,2);
    FUN_180006b50((LPVOID)param_1[0x28]);
    FUN_180006b50((LPVOID)param_1[0x29]);
    FUN_180006b50((LPVOID)param_1[0x2a]);
    FUN_18000a46c(param_1 + 0x2c,7);
    FUN_18000a46c(param_1 + 0x33,7);
    FUN_18000a46c(param_1 + 0x3a,0xc);
    FUN_18000a46c(param_1 + 0x46,0xc);
    FUN_18000a46c(param_1 + 0x52,2);
    FUN_180006b50((LPVOID)param_1[0x54]);
    FUN_180006b50((LPVOID)param_1[0x55]);
    FUN_180006b50((LPVOID)param_1[0x56]);
    FUN_180006b50((LPVOID)param_1[0x57]);
  }
  return;
}


/* Address: 0x18000a5a8; Evidence: ev_b85adaa5aa831af9348ad154d45e474530e5decb821d2f3bc23019056a0945b8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Function: __chkstk replaced with injection: alloca_probe */

BOOL FUN_18000a5a8(longlong *param_1,DWORD param_2,undefined8 param_3,undefined8 param_4,
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
  local_30 = DAT_18001a000 ^ (ulonglong)local_58;
  FUN_180004980(&local_50,param_1);
  if (param_6 == 0) {
    param_6 = *(uint *)(local_48 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  iVar3 = FUN_180008478(param_6,(ulonglong)((-(uint)(param_7 != 0) & 8) + 1));
  if (iVar3 == 0) {
    BVar10 = 0;
    puVar9 = auStack_88;
    goto LAB_18000a6fe;
  }
  uVar1 = (longlong)iVar3 * 2;
  uVar7 = -(ulonglong)(uVar1 < uVar1 + 0x10) & uVar1 + 0x10;
  if (uVar7 == 0) {
    lpSrcStr = (undefined1 (*) [32])0x0;
LAB_18000a6e6:
    BVar10 = 0;
    BVar4 = 0;
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18000a6fe;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000a6e6;
      *puVar6 = 0xcccc;
LAB_18000a694:
      lpSrcStr = (undefined1 (*) [32])(puVar6 + 4);
      puVar9 = puVar8;
    }
    else {
      puVar6 = _malloc_base(uVar7);
      lpSrcStr = (undefined1 (*) [32])0x0;
      puVar9 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000a694;
      }
    }
    if (lpSrcStr == (undefined1 (*) [32])0x0) goto LAB_18000a6e6;
    *(undefined8 *)(puVar9 + -8) = 0x18000a6aa;
    FUN_18000dbf0(lpSrcStr,0,uVar1);
    *(int *)(puVar9 + 0x28) = iVar3;
    *(undefined1 (**) [32])(puVar9 + 0x20) = lpSrcStr;
    *(undefined8 *)(puVar9 + -8) = 0x18000a6c6;
    iVar3 = FUN_180008478(param_6,1);
    if (iVar3 == 0) goto LAB_18000a6e6;
    *(undefined8 *)(puVar9 + -8) = 0x18000a6e0;
    BVar4 = GetStringTypeW(param_2,(LPCWSTR)lpSrcStr,iVar3,param_5);
  }
  BVar10 = BVar4;
  if (*(int *)(lpSrcStr[-1] + 0x10) == 0xdddd) {
    *(undefined8 *)(puVar9 + -8) = 0x18000a6fe;
    FUN_180006b50(lpSrcStr[-1] + 0x10);
  }
LAB_18000a6fe:
  if (local_38 != '\0') {
    *(uint *)(local_50 + 0x3a8) = *(uint *)(local_50 + 0x3a8) & 0xfffffffd;
  }
  *(undefined8 *)(puVar9 + -8) = 0x18000a71d;
  return BVar10;
}


/* Address: 0x18000a740; Evidence: ev_1e62ae6add933e2db97f0eecacf8ce83562aac72a7d3ed6c08a06aad10802654 */

undefined4 FUN_18000a740(void)

{
  return DAT_18001baf0;
}


/* Address: 0x18000a750; Evidence: ev_47539b1e24b5a063ac0ec4de0aac4f9ccb66c7a38005c7540b1238dd43c4b2d9 */

uint FUN_18000a750(uint param_1)

{
  uint uVar1;
  undefined4 *puVar2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001baf0;
    DAT_18001baf0 = param_1;
  }
  else {
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 0x16;
    FUN_180005ff8();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}


/* Address: 0x18000a780; Evidence: ev_6312f5be4223dcdd1f41b7fcafaa034db5ee509de2efa9b04e51292c54832e94 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000a780(undefined1 *param_1,ulonglong param_2,ulonglong param_3,undefined *param_4)

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
  
  local_58 = DAT_18001a000 ^ (ulonglong)auStack_468;
  if ((((param_1 == (undefined1 *)0x0) && (param_2 != 0)) || (param_3 == 0)) ||
     (param_4 == (undefined *)0x0)) {
    puVar3 = (undefined4 *)FUN_1800061a0();
    *puVar3 = 0x16;
    FUN_180005ff8();
  }
  else {
    FUN_18000c948();
    FUN_18000dbf0((undefined1 (*) [32])local_438,0,0x1f0);
    FUN_18000dbf0((undefined1 (*) [32])local_248,0,0x1f0);
    if (1 < param_2) {
      local_448 = 0;
      puVar10 = param_1 + (param_2 - 1) * param_3;
LAB_18000a840:
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
LAB_18000a9b0:
        puVar4 = puVar7;
        if (puVar6 < puVar4) {
          do {
            puVar6 = puVar6 + param_3;
            if (puVar4 <= puVar6) goto LAB_18000a9d0;
            iVar2 = (*(code *)param_4)(puVar6);
          } while (iVar2 < 1);
        }
        else {
LAB_18000a9d0:
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
          goto LAB_18000a9b0;
        }
        if (puVar4 < puVar7) {
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= puVar4) goto LAB_18000aa57;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        else {
LAB_18000aa57:
          do {
            puVar7 = puVar7 + -param_3;
            if (puVar7 <= param_1) break;
            iVar2 = (*(code *)param_4)(puVar7);
          } while (iVar2 == 0);
        }
        if ((longlong)puVar7 - (longlong)param_1 < (longlong)puVar10 - (longlong)puVar6)
        goto LAB_18000aaad;
        if (param_1 < puVar7) {
          local_438[local_448] = param_1;
          local_248[local_448] = puVar7;
          local_448 = local_448 + 1;
        }
        param_1 = puVar6;
        if (puVar10 <= puVar6) goto LAB_18000a8c3;
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
      goto LAB_18000a8c3;
    }
  }
  return;
LAB_18000aaad:
  if (puVar6 < puVar10) {
    local_438[local_448] = puVar6;
    local_248[local_448] = puVar10;
    local_448 = local_448 + 1;
  }
  puVar10 = puVar7;
  if (puVar7 <= param_1) {
LAB_18000a8c3:
    local_448 = local_448 + -1;
    if (local_448 < 0) {
      return;
    }
    param_1 = (undefined1 *)local_438[local_448];
    puVar10 = (undefined1 *)local_248[local_448];
  }
  goto LAB_18000a840;
}


/* Address: 0x18000ab20; Evidence: ev_a6ba6285823faf94d6dc1281565aa676ed42cf4ec64e9fb6e5d9cecdf812b641 */

undefined4 FUN_18000ab20(char *param_1,longlong param_2,longlong param_3,longlong param_4)

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
      goto LAB_18000ab79;
    }
  }
  else if (param_1 == (char *)0x0) goto LAB_18000ab79;
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
      puVar2 = (undefined4 *)FUN_1800061a0();
      *puVar2 = 0x22;
      FUN_180005ff8();
      return 0x22;
    }
    *param_1 = '\0';
  }
LAB_18000ab79:
  puVar2 = (undefined4 *)FUN_1800061a0();
  *puVar2 = 0x16;
  FUN_180005ff8();
  return 0x16;
}


/* Address: 0x18000ac50; Evidence: ev_6d2a5e1ff7925af5b850fecafdf5c41734478256762da5d151676c6a4f61a1d5 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

byte * FUN_18000ac50(byte *param_1,byte *param_2)

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


/* Address: 0x18000acf0; Evidence: ev_74243e1759672ab5e83f56b564ab551f475c7086c693108d976d62b0b60ff13e */

/* WARNING: Removing unreachable block (ram,0x00018000af8c) */
/* WARNING: Removing unreachable block (ram,0x00018000af85) */
/* WARNING: Removing unreachable block (ram,0x00018000af7e) */
/* WARNING: Removing unreachable block (ram,0x00018000af77) */
/* WARNING: Removing unreachable block (ram,0x00018000af70) */
/* WARNING: Removing unreachable block (ram,0x00018000af69) */
/* WARNING: Removing unreachable block (ram,0x00018000af62) */
/* WARNING: Removing unreachable block (ram,0x00018000af5b) */
/* WARNING: Removing unreachable block (ram,0x00018000af54) */
/* WARNING: Removing unreachable block (ram,0x00018000af4d) */
/* WARNING: Removing unreachable block (ram,0x00018000af46) */
/* WARNING: Removing unreachable block (ram,0x00018000af3f) */
/* WARNING: Removing unreachable block (ram,0x00018000af38) */
/* WARNING: Removing unreachable block (ram,0x00018000af31) */
/* WARNING: Removing unreachable block (ram,0x00018000af2a) */
/* WARNING: Removing unreachable block (ram,0x00018000aded) */
/* WARNING: Removing unreachable block (ram,0x00018000adfc) */
/* WARNING: Removing unreachable block (ram,0x00018000ae0b) */
/* WARNING: Removing unreachable block (ram,0x00018000ae1a) */
/* WARNING: Removing unreachable block (ram,0x00018000ae29) */
/* WARNING: Removing unreachable block (ram,0x00018000ae35) */
/* WARNING: Removing unreachable block (ram,0x00018000ae41) */
/* WARNING: Removing unreachable block (ram,0x00018000ae4d) */
/* WARNING: Removing unreachable block (ram,0x00018000ae59) */
/* WARNING: Removing unreachable block (ram,0x00018000ae65) */
/* WARNING: Removing unreachable block (ram,0x00018000ae71) */
/* WARNING: Removing unreachable block (ram,0x00018000ae7d) */
/* WARNING: Removing unreachable block (ram,0x00018000ae89) */
/* WARNING: Removing unreachable block (ram,0x00018000ae95) */
/* WARNING: Removing unreachable block (ram,0x00018000aea1) */

byte * FUN_18000acf0(byte *param_1,byte *param_2)

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
        pbVar19 = FUN_18000ac50(param_1,param_2);
        return pbVar19;
      }
      goto LAB_18000af99;
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
    if (uVar21 == 0 || (ulonglong)uVar2 < 0x10 - uVar21) goto LAB_18000af99;
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
LAB_18000af99:
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
  pbVar19 = FUN_18000ac50(param_1,param_2);
  return pbVar19;
}


/* Address: 0x18000b0a8; Evidence: ev_b33068c06d969781b8c3babdea282beca6e3cb3678ef630cd255a68b880a1d69 */

void FUN_18000b0a8(uchar *param_1,uchar *param_2)

{
  _mbsdec_l(param_1,param_2,(_locale_t)0x0);
  return;
}


/* Address: 0x18000b0b0; Evidence: ev_76be61fb06d087122a28266f45f7c037b8f5c6ac1114e8807168aca705f1d8f5 */

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
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 0x16;
    FUN_180005ff8();
  }
  else if (_Start < _Pos) {
    FUN_180004980(local_28,(longlong *)_Locale);
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


/* Address: 0x18000b144; Evidence: ev_66b40af923fba683ae419d46d44a8d32ead696a9c6826173b012a14eef7134f7 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000b144(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
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
  local_30 = DAT_18001a000 ^ (ulonglong)local_38;
  if (0 < param_5) {
    __strncnt(param_4,(longlong)param_5);
  }
  if (param_8 == 0) {
    param_8 = *(uint *)(*param_1 + 0xc);
  }
  local_60 = 0;
  local_68 = 0;
  uVar5 = FUN_180008478(param_8,(ulonglong)((-(uint)(param_9 != 0) & 8) + 1));
  pWVar9 = (LPCWSTR)0x0;
  uVar3 = (uint)uVar5;
  puVar13 = auStack_88;
  if (uVar3 == 0) goto LAB_18000b44f;
  uVar5 = (longlong)(int)uVar3 * 2 + 0x10;
  uVar5 = -(ulonglong)((ulonglong)((longlong)(int)uVar3 * 2) < uVar5) & uVar5;
  if (uVar5 == 0) {
LAB_18000b435:
    uVar5 = 0;
    if (pWVar9 != (LPCWSTR)0x0) goto LAB_18000b43c;
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
      if (puVar6 == (undefined4 *)0x0) goto LAB_18000b435;
      *puVar6 = 0xcccc;
LAB_18000b250:
      pWVar9 = (LPCWSTR)(puVar6 + 4);
      puVar12 = puVar10;
    }
    else {
      puVar6 = _malloc_base(uVar5);
      pWVar9 = (LPCWSTR)0x0;
      puVar12 = auStack_88;
      if (puVar6 != (undefined4 *)0x0) {
        *puVar6 = 0xdddd;
        goto LAB_18000b250;
      }
    }
    if (pWVar9 == (LPCWSTR)0x0) goto LAB_18000b435;
    *(uint *)(puVar12 + 0x28) = uVar3;
    *(LPCWSTR *)(puVar12 + 0x20) = pWVar9;
    *(undefined8 *)(puVar12 + -8) = 0x18000b27a;
    iVar2 = FUN_180008478(param_8,1);
    if (iVar2 == 0) goto LAB_18000b435;
    *(undefined8 *)(puVar12 + 0x40) = 0;
    *(undefined8 *)(puVar12 + 0x38) = 0;
    *(undefined8 *)(puVar12 + 0x30) = 0;
    *(undefined4 *)(puVar12 + 0x28) = 0;
    *(undefined8 *)(puVar12 + 0x20) = 0;
    *(undefined8 *)(puVar12 + -8) = 0x18000b2ad;
    iVar2 = FUN_180008a38(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                          *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                          *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
    puVar6 = (undefined4 *)0x0;
    uVar5 = (ulonglong)iVar2;
    if (iVar2 == 0) goto LAB_18000b435;
    if ((param_3 & 0x400) == 0) {
      uVar8 = uVar5 * 2 + 0x10;
      uVar8 = -(ulonglong)(uVar5 * 2 < uVar8) & uVar8;
      if (uVar8 == 0) goto LAB_18000b418;
      if (uVar8 < 0x401) {
        uVar5 = uVar8 + 0xf;
        if (uVar5 <= uVar8) {
          uVar5 = 0xffffffffffffff0;
        }
        *(undefined8 *)(puVar12 + -8) = 0x18000b350;
        lVar1 = -(uVar5 & 0xfffffffffffffff0);
        puVar11 = puVar12 + lVar1;
        puVar7 = (undefined4 *)(puVar12 + lVar1 + 0x50);
        puVar12 = puVar12 + lVar1;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xcccc;
          puVar12 = puVar11;
LAB_18000b37e:
          puVar6 = puVar7 + 4;
          goto LAB_18000b382;
        }
      }
      else {
        *(undefined8 *)(puVar12 + -8) = 0x18000b36e;
        puVar7 = _malloc_base(uVar8);
        puVar6 = (undefined4 *)0x0;
        if (puVar7 != (undefined4 *)0x0) {
          *puVar7 = 0xdddd;
          goto LAB_18000b37e;
        }
LAB_18000b382:
        if (puVar6 != (undefined4 *)0x0) {
          *(undefined8 *)(puVar12 + 0x40) = 0;
          *(undefined8 *)(puVar12 + 0x38) = 0;
          *(undefined8 *)(puVar12 + 0x30) = 0;
          *(int *)(puVar12 + 0x28) = iVar2;
          *(undefined4 **)(puVar12 + 0x20) = puVar6;
          *(undefined8 *)(puVar12 + -8) = 0x18000b3b4;
          iVar4 = FUN_180008a38(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                                *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                                *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
          if (iVar4 != 0) {
            *(undefined8 *)(puVar12 + 0x38) = 0;
            *(undefined8 *)(puVar12 + 0x30) = 0;
            if (param_7 == 0) {
              *(undefined4 *)(puVar12 + 0x28) = 0;
              *(undefined8 *)(puVar12 + 0x20) = 0;
              *(undefined8 *)(puVar12 + -8) = 0x18000b3e2;
              uVar3 = FUN_180008508(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000b418;
            }
            else {
              *(int *)(puVar12 + 0x28) = param_7;
              *(undefined8 *)(puVar12 + 0x20) = param_6;
              *(undefined8 *)(puVar12 + -8) = 0x18000b3fc;
              uVar3 = FUN_180008508(param_8,0,puVar6,iVar2);
              if (uVar3 == 0) goto LAB_18000b41d;
            }
            uVar5 = (ulonglong)uVar3;
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000b413;
              FUN_180006b50(puVar6 + -4);
            }
            goto LAB_18000b43c;
          }
LAB_18000b418:
          if (puVar6 != (undefined4 *)0x0) {
LAB_18000b41d:
            if (puVar6[-4] == 0xdddd) {
              *(undefined8 *)(puVar12 + -8) = 0x18000b42e;
              FUN_180006b50(puVar6 + -4);
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
        *(undefined8 *)(puVar12 + -8) = 0x18000b305;
        uVar3 = FUN_180008a38(param_2,param_3,pWVar9,uVar3,*(LPWSTR *)(puVar12 + 0x20),
                              *(int *)(puVar12 + 0x28),*(undefined8 *)(puVar12 + 0x30),
                              *(undefined8 *)(puVar12 + 0x38),*(undefined8 *)(puVar12 + 0x40));
        uVar5 = (ulonglong)uVar3;
        if (uVar3 != 0) goto LAB_18000b43c;
      }
      goto LAB_18000b435;
    }
LAB_18000b43c:
    if (*(int *)(pWVar9 + -8) == 0xdddd) {
      *(undefined8 *)(puVar12 + -8) = 0x18000b44d;
      FUN_180006b50(pWVar9 + -8);
    }
  }
  uVar5 = uVar5 & 0xffffffff;
  puVar13 = puVar12;
LAB_18000b44f:
  *(undefined8 *)(puVar13 + -8) = 0x18000b45b;
  return uVar5;
}


/* Address: 0x18000b478; Evidence: ev_d89d22239185736e17a97dc10e49a88f6754d8bd6eb6052682d92163f608e721 */

/* Library Function - Single Match
    __acrt_LCMapStringA
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_LCMapStringA(longlong *param_1,ushort *param_2,uint param_3,char *param_4,int param_5,
                        undefined8 param_6,int param_7,uint param_8,int param_9)

{
  longlong local_28;
  longlong local_20 [2];
  char local_10;
  
  FUN_180004980(&local_28,param_1);
  FUN_18000b144(local_20,param_2,param_3,param_4,param_5,param_6,param_7,param_8,param_9);
  if (local_10 != '\0') {
    *(uint *)(local_28 + 0x3a8) = *(uint *)(local_28 + 0x3a8) & 0xfffffffd;
  }
  return;
}


/* Address: 0x18000b510; Evidence: ev_186777f6465a439f2c8a00fdc0b242cf218216a60ba4313f4a20f07314f9922d */

uint FUN_18000b510(void)

{
  undefined8 uVar1;
  
  uVar1 = __acrt_initialize_multibyte();
  return (uint)uVar1 & 0xff ^ 1;
}


/* Address: 0x18000b530; Evidence: ev_0affbe406a41849c4134954a07529f6eaa884a968511a142ff0872a23409a9d7 */

/* Library Function - Single Match
    _msize_base
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 _msize_base(longlong param_1)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 0x16;
    FUN_180005ff8();
    return 0xffffffffffffffff;
  }
                    /* WARNING: Could not recover jumptable at 0x00018000b562. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar2 = HeapSize(DAT_18001b678,0,param_1);
  return uVar2;
}


/* Address: 0x18000b580; Evidence: ev_158ebad012ebaba59d320ff09d6a5930bcfeb2b4f5971fe38b47a7ed27eb7e1a */

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
      FUN_180006b50(param_1);
    }
    else {
      if (param_2 < 0xffffffffffffffe1) {
        do {
          pvVar3 = HeapReAlloc(DAT_18001b678,0,param_1,param_2);
          if (pvVar3 != (LPVOID)0x0) {
            return pvVar3;
          }
          iVar2 = FUN_18000a740();
        } while ((iVar2 != 0) &&
                (bVar1 = FUN_180009010(param_2), (int)CONCAT71(extraout_var,bVar1) != 0));
      }
      puVar4 = (undefined4 *)FUN_1800061a0();
      *puVar4 = 0xc;
    }
    pvVar3 = (LPVOID)0x0;
  }
  return pvVar3;
}


/* Address: 0x18000b5fc; Evidence: ev_2231dadc0450aedb46e8a4d49de8ea626663c2d8c1dd028694269e412fa44e8d */

undefined4 FUN_18000b5fc(ushort *param_1)

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
      iVar3 = FUN_18000c8e0(param_1,(ushort *)(&PTR_DAT_180013670)[(longlong)iVar2 * 2],0x55);
      if (iVar3 == 0) {
        iVar5 = *(int *)(&DAT_180013678 + (longlong)iVar2 * 0x10);
        if (iVar5 < 0) {
          return 0;
        }
        if (0xe3 < (ulonglong)(longlong)iVar5) {
          return 0;
        }
        return *(undefined4 *)(&DAT_180011c10 + (longlong)iVar5 * 0x10);
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


/* Address: 0x18000b6a4; Evidence: ev_46b5c0973155cc5273e522fd3aaace1ee6fc0c3583347eba02406879dd771be3 */

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
  FUN_180006b50((LPVOID)0x0);
  return puVar5;
}


/* Address: 0x18000b74c; Evidence: ev_e970a516ecb175f59048e3c3d43e4c5c42120bca9e7f52c32433bc53daaa96f0 */

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
    FUN_180006b50(param_1);
  }
  return;
}


/* Address: 0x18000b79c; Evidence: ev_3eb232e2b7f43a7fcba1f35fac63bd2cef884a3a9e0e4e8c50f479b1f1e27d55 */

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
    iVar1 = DAT_18001ba80;
    while (iVar1 <= (int)param_1) {
      if ((&DAT_18001b680)[lVar5] == 0) {
        puVar4 = __acrt_lowio_create_handle_array();
        (&DAT_18001b680)[lVar5] = puVar4;
        if (puVar4 == (undefined8 *)0x0) {
          lVar3 = 0xc;
          break;
        }
        iVar1 = DAT_18001ba80 + 0x40;
        DAT_18001ba80 = iVar1;
      }
      lVar5 = lVar5 + 1;
    }
    __acrt_unlock(7);
  }
  else {
    puVar2 = (undefined4 *)FUN_1800061a0();
    *puVar2 = 9;
    FUN_180005ff8();
    lVar3 = 9;
  }
  return lVar3;
}


/* Address: 0x18000b844; Evidence: ev_53af430f0e1ebacde4e312705916e6444c5b14dc01457ea7acc1d9762a992a27 */

void FUN_18000b844(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b864. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  EnterCriticalSection
            ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18000b86c; Evidence: ev_5da751659907378dab7ba02819838fe01a07a07d399346813a634c868ba5ef9d */

void FUN_18000b86c(uint param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018000b88c. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection
            ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + (ulonglong)(param_1 & 0x3f) * 0x48);
  return;
}


/* Address: 0x18000b894; Evidence: ev_ef475eada878154ca31dfa1665a566a56dda06e09612f6454ae663aa03bdcfc8 */

undefined8 FUN_18000b894(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  undefined4 *puVar3;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_18000c978();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_18000b914;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_18000b914:
      *(undefined8 *)
       ((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  puVar3 = (undefined4 *)FUN_1800061a0();
  *puVar3 = 9;
  puVar3 = (undefined4 *)FUN_18000617c();
  *puVar3 = 0;
  return 0xffffffff;
}


/* Address: 0x18000b950; Evidence: ev_865b8f5a8dab7f8fcbc7ca173b41a8c302a22959a57515c55a5e817e6e4ea9de */

undefined8 FUN_18000b950(uint param_1)

{
  undefined4 *puVar1;
  
  if (param_1 == 0xfffffffe) {
    puVar1 = (undefined4 *)FUN_18000617c();
    *puVar1 = 0;
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
      if ((*(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    puVar1 = (undefined4 *)FUN_18000617c();
    *puVar1 = 0;
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
    FUN_180005ff8();
  }
  return 0xffffffffffffffff;
}


/* Address: 0x18000b9c8; Evidence: ev_77343129141f11d86dd92628dadada2f5515617fc64da2dd39a2a0f4848b27ab */

undefined8 FUN_18000b9c8(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  DWORD *pDVar4;
  undefined4 *puVar5;
  undefined8 uVar6;
  
  FUN_18000b844(*param_2);
  uVar1 = *(uint *)*param_3;
  if ((*(byte *)((&DAT_18001b680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) != 0) {
    hFile = (HANDLE)FUN_18000b950(uVar1);
    BVar2 = FlushFileBuffers(hFile);
    uVar6 = 0;
    if (BVar2 != 0) goto LAB_18000ba3f;
    DVar3 = GetLastError();
    pDVar4 = (DWORD *)FUN_18000617c();
    *pDVar4 = DVar3;
  }
  puVar5 = (undefined4 *)FUN_1800061a0();
  *puVar5 = 9;
  uVar6 = 0xffffffff;
LAB_18000ba3f:
  FUN_18000b86c(*param_4);
  return uVar6;
}


/* Address: 0x18000ba54; Evidence: ev_ef7bd56542e6235561f39a55e2f3ae70bdcd772ba27a4ba69796bf891a565dbc */

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
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
  }
  else {
    if (((-1 < _FileHandle) && ((uint)_FileHandle < DAT_18001ba80)) &&
       ((*(byte *)((&DAT_18001b680)[(longlong)_FileHandle >> 6] + 0x38 +
                  (ulonglong)(_FileHandle & 0x3f) * 0x48) & 1) != 0)) {
      local_18[0] = local_res8;
      local_res18[0] = _FileHandle;
      local_res20[0] = _FileHandle;
      uVar2 = FUN_18000b9c8(local_res10,local_res20,local_18,local_res18);
      return (int)uVar2;
    }
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
    FUN_180005ff8();
  }
  return -1;
}


/* Address: 0x18000bae8; Evidence: ev_aad3d8c89bf04fe3cec12705bb0b0a57ebc20e1cac2d0c7cbd3096cb9a47b843 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000bae8(DWORD *param_1,uint param_2,undefined1 (*param_3) [32],ulonglong param_4,
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
  local_40 = DAT_18001a000 ^ (ulonglong)auStackY_108;
  local_b0 = param_5;
  lVar17 = (longlong)(int)param_2 >> 6;
  uVar6 = (ulonglong)(param_2 & 0x3f);
  local_70 = *(HANDLE *)((&DAT_18001b680)[lVar17] + 0x28 + uVar6 * 0x48);
  local_b8 = (undefined1 (*) [32])(*param_3 + (param_4 & 0xffffffff));
  local_98 = param_3;
  local_90 = lVar17;
  local_a0 = GetConsoleOutputCP();
  uVar14 = 0;
  if ((char)local_b0[5] == '\0') {
    FUN_180005bb0(local_b0);
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
        pcVar8 = (char *)(uVar6 * 0x48 + 0x3e + (&DAT_18001b680)[local_68]);
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
          cVar1 = (&DAT_18001a900)[(byte)(*param_3)[0]];
          iVar3 = cVar1 + 1;
          lVar17 = (longlong)local_b8 - (longlong)param_3;
          if (lVar17 < iVar3) {
            uVar16 = uVar14;
            if (0 < lVar17) {
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_18001b680)[local_90]) =
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
          pbVar7 = FUN_180009d08(local_c4,&local_78,(ulonglong)uVar10,local_a8,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + cVar1);
          lVar17 = local_90;
        }
        else {
          cVar1 = (&DAT_18001a900)[*(byte *)((&DAT_18001b680)[lVar17] + 0x3e + uVar6 * 0x48)];
          iVar3 = (cVar1 + 1) - uVar10;
          local_a8[0] = iVar3;
          lVar15 = (longlong)local_b8 - (longlong)param_3;
          uVar16 = (ulonglong)iVar3;
          if (lVar15 < (longlong)uVar16) {
            if (0 < lVar15) {
              uVar16 = uVar18;
              do {
                *(undefined1 *)(uVar16 + uVar6 * 0x48 + 0x3e + (&DAT_18001b680)[lVar17]) =
                     *(undefined1 *)((longlong)param_3 + (uVar16 - uVar18));
                uVar10 = (int)uVar14 + 1;
                uVar14 = (ulonglong)uVar10;
                uVar16 = uVar16 + 1;
              } while ((int)uVar10 < lVar15);
            }
            param_1[1] = param_1[1] + (int)lVar15;
            return param_1;
          }
          puVar12 = (undefined1 *)(uVar6 * 0x48 + 0x3e + (&DAT_18001b680)[local_68]);
          uVar9 = uVar14;
          do {
            local_58[uVar9] = *puVar12;
            uVar9 = uVar9 + 1;
            puVar12 = puVar12 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          uVar9 = uVar14;
          if (0 < (longlong)uVar16) {
            FUN_18000dfb0((undefined1 (*) [32])(local_58 + uVar18),param_3,uVar16);
          }
          do {
            *(undefined1 *)(uVar9 + uVar6 * 0x48 + 0x3e + (&DAT_18001b680)[lVar17]) = 0;
            uVar9 = uVar9 + 1;
          } while ((longlong)uVar9 < (longlong)uVar18);
          local_88[0] = 0;
          local_88[1] = 0;
          local_80 = local_58;
          uVar10 = (cVar1 + 1 == 4) + 1;
          pbVar7 = FUN_180009d08(local_c4,&local_80,(ulonglong)uVar10,local_88,(longlong)local_b0);
          if (pbVar7 == (byte *)0xffffffffffffffff) {
            return param_1;
          }
          pauVar13 = (undefined1 (*) [32])(*param_3 + (int)(local_a8[0] - 1));
        }
      }
      else {
        lVar15 = (&DAT_18001b680)[lVar17];
        bVar2 = *(byte *)(lVar15 + 0x3d + uVar6 * 0x48);
        if ((bVar2 & 4) == 0) {
          if (*(short *)(*(longlong *)local_b0[3] + (ulonglong)(byte)(*param_3)[0] * 2) < 0) {
            pauVar13 = (undefined1 (*) [32])(*param_3 + 1);
            if (local_b8 <= pauVar13) {
              *(undefined1 *)(lVar15 + 0x3e + uVar6 * 0x48) = (*param_3)[0];
              pbVar7 = (byte *)((&DAT_18001b680)[lVar17] + 0x3d + uVar6 * 0x48);
              *pbVar7 = *pbVar7 | 4;
              param_1[1] = (int)uVar16 + 1;
              return param_1;
            }
            iVar3 = FUN_180009950(local_c4,(byte *)param_3,2,local_b0);
            if (iVar3 == -1) {
              return param_1;
            }
            goto LAB_18000bdf0;
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
        iVar3 = FUN_180009950(local_c4,(byte *)pauVar13,uVar16,local_b0);
        pauVar13 = param_3;
        if (iVar3 == -1) {
          return param_1;
        }
      }
LAB_18000bdf0:
      param_3 = (undefined1 (*) [32])(*pauVar13 + 1);
      uVar10 = FUN_180008508(local_a0,0,local_c4,uVar10);
      hFile = local_70;
      if (uVar10 == 0) {
        return param_1;
      }
      local_c0[0] = 0;
      BVar4 = WriteFile(local_70,local_48,uVar10,local_c0,(LPOVERLAPPED)0x0);
      if (BVar4 == 0) {
LAB_18000bf49:
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
        if (BVar4 == 0) goto LAB_18000bf49;
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


/* Address: 0x18000bf7c; Evidence: ev_43ce1c45e1622c5a6601060452734837db2b10a107a2f947971065f470707183 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000bf7c(DWORD *param_1,uint param_2,char *param_3,ulonglong param_4)

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
  
  local_20 = 0x18000bf94;
  local_28 = DAT_18001a000 ^ (ulonglong)auStackY_1468;
  pcVar5 = param_3 + (param_4 & 0xffffffff);
  hFile = *(HANDLE *)
           ((&DAT_18001b680)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x18000c084; Evidence: ev_19dda7a31e4a741f018683cefad6997ce2f2282945f113690fba81de4f1d4a82 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000c084(DWORD *param_1,uint param_2,short *param_3,ulonglong param_4)

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
  
  local_20 = 0x18000c09c;
  local_28 = DAT_18001a000 ^ (ulonglong)auStackY_1468;
  psVar5 = (short *)((param_4 & 0xffffffff) + (longlong)param_3);
  hFile = *(HANDLE *)
           ((&DAT_18001b680)[(longlong)(int)param_2 >> 6] + 0x28 +
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


/* Address: 0x18000c1a0; Evidence: ev_6ca8ab81aeae4e67ea29d7c60ab1d2ea9de55fbc815ad164e439b18af55a8f72 */

/* WARNING: Function: __chkstk replaced with injection: alloca_probe */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

DWORD * FUN_18000c1a0(DWORD *param_1,uint param_2,short *param_3,uint param_4)

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
  
  local_30 = 0x18000c1bc;
  local_38 = DAT_18001a000 ^ (ulonglong)auStackY_1498;
  hFile = *(HANDLE *)
           ((&DAT_18001b680)[(longlong)(int)param_2 >> 6] + 0x28 +
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
    uVar2 = FUN_180008508(0xfde9,0,local_1448,(int)((longlong)psVar8 - (longlong)local_1448 >> 1));
    if (uVar2 == 0) {
LAB_18000c2dd:
      DVar4 = GetLastError();
      *param_1 = DVar4;
      return param_1;
    }
    uVar6 = 0;
    if (uVar2 != 0) {
      do {
        local_1458[0] = 0;
        BVar3 = WriteFile(hFile,local_d98 + uVar6,uVar2 - (int)uVar6,local_1458,(LPOVERLAPPED)0x0);
        if (BVar3 == 0) goto LAB_18000c2dd;
        uVar5 = (int)uVar6 + local_1458[0];
        uVar6 = (ulonglong)uVar5;
      } while (uVar5 < uVar2);
    }
    param_1[1] = (int)psVar7 - (int)param_3;
  } while( true );
}


/* Address: 0x18000c314; Evidence: ev_97adbd7a077ca801cd4f4139bea7911f5d74ba4facaccc2078a637d59e2491f8 */

int FUN_18000c314(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
    if (((int)param_1 < 0) || (DAT_18001ba80 <= param_1)) {
      bVar1 = false;
    }
    else {
      bVar1 = true;
    }
    if (bVar1) {
      if ((*(byte *)((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        FUN_18000b844(param_1);
        iVar2 = -1;
        if ((*(byte *)((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 1) == 0) {
          *(undefined1 *)(param_4 + 6) = 1;
          *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
          *(undefined1 *)(param_4 + 7) = 1;
          *(undefined4 *)((longlong)param_4 + 0x34) = 0;
        }
        else {
          iVar2 = FUN_18000c434(param_1,param_2,param_3,param_4);
        }
        FUN_18000b86c(param_1);
        return iVar2;
      }
    }
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 9;
    FUN_180005f40((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
  }
  return -1;
}


/* Address: 0x18000c434; Evidence: ev_254c633b9529d86eb2a571c34033062f9cfc55fa7ffc48d2bf43eaba035eca6c */

int FUN_18000c434(uint param_1,undefined1 (*param_2) [32],uint param_3,longlong *param_4)

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
LAB_18000c464:
    *(undefined1 *)(param_4 + 7) = 1;
    *(undefined4 *)((longlong)param_4 + 0x34) = 0;
    *(undefined1 *)(param_4 + 6) = 1;
    *(undefined4 *)((longlong)param_4 + 0x2c) = 0x16;
    FUN_180005f40((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_4);
    return -1;
  }
  uVar10 = (ulonglong)(param_1 & 0x3f);
  lVar13 = (longlong)(int)param_1 >> 6;
  cVar1 = *(char *)((&DAT_18001b680)[lVar13] + 0x39 + uVar10 * 0x48);
  if (((byte)(cVar1 - 1U) < 2) && ((~param_3 & 1) == 0)) goto LAB_18000c464;
  if ((*(byte *)((&DAT_18001b680)[lVar13] + 0x38 + uVar10 * 0x48) & 0x20) != 0) {
    thunk_FUN_18000c980(param_1,(LARGE_INTEGER)0x0,2,(longlong)param_4);
  }
  local_60 = 0;
  bVar4 = FUN_18000c85c(param_1);
  if (((int)CONCAT71(extraout_var,bVar4) == 0) ||
     (-1 < *(char *)((&DAT_18001b680)[lVar13] + 0x38 + uVar10 * 0x48))) {
LAB_18000c61c:
    if (-1 < *(char *)((&DAT_18001b680)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48)) {
      local_70 = 0;
      local_68 = 0;
      BVar7 = WriteFile(*(HANDLE *)
                         ((&DAT_18001b680)[lVar13] + 0x28 + (ulonglong)(param_1 & 0x3f) * 0x48),
                        param_2,param_3,(LPDWORD)((longlong)&local_70 + 4),(LPOVERLAPPED)0x0);
      DVar12 = local_68;
      uVar3 = local_70;
      if (BVar7 == 0) {
        DVar12 = GetLastError();
        local_70 = CONCAT44(local_70._4_4_,DVar12);
        DVar12 = local_68;
        uVar3 = local_70;
      }
      goto LAB_18000c6d1;
    }
    if (cVar1 == '\0') {
      pDVar11 = FUN_18000bf7c((DWORD *)&local_70,param_1,(char *)param_2,uVar14);
    }
    else if (cVar1 == '\x01') {
      pDVar11 = FUN_18000c1a0((DWORD *)&local_70,param_1,(short *)param_2,param_3);
    }
    else {
      DVar12 = 0;
      uVar3 = local_60;
      if (cVar1 != '\x02') goto LAB_18000c6d1;
      pDVar11 = FUN_18000c084((DWORD *)&local_70,param_1,(short *)param_2,uVar14);
    }
  }
  else {
    if ((char)param_4[5] == '\0') {
      FUN_180005bb0(param_4);
    }
    if ((*(longlong *)(param_4[3] + 0x138) == 0) &&
       (*(char *)((&DAT_18001b680)[lVar13] + 0x39 + uVar10 * 0x48) == '\0')) goto LAB_18000c61c;
    local_50[0] = 0;
    BVar7 = GetConsoleMode(*(HANDLE *)((&DAT_18001b680)[lVar13] + 0x28 + uVar10 * 0x48),local_50);
    if (BVar7 == 0) goto LAB_18000c61c;
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
            sVar5 = FUN_18000ca38(sVar6);
            if (sVar5 != sVar6) {
LAB_18000c5e4:
              DVar8 = GetLastError();
              local_70 = CONCAT44(local_70._4_4_,DVar8);
              uVar3 = local_70;
              break;
            }
            local_70 = CONCAT44(iVar9 + 2,(DWORD)local_70);
            iVar2 = iVar9 + 2;
            if (sVar6 == 10) {
              sVar6 = FUN_18000ca38(0xd);
              if (sVar6 != 0xd) goto LAB_18000c5e4;
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
      goto LAB_18000c6d1;
    }
    pDVar11 = FUN_18000bae8((DWORD *)&local_70,param_1,param_2,uVar14,param_4);
  }
  DVar12 = pDVar11[2];
  uVar3 = *(undefined8 *)pDVar11;
LAB_18000c6d1:
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
    FUN_180006158((uint)local_60,(longlong)param_4);
    return -1;
  }
  if (((*(byte *)((&DAT_18001b680)[lVar13] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40) != 0
      ) && ((*param_2)[0] == '\x1a')) {
    return 0;
  }
  *(undefined4 *)((longlong)param_4 + 0x34) = 0;
  *(undefined1 *)(param_4 + 6) = 1;
  *(undefined4 *)((longlong)param_4 + 0x2c) = 0x1c;
  *(undefined1 *)(param_4 + 7) = 1;
  return -1;
}


/* Address: 0x18000c764; Evidence: ev_07beb82fcacadad202f4435155e880daea6ecf642f9bf0793125921ea8107e3f */

int FUN_18000c764(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_18001bab8; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_18001bac0 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18000cb9c(*(int **)(DAT_18001bac0 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001bac0 + lVar4 * 8) + 0x30));
      FUN_180006b50(*(LPVOID *)(DAT_18001bac0 + lVar4 * 8));
      *(undefined8 *)(DAT_18001bac0 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}


/* Address: 0x18000c818; Evidence: ev_384e3b22e484d648ce657d892d4cff407147f8e2040c4f2955a38179b10fdf72 */

/* Library Function - Single Match
    __acrt_stdio_free_buffer_nolock
   
   Library: Visual Studio 2019 Release */

void __acrt_stdio_free_buffer_nolock(undefined8 *param_1)

{
  if (((*(uint *)((longlong)param_1 + 0x14) >> 0xd & 1) != 0) &&
     ((*(uint *)((longlong)param_1 + 0x14) >> 6 & 1) != 0)) {
    FUN_180006b50((LPVOID)param_1[1]);
    LOCK();
    *(uint *)((longlong)param_1 + 0x14) = *(uint *)((longlong)param_1 + 0x14) & 0xfffffebf;
    UNLOCK();
    param_1[1] = 0;
    *param_1 = 0;
    *(undefined4 *)(param_1 + 2) = 0;
  }
  return;
}


/* Address: 0x18000c85c; Evidence: ev_5d6edb7ad2a67b98f46d2c54cbe82a333ff7e28fd3fcf7f83042b5fe73e0e2b0 */

byte FUN_18000c85c(uint param_1)

{
  undefined4 *puVar1;
  
  if (param_1 == 0xfffffffe) {
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
      return *(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    puVar1 = (undefined4 *)FUN_1800061a0();
    *puVar1 = 9;
    FUN_180005ff8();
  }
  return 0;
}


/* Address: 0x18000c8bc; Evidence: ev_dbdba3d940ee226f320ed23c462b55e6a6aaa19ea7eed6cdb8baf919ede8bc6e */

undefined8 FUN_18000c8bc(undefined8 param_1,undefined8 *param_2)

{
  *param_2 = 0;
  return param_1;
}


/* Address: 0x18000c8c4; Evidence: ev_ede46f094a8d97e564be02c21d9abdbfda1557653f6411f87414b1c7f095b05b */

undefined8 FUN_18000c8c4(undefined8 *param_1,longlong param_2)

{
  *param_1 = 0;
  *(undefined1 *)(param_2 + 0x30) = 1;
  *(undefined4 *)(param_2 + 0x2c) = 0x2a;
  return 0xffffffffffffffff;
}


/* Address: 0x18000c8e0; Evidence: ev_5e9d5955098f55f9e45d10f5f9a7262d9e17c23dd34afd79f162b3c7c95394ec */

int FUN_18000c8e0(ushort *param_1,ushort *param_2,longlong param_3)

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


/* Address: 0x18000c948; Evidence: ev_94d62c57ff416c8fa330fe7adc7e22e8a7b32884d4daa43a5f3f42bc59826037 */

void FUN_18000c948(void)

{
  _guard_check_icall();
  return;
}


/* Address: 0x18000c960; Evidence: ev_50f63aefbfec0a852bc7e4dff257f2218d2080fbd534a092e9cdfb9b0761fe5d */

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


/* Address: 0x18000c978; Evidence: ev_6e8116bbcd122fabc19bccd61c47f0f55a8430f9aed6445e5a16b06512532626 */

undefined4 FUN_18000c978(void)

{
  return DAT_18001baf4;
}


/* Address: 0x18000c980; Evidence: ev_925791b05dd2a2c7ab2cc42a4bb4b14b2b7f0dd495ed8cd24ad8017cfdba4dfa */

longlong FUN_18000c980(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER local_18 [2];
  
  hFile = (HANDLE)FUN_18000b950(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    local_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,local_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_180006158(DVar3,param_4);
    }
    else if (local_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)local_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x18000ca30; Evidence: ev_953dcb04ee85621e9873e5fb0369d60b371210d648354e56e4656fbee83ed952 */

longlong thunk_FUN_18000c980(uint param_1,LARGE_INTEGER param_2,DWORD param_3,longlong param_4)

{
  byte *pbVar1;
  BOOL BVar2;
  DWORD DVar3;
  HANDLE hFile;
  LARGE_INTEGER aLStack_18 [2];
  
  hFile = (HANDLE)FUN_18000b950(param_1);
  if (hFile == (HANDLE)0xffffffffffffffff) {
    *(undefined1 *)(param_4 + 0x30) = 1;
    *(undefined4 *)(param_4 + 0x2c) = 9;
  }
  else {
    aLStack_18[0].QuadPart = 0;
    BVar2 = SetFilePointerEx(hFile,param_2,aLStack_18,param_3);
    if (BVar2 == 0) {
      DVar3 = GetLastError();
      FUN_180006158(DVar3,param_4);
    }
    else if (aLStack_18[0].QuadPart != -1) {
      pbVar1 = (byte *)((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 +
                       (ulonglong)(param_1 & 0x3f) * 0x48);
      *pbVar1 = *pbVar1 & 0xfd;
      return (longlong)aLStack_18[0].s;
    }
  }
  return -1;
}


/* Address: 0x18000ca38; Evidence: ev_b702a24932ff1d99c0eddb73a0cafa9ec11c30ad93c1c4eb344e78180007ff74 */

undefined2 FUN_18000ca38(undefined2 param_1)

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


/* Address: 0x18000ca78; Evidence: ev_3cab97fd3b8ccff27d71ceb12af243411224b4eebcf6c627997b83cfa6100a97 */

ulonglong FUN_18000ca78(int *param_1,longlong *param_2)

{
  ulonglong uVar1;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005f40((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  else {
    if (((uint)param_1[5] >> 0xc & 1) == 0) {
      FUN_1800098cc((longlong)param_1);
      uVar1 = FUN_18000caf4(param_1,param_2);
      FUN_1800098d8((longlong)param_1);
      return uVar1 & 0xffffffff;
    }
    FUN_18000cf88((undefined8 *)param_1);
  }
  return 0xffffffff;
}


/* Address: 0x18000caf4; Evidence: ev_1ccba5339199088e408100201736b818cf776d30e03448d91101d8c6385a8d31 */

ulonglong FUN_18000caf4(int *param_1,longlong *param_2)

{
  uint uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  
  if (param_1 == (int *)0x0) {
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 0x16;
    FUN_180005f40((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
    uVar2 = 0xffffffff;
  }
  else {
    uVar2 = 0xffffffff;
    if (((uint)param_1[5] >> 0xd & 1) != 0) {
      uVar2 = FUN_1800095e8(param_1,param_2);
      uVar2 = uVar2 & 0xffffffff;
      __acrt_stdio_free_buffer_nolock((undefined8 *)param_1);
      uVar1 = FUN_180009ec0((longlong)param_1);
      uVar3 = FUN_18000cdf4(uVar1,param_2);
      if ((int)uVar3 < 0) {
        uVar2 = 0xffffffff;
      }
      else if (*(LPVOID *)(param_1 + 10) != (LPVOID)0x0) {
        FUN_180006b50(*(LPVOID *)(param_1 + 10));
        param_1[10] = 0;
        param_1[0xb] = 0;
      }
    }
    FUN_18000cf88((undefined8 *)param_1);
  }
  return uVar2;
}


/* Address: 0x18000cb9c; Evidence: ev_cc09a18246416d5a33171adccf4371fa8bc60b7708d20687d66f1c9b423835cd */

ulonglong FUN_18000cb9c(int *param_1)

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
  local_20 = DAT_18001b304 == 0;
  local_38 = 0;
  local_18 = '\0';
  local_10 = '\0';
  if ((bool)local_20) {
    local_30 = PTR_PTR_18001a1f8;
    puStack_28 = PTR_DAT_18001a200;
  }
  uVar1 = FUN_18000ca78(param_1,local_48);
  if (local_20 == '\x02') {
    *(uint *)(local_48[0] + 0x3a8) = *(uint *)(local_48[0] + 0x3a8) & 0xfffffffd;
  }
  if (local_18 != '\0') {
    lVar2 = FUN_180005b40(local_48);
    *(undefined4 *)(lVar2 + 0x20) = local_1c;
  }
  if (local_10 != '\0') {
    lVar2 = FUN_180005b40(local_48);
    *(undefined4 *)(lVar2 + 0x24) = local_14;
  }
  return uVar1 & 0xffffffff;
}


/* Address: 0x18000cc40; Evidence: ev_4985412603803712693f08f7d94f73a31931c04f2ce3b15b8b70754e51f9eccb */

/* Library Function - Single Match
    __dcrt_lowio_ensure_console_output_initialized
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

bool __dcrt_lowio_ensure_console_output_initialized(void)

{
  if (DAT_18001aa00 == (HANDLE)0xfffffffffffffffe) {
    DAT_18001aa00 = CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
  }
  return DAT_18001aa00 != (HANDLE)0xffffffffffffffff;
}


/* Address: 0x18000cca0; Evidence: ev_cbd7e5222e36e660a9ff0b8db93558998391f86f52fa2482a942aa5e42523342 */

void FUN_18000cca0(void)

{
  if (DAT_18001aa00 < (HANDLE)0xfffffffffffffffe) {
    CloseHandle(DAT_18001aa00);
  }
  return;
}


/* Address: 0x18000ccbc; Evidence: ev_9a9fe5110b39be1b282aadb3654819a11f7442f1776739d52666ecdc19f47e0e */

/* Library Function - Single Match
    __dcrt_write_console
   
   Libraries: Visual Studio 2017 Debug, Visual Studio 2017 Release, Visual Studio 2019 Debug, Visual
   Studio 2019 Release */

BOOL __dcrt_write_console(void *param_1,DWORD param_2,LPDWORD param_3)

{
  BOOL BVar1;
  DWORD DVar2;
  
  BVar1 = WriteConsoleW(DAT_18001aa00,param_1,param_2,param_3,(LPVOID)0x0);
  if (BVar1 == 0) {
    DVar2 = GetLastError();
    if (DVar2 == 6) {
      if (DAT_18001aa00 < (HANDLE)0xfffffffffffffffe) {
        CloseHandle(DAT_18001aa00);
      }
      DAT_18001aa00 =
           CreateFileW(L"CONOUT$",0x40000000,3,(LPSECURITY_ATTRIBUTES)0x0,3,0,(HANDLE)0x0);
      BVar1 = WriteConsoleW(DAT_18001aa00,param_1,param_2,param_3,(LPVOID)0x0);
    }
  }
  return BVar1;
}


/* Address: 0x18000cd7c; Evidence: ev_15756395a5e139cc0ad3e511d7e9419fe5a22568b7524cf369ac85c386665eab */

ulonglong FUN_18000cd7c(undefined8 param_1,uint *param_2,undefined8 *param_3,uint *param_4)

{
  uint uVar1;
  longlong lVar2;
  ulonglong uVar3;
  
  FUN_18000b844(*param_2);
  uVar1 = *(uint *)*param_3;
  lVar2 = param_3[1];
  if ((*(byte *)((&DAT_18001b680)[(longlong)(int)uVar1 >> 6] + 0x38 +
                (ulonglong)(uVar1 & 0x3f) * 0x48) & 1) == 0) {
    *(undefined1 *)(lVar2 + 0x30) = 1;
    *(undefined4 *)(lVar2 + 0x2c) = 9;
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = FUN_18000ceb8(uVar1,lVar2);
    uVar3 = uVar3 & 0xffffffff;
  }
  FUN_18000b86c(*param_4);
  return uVar3;
}


/* Address: 0x18000cdf4; Evidence: ev_bbb89306f99fa21a97ffc99f837c9259e90d3d9cbb933f64826b107094efecde */

ulonglong FUN_18000cdf4(uint param_1,longlong *param_2)

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
    if (((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) &&
       ((*(byte *)((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 +
                  (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0)) {
      local_20 = local_res8;
      local_res20[0] = param_1;
      local_28[0] = param_1;
      local_18 = param_2;
      uVar1 = FUN_18000cd7c(local_res18,local_28,&local_20,local_res20);
      return uVar1;
    }
    *(undefined1 *)(param_2 + 7) = 1;
    *(undefined4 *)((longlong)param_2 + 0x34) = 0;
    *(undefined1 *)(param_2 + 6) = 1;
    *(undefined4 *)((longlong)param_2 + 0x2c) = 9;
    FUN_180005f40((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_2);
  }
  return 0xffffffff;
}


/* Address: 0x18000ceb8; Evidence: ev_9a126ecfddfff22a557c6d3e3a90743daf75f991656515cb91c1fca82be20a73 */

undefined8 FUN_18000ceb8(uint param_1,longlong param_2)

{
  BOOL BVar1;
  DWORD DVar2;
  longlong lVar3;
  longlong lVar4;
  HANDLE hObject;
  undefined8 uVar5;
  
  lVar3 = FUN_18000b950(param_1);
  if (lVar3 != -1) {
    if (((param_1 == 1) && ((*(byte *)(DAT_18001b680 + 200) & 1) != 0)) ||
       ((param_1 == 2 && ((*(byte *)(DAT_18001b680 + 0x80) & 1) != 0)))) {
      lVar3 = FUN_18000b950(2);
      lVar4 = FUN_18000b950(1);
      if (lVar4 == lVar3) goto LAB_18000ceda;
    }
    hObject = (HANDLE)FUN_18000b950(param_1);
    BVar1 = CloseHandle(hObject);
    if (BVar1 == 0) {
      DVar2 = GetLastError();
      goto LAB_18000cf38;
    }
  }
LAB_18000ceda:
  DVar2 = 0;
LAB_18000cf38:
  FUN_18000b894(param_1);
  *(undefined1 *)
   ((&DAT_18001b680)[(longlong)(int)param_1 >> 6] + 0x38 + (ulonglong)(param_1 & 0x3f) * 0x48) = 0;
  if (DVar2 == 0) {
    uVar5 = 0;
  }
  else {
    FUN_180006158(DVar2,param_2);
    uVar5 = 0xffffffff;
  }
  return uVar5;
}


/* Address: 0x18000cf88; Evidence: ev_9c1f5827c4148bfbda3719a4ee5e2b9ac14fee849ac525a1fa1605eee5a34728 */

undefined4 FUN_18000cf88(undefined8 *param_1)

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


/* Address: 0x18000cfb0; Evidence: ev_e112be688ce591b2ab7d744f8c4fb99a4e27541b3ee97521865dfb367c059813 */

/* WARNING: Removing unreachable block (ram,0x00018000d030) */
/* WARNING: Removing unreachable block (ram,0x00018000d022) */
/* WARNING: Removing unreachable block (ram,0x00018000cfc7) */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_18000cfb0(void)

{
  longlong lVar1;
  int *piVar2;
  undefined8 uVar3;
  byte in_XCR0;
  
  _DAT_18001baf8 = 0;
  DAT_18001bafc = 0;
  lVar1 = cpuid_Version_info(1);
  if ((*(uint *)(lVar1 + 0xc) & 0x18001000) == 0x18001000) {
    uVar3 = xinuse(0);
    if ((in_XCR0 & (byte)uVar3 & 6) == 6) {
      _DAT_18001baf8 = 1;
      DAT_18001bafc = 1;
    }
    else {
      _DAT_18001baf8 = 0;
    }
  }
  if ((_DAT_18001baf8 != 0) && (piVar2 = (int *)cpuid_basic_info(0), 6 < *piVar2)) {
    lVar1 = cpuid_Extended_Feature_Enumeration_info(7);
    if ((*(uint *)(lVar1 + 4) & 0x20) != 0) {
      DAT_18001bafc = 3;
      _DAT_18001baf8 = 3;
      return 0;
    }
  }
  return 0;
}


/* Address: 0x18000d064; Evidence: ev_80904c985ddc2becbb0362803bfb05ae099f1a94468d9273be5f4961e4472086 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d0eb) */
/* WARNING: Removing unreachable block (ram,0x00018000d0c8) */

void FUN_18000d064(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000d20c();
  if (bVar1) {
    (*DAT_18001bb08)(&DAT_18001bb18);
  }
  else {
    do {
    } while (DAT_18001bb18 != 0);
    LOCK();
    DAT_18001bb18 = 1;
    UNLOCK();
  }
  FUN_18000d3e0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000d3e0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000d20c();
  if (bVar1) {
    (*DAT_18001bb10)(&DAT_18001bb18);
  }
  else {
    DAT_18001bb18 = 0;
  }
  return;
}


/* Address: 0x18000d150; Evidence: ev_44c980c09f0fc994d1da65675cc0e569ed4eb83cf39c8794f89418f9d5ea4b4e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d173) */
/* WARNING: Removing unreachable block (ram,0x00018000d199) */
/* WARNING: Removing unreachable block (ram,0x00018000d1a5) */
/* WARNING: Removing unreachable block (ram,0x00018000d181) */
/* WARNING: Removing unreachable block (ram,0x00018000d1b0) */
/* WARNING: Removing unreachable block (ram,0x00018000d1c2) */
/* WARNING: Removing unreachable block (ram,0x00018000d1d6) */
/* WARNING: Removing unreachable block (ram,0x00018000d1df) */
/* WARNING: Removing unreachable block (ram,0x00018000db70) */
/* WARNING: Removing unreachable block (ram,0x00018000d1f9) */

void FUN_18000d150(void)

{
  return;
}


/* Address: 0x18000d20c; Evidence: ev_a054106da69fb41ee0d70819bd08a8d83c4ce5a056dc9b7a807924a54292fb46 */

bool FUN_18000d20c(void)

{
  HMODULE pHVar1;
  HMODULE hModule;
  FARPROC pFVar2;
  HMODULE pHVar3;
  bool bVar4;
  
  if (DAT_18001bb00 != (HMODULE)0x1) {
    if (DAT_18001bb00 != (HMODULE)0x0) {
      return true;
    }
    hModule = GetModuleHandleW(L"KERNEL32.DLL");
    if (((hModule == (HMODULE)0x0) ||
        (pFVar2 = GetProcAddress(hModule,"AcquireSRWLockExclusive"), pFVar2 == (FARPROC)0x0)) ||
       (DAT_18001bb08 = pFVar2, pFVar2 = GetProcAddress(hModule,"ReleaseSRWLockExclusive"),
       pFVar2 == (FARPROC)0x0)) {
      hModule = (HMODULE)0x1;
      pFVar2 = DAT_18001bb10;
    }
    DAT_18001bb10 = pFVar2;
    pHVar3 = (HMODULE)0x0;
    LOCK();
    bVar4 = DAT_18001bb00 != (HMODULE)0x0;
    pHVar1 = hModule;
    if (bVar4) {
      pHVar3 = DAT_18001bb00;
      pHVar1 = DAT_18001bb00;
    }
    DAT_18001bb00 = pHVar1;
    UNLOCK();
    if ((bVar4) || (hModule != (HMODULE)0x1)) {
      return pHVar3 != (HMODULE)0x1;
    }
  }
  return false;
}


/* Address: 0x18000d2ac; Evidence: ev_4ec8c4c66a40aa0bd3a3ddaa4c6defb30749cd9210b70cef513d709c00462df1 */

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
    *(undefined8 *)(puVar6 + -8) = 0x18000d2ec;
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


/* Address: 0x18000d344; Evidence: ev_6f70f4ef69495e185aaf722558c5be936dcb82d7eff2c08242735e45f611c602 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_18000d344(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x1d000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x1d001))) {
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


/* Address: 0x18000d3e0; Evidence: ev_8c6db4c4794a66b3a1732955a7217484667b6890eb2f4962fd6f751efe99d721 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

void FUN_18000d3e0(void *param_1,SIZE_T param_2,DWORD param_3,PDWORD param_4)

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
  lpAddress = (void *)FUN_18000d344(&local_28,local_24);
  if (lpAddress == (void *)0x0) {
    *param_4 = 4;
    return;
  }
  if (DAT_18001bb28 == 0) {
    DAT_18001bb28 = 1;
    puVar6 = auStack_48;
    if ((local_24[0] & IMAGE_SCN_MEM_WRITE) == 0) {
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar6 = auStack_40;
    }
    *(undefined8 *)(puVar6 + -8) = 0x18000d45a;
    DloadMakePermanentImageCommit(lpAddress,(ulonglong)*(uint *)(puVar6 + 0x20));
  }
  if (param_1 == (void *)0x0) {
    if (param_2 != 0) goto LAB_18000d46b;
LAB_18000d49b:
    param_2 = (SIZE_T)*(uint *)(puVar6 + 0x20);
  }
  else {
    puVar2 = puVar6;
    if (param_2 == 0) {
LAB_18000d46b:
      pcVar1 = (code *)swi(0x29);
      (*pcVar1)(0x19);
      puVar5 = puVar6 + 8;
      puVar6 = puVar6 + 8;
      puVar2 = puVar5;
      if (param_1 == (void *)0x0) goto LAB_18000d49b;
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
  *(undefined8 *)(puVar6 + -8) = 0x18000d4b4;
  BVar3 = VirtualProtect(lpAddress,param_2,param_3,param_4);
  if (BVar3 == 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(0x19);
  }
  return;
}


/* Address: 0x18000d4d8; Evidence: ev_1b6b47a62c3ad08f2563af8902fe7244e369824d90969255fdc7e85ea1c1c5bd */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d4f9) */
/* WARNING: Removing unreachable block (ram,0x00018000d51a) */
/* WARNING: Removing unreachable block (ram,0x00018000d526) */
/* WARNING: Removing unreachable block (ram,0x00018000d529) */
/* WARNING: Removing unreachable block (ram,0x00018000d502) */
/* WARNING: Removing unreachable block (ram,0x00018000d534) */
/* WARNING: Removing unreachable block (ram,0x00018000d53d) */
/* WARNING: Removing unreachable block (ram,0x00018000d552) */
/* WARNING: Removing unreachable block (ram,0x00018000d571) */
/* WARNING: Removing unreachable block (ram,0x00018000d55b) */

void FUN_18000d4d8(void)

{
  return;
}


/* Address: 0x18000d590; Evidence: ev_98f02d7c736ffe9b62f83ea6a8fb63b9efd24c528cdcffb93a30d0a4989bc4a0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d704) */
/* WARNING: Removing unreachable block (ram,0x00018000d7de) */

HMODULE FUN_18000d590(uint *param_1,void *param_2)

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
  
  FUN_18000d150();
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
    FUN_18000d4d8();
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
          FUN_18000d4d8();
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
        FUN_18000d4d8();
        RaiseException(0xc06d007f,0,1,(ULONG_PTR *)&local_res8);
        FUN_18000d150();
        pHVar3 = local_40;
      }
      local_88 = param_2;
      local_80 = pHVar3;
      FUN_18000d064(param_2,8,&local_88);
    }
    local_38 = 0;
    local_48 = hLibModule;
    local_40 = pHVar3;
    FUN_180001000(5,(longlong)local_78);
    FUN_18000d4d8();
  }
  return pHVar3;
}


/* Address: 0x18000d890; Evidence: ev_553329bfa69cd9a13147ee52fc7d2f7fcaa1d8b6d9655754bc0d2ad4dbd5d4c4 */

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


/* Address: 0x18000d8e0; Evidence: ev_8a5cd6b48cceb5dd5a6eaa70033effe2e7a10708ad7913821cb5dc42804224b6 */

ulonglong FUN_18000d8e0(longlong param_1)

{
  bool bVar1;
  undefined7 extraout_var;
  PIMAGE_SECTION_HEADER p_Var3;
  ulonglong uVar2;
  
  bVar1 = FUN_18000d930((short *)&IMAGE_DOS_HEADER_180000000);
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


/* Address: 0x18000d930; Evidence: ev_d5a2269be29bc40309ded949147ba7d03557745aff4dbb28b6007144fb7d0cdf */

bool FUN_18000d930(short *param_1)

{
  if ((*param_1 == 0x5a4d) &&
     (*(int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1) == 0x4550)) {
    return (short)((int *)((longlong)*(int *)(param_1 + 0x1e) + (longlong)param_1))[6] == 0x20b;
  }
  return false;
}


/* Address: 0x18000d960; Evidence: ev_40029530b7d236018d6d369589694eb72e5bbbdb35aa25d6e367f41cf5a5f541 */

undefined8 * FUN_18000d960(undefined8 *param_1,ulonglong param_2)

{
  *param_1 = type_info::vftable;
  if ((param_2 & 1) != 0) {
    thunk_FUN_180006b50(param_1);
  }
  return param_1;
}


/* Address: 0x18000d98c; Evidence: ev_dcdad21a79dfaa5e36b464b2d66c582707c8e0f1f2a4fd0d06b2647c4a724d42 */

undefined8 FUN_18000d98c(undefined8 param_1,undefined8 param_2,undefined8 param_3,longlong param_4)

{
  FUN_18000d9ac(param_2,param_4);
  return 1;
}


/* Address: 0x18000d9ac; Evidence: ev_ab4f29396c4b65d8811c9b0c632570ed5c71399e877b5a6579d1c036e60e18a5 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

ulonglong FUN_18000d9ac(undefined8 param_1,longlong param_2)

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


/* Address: 0x18000da0c; Evidence: ev_6d83ca4103bd145a486201252ab177f687f511ef189e3581bf95c9b245caace2 */

void thunk_FUN_180006b50(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001b678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180006060(DVar2);
    puVar4 = (uint *)FUN_1800061a0();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x18000da14; Evidence: ev_1c07828ed824202dba3c9a1a9d458b1e684cca72ec66eeeda1125f190cc1c8df */

void FUN_18000da14(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  longlong lVar1;
  
  lVar1 = *(longlong *)(param_4 + 0x38);
  FUN_18000d9ac(param_2,(longlong)param_4);
  if ((*(uint *)(lVar1 + 4) & ((param_1[1] & 0x66U) != 0) + 1) != 0) {
    __CxxFrameHandler3(param_1,param_2,param_3,param_4);
  }
  return;
}


/* Address: 0x18000dab0; Evidence: ev_b8fd8138f8e6de81346fc8412fb3b6c30bd65cf2ce2c845c9ca575af5b4f00ab */

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


/* Address: 0x18000db00; Evidence: ev_7743e49fae359235b24d3bd04fce38a2315b101b108a0179d13c435179f02bb8 */

void thunk_FUN_180006b50(LPVOID param_1)

{
  BOOL BVar1;
  DWORD DVar2;
  uint uVar3;
  uint *puVar4;
  
  if ((param_1 != (LPVOID)0x0) && (BVar1 = HeapFree(DAT_18001b678,0,param_1), BVar1 == 0)) {
    DVar2 = GetLastError();
    uVar3 = FUN_180006060(DVar2);
    puVar4 = (uint *)FUN_1800061a0();
    *puVar4 = uVar3;
  }
  return;
}


/* Address: 0x18000db08; Evidence: ev_46141d20ff01d3d1fe9516d00f0986d5df06e080a789435d45d7e974d482cd59 */

void FUN_18000db08(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_180002120(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180002658();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180002658();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_180005a1c();
  }
  return;
}


/* Address: 0x18000db70; Evidence: ev_5c2b2cc71e209e726745a05639eebc46d652a3485986579369935b3ba444a0bf */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000db70. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000db90; Evidence: ev_0e445a059c36f5e2268f152c3adb0d49ec4e014c765449e588e795b770d6259c */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000db70. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000dbb0; Evidence: ev_ed016fbd125a4f59a8959dfad28c1a91468fd922971136e9f93f4fb446644d47 */

/* WARNING: This is an inlined function */

void _guard_dispatch_icall(void)

{
  code *UNRECOVERED_JUMPTABLE;
  
                    /* WARNING: Could not recover jumptable at 0x00018000db70. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (*UNRECOVERED_JUMPTABLE)();
  return;
}


/* Address: 0x18000dbe0; Evidence: ev_a70f5a44556928b42e33a38738552909ef49d6c1d18dea76c8b36b45b591b958 */

undefined8 FUN_18000dbe0(undefined1 *param_1,undefined1 param_2,longlong param_3,undefined8 param_4)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = param_2;
    param_1 = param_1 + 1;
  }
  return param_4;
}


/* Address: 0x18000dbf0; Evidence: ev_acd132f03cb07d575c4de1137b84d39d22824441e47de3a65787db7d298b612b */

undefined1 (*) [32] FUN_18000dbf0(undefined1 (*param_1) [32],byte param_2,ulonglong param_3)

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
    if (DAT_18001a058 < 3) {
      if ((param_3 <= DAT_18001a060) || (((byte)DAT_18001b080 & 2) == 0)) {
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
    else if (((param_3 <= DAT_18001a060) || (DAT_18001a068 < param_3)) ||
            (((byte)DAT_18001b080 & 2) == 0)) {
      auVar12._16_16_ = auVar11;
      auVar12._0_16_ = auVar11;
      lVar10 = ((ulonglong)param_1 & 0x1f) - 0x20;
      pauVar2 = (undefined1 (*) [32])((longlong)param_1 - lVar10);
      uVar5 = param_3 + lVar10;
      if (0x100 < uVar5) {
        if (DAT_18001a068 < uVar5) {
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


/* Address: 0x18000dfa0; Evidence: ev_4ed7bf084b7bc7ae07f3117f560956960427692737684d34a64a65a453b88b04 */

void FUN_18000dfa0(undefined1 *param_1,undefined1 *param_2,longlong param_3)

{
  for (; param_3 != 0; param_3 = param_3 + -1) {
    *param_1 = *param_2;
    param_2 = param_2 + 1;
    param_1 = param_1 + 1;
  }
  return;
}


/* Address: 0x18000dfb0; Evidence: ev_203ab56c9edbdf6cb3ccd892cd927436390176ccb9eda03caf25d20a84099205 */

void FUN_18000dfb0(undefined1 (*param_1) [32],undefined1 (*param_2) [32],ulonglong param_3)

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
  if (DAT_18001a058 < 3) {
    if ((param_3 < 0x801) || (((byte)DAT_18001b080 & 2) == 0)) {
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
code_r0x00018000dfab:
    for (; param_3 != 0; param_3 = param_3 - 1) {
      (*param_1)[0] = (*param_2)[0];
      param_2 = (undefined1 (*) [32])(*param_2 + 1);
      param_1 = (undefined1 (*) [32])(*param_1 + 1);
    }
    return;
  }
  if (((0x2000 < param_3) && (param_3 < 0x180001)) && (((byte)DAT_18001b080 & 2) != 0))
  goto code_r0x00018000dfab;
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
        goto switchD_18000e236_caseD_0;
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
switchD_18000e236_caseD_0:
  *(undefined8 *)*param_1 = uVar10;
  *(undefined8 *)(*param_1 + 8) = uVar11;
  *(undefined8 *)(*param_1 + 0x10) = uVar12;
  *(undefined8 *)(*param_1 + 0x18) = uVar13;
  return;
}


/* Address: 0x18000e650; Evidence: ev_2fe2943eda981e5c4c23037e30a104ea229228a06e5acd825196bdd93b9a2e61 */

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


/* Address: 0x18000e6d0; Evidence: ev_9dbf8a7acab9718e5653f6c3b3026f49b3edbd6427ed3003261ff51176f1a1fb */

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
    if (((ulonglong)_Str & 7) == 0) goto LAB_18000e701;
    uVar1 = *(ulonglong *)_Str;
    _Str = (char *)((longlong)_Str + 1);
  } while ((char)uVar1 != '\0');
LAB_18000e748:
  return (size_t)(char *)((longlong)_Str + lVar3 + -1);
LAB_18000e701:
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
  goto LAB_18000e748;
}


/* Address: 0x18000e790; Evidence: ev_3d16658628cbedd5d8f69744e07ecd5a7926f36a0add769680784ace0503dfd8 */

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


/* Address: 0x18000e820; Evidence: ev_9f4a1fbafe52f0d4c103b3fcc305fba11edad1e91e9bc3fa77f6ff3764d38ccd */

void FUN_18000e820(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x40));
  return;
}


/* Address: 0x18000e837; Evidence: ev_6a0be4b678e4c7b27059bd8b87b286d0a7a3bf608956ccc02c6b985b6056cb3a */

void FUN_18000e837(undefined8 param_1,longlong param_2)

{
  __scrt_release_startup_lock(*(char *)(param_2 + 0x20));
  return;
}


/* Address: 0x18000e850; Evidence: ev_cd203c1a693a6c624f71ec9dba729cc29accee3de57a626eafc8e0be888cdd0f */

void FUN_18000e850(void)

{
  FUN_180001ad0();
  return;
}


/* Address: 0x18000e864; Evidence: ev_4739fc2162bff85a1f872ae8838ce130a52baa636f1b89a1c2fc9a083734bc3e */

void FUN_18000e864(undefined8 *param_1,longlong param_2)

{
  __scrt_dllmain_exception_filter
            (*(undefined8 *)(param_2 + 0x60),*(int *)(param_2 + 0x68),
             *(undefined8 *)(param_2 + 0x70),FUN_180001390,*(int *)*param_1,param_1);
  return;
}


/* Address: 0x18000e89a; Evidence: ev_d6230c05ab21e0c1a00171287241250cf184d5abd97e58fe41f5985d9a479451 */

bool FUN_18000e89a(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}


/* Address: 0x18000e8b2; Evidence: ev_675795717f84a74d4b7922c34307130c352a883cf5beacf2657d12aa16c94792 */

undefined4 FUN_18000e8b2(undefined8 param_1,longlong param_2)

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
    lVar2 = FUN_180002658();
    *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0x28);
    uVar1 = *(undefined8 *)(*(longlong *)(param_2 + 0x30) + 8);
    lVar2 = FUN_180002658();
    *(undefined8 *)(lVar2 + 0x28) = uVar1;
                    /* WARNING: Subroutine does not return */
    FUN_180005a1c();
  }
  *(undefined4 *)(param_2 + 0x20) = 0;
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18000e944; Evidence: ev_17c12edbaee5a45a0abcb038583de2b723da3c047a19010beb4efe5070e2d8d8 */

undefined4 FUN_18000e944(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180002658();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180002658();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180002658();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180003e10((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180002658();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}


/* Address: 0x18000e9eb; Evidence: ev_5308453f8dfe4649d29f19ddf179a3e845f787686a4fef3241d9f6d5fb01436b */

void FUN_18000e9eb(undefined8 *param_1,longlong param_2)

{
  FUN_18000433c(param_1,*(longlong *)(param_2 + 0xb8),(undefined4 *)(param_2 + 0x20));
  return;
}


/* Address: 0x18000ea0c; Evidence: ev_c9c48098c25d4fc4edb95f35cb60e3a0c789b809a603340f82b752b8ebecd67c */

void FUN_18000ea0c(undefined8 param_1,longlong param_2)

{
  int *piVar1;
  longlong lVar2;
  int iVar3;
  
  FUN_180002cdc(*(longlong *)(param_2 + 0x38));
  if ((((*(int *)(param_2 + 0x20) == 0) &&
       (piVar1 = *(int **)(param_2 + 0xb8), *piVar1 == -0x1f928c9d)) && (piVar1[6] == 4)) &&
     (((piVar1[8] == 0x19930520 || (piVar1[8] == 0x19930521)) || (piVar1[8] == 0x19930522)))) {
    iVar3 = _IsExceptionObjectToBeDestroyed(*(longlong *)(piVar1 + 10));
    if (iVar3 != 0) {
      FUN_180002400(piVar1);
    }
  }
  lVar2 = FUN_180002658();
  *(undefined8 *)(lVar2 + 0x20) = *(undefined8 *)(param_2 + 0xc0);
  lVar2 = FUN_180002658();
  *(undefined8 *)(lVar2 + 0x28) = *(undefined8 *)(param_2 + 0x40);
  return;
}


/* Address: 0x18000ea92; Evidence: ev_7cabc0c927d815de3c871705f946d75db34f445a5009733a690d57d44e4f176f */

void FUN_18000ea92(undefined8 *param_1)

{
  FUN_1800024d0(param_1);
  return;
}


/* Address: 0x18000eaa8; Evidence: ev_8bb358edbead8542a4a3efdbe70a9727eeb7296ab2b006d0f356b70a46a53ec4 */

void FUN_18000eaa8(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002658();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180002658();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}


/* Address: 0x18000eacb; Evidence: ev_7ae14d11d872b0ccedfa628b1257545e48aa0b0ea749301c8ce4b2c3e198d702 */

void FUN_18000eacb(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000eae5; Evidence: ev_523de5fe8e2c060e97f275394433b92e40d218e12120476d7704625b9cfe5c5b */

undefined4 FUN_18000eae5(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  
  *(undefined8 **)(param_2 + 0x28) = param_1;
  iVar1 = *(int *)*param_1;
  *(int *)(param_2 + 0x24) = iVar1;
  *(uint *)(param_2 + 0x20) = (uint)(iVar1 == -0x1f928c9d);
  return *(undefined4 *)(param_2 + 0x20);
}


/* Address: 0x18000eb12; Evidence: ev_f0ec64e39d280883330e58f87e26ec6d1ea13da2456022ab3b17d98a529f295b */

void FUN_18000eb12(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x58));
  return;
}


/* Address: 0x18000eb2c; Evidence: ev_4b9f29faf8f8aac38fffb9db15ba32df13abd2b3aee4f6174a4fde114ab6754c */

void FUN_18000eb2c(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x68));
  return;
}


/* Address: 0x18000eb46; Evidence: ev_2185cf0cde9a5c072f0ce70cd71eb30603ca1cbc08e070d469079dcaceb881ab */

void FUN_18000eb46(void)

{
  __acrt_unlock(5);
  return;
}


/* Address: 0x18000eb5f; Evidence: ev_15374f295a9b6d44d56959b7e6790be6fe714b101f6915a34a7f03fe8b765a0f */

void FUN_18000eb5f(void)

{
  __acrt_unlock(7);
  return;
}


/* Address: 0x18000eb80; Evidence: ev_b873f83e68dbb71361137b77db7bffe7ba2f34ee5cda1bf70883f854ea878842 */

void FUN_18000eb80(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18000eb96; Evidence: ev_cb51ea62ed5a27c9efcdffad5989ef91816b131e63f5f3b38b3891ca18600aac */

void FUN_18000eb96(void)

{
  __acrt_unlock(0);
  return;
}


/* Address: 0x18000ebac; Evidence: ev_0f533613f69ff2c680db9e6c7808a74815392b8c34664cbbd9ce28a7a9dbd674 */

void FUN_18000ebac(undefined8 param_1,longlong param_2)

{
  if (*(char *)(param_2 + 0x70) != '\0') {
    __acrt_unlock(3);
  }
  return;
}


/* Address: 0x18000ebcd; Evidence: ev_39fd76e78954f18ccffa14316feaf32252efbeddb3c450e070bcd4992aba6651 */

void FUN_18000ebcd(undefined8 param_1,longlong param_2)

{
  FUN_1800098d8(**(longlong **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000ebe8; Evidence: ev_e1c9d5c82af1bf285401644d6f3e06ee53ad92e0fe22b26f7129bd1b39f2eb01 */

void FUN_18000ebe8(undefined8 param_1,longlong param_2)

{
  __acrt_unlock(**(int **)(param_2 + 0x98));
  return;
}


/* Address: 0x18000ec05; Evidence: ev_2f867519c54f162e5fde71d253373388ef86baa4df555cc68e8e524f3b2e228d */

void FUN_18000ec05(void)

{
  __acrt_unlock(4);
  return;
}


/* Address: 0x18000ec1e; Evidence: ev_e2ef187f02a2d8450d375910d0d4c42824c019a1e4a722dc718f32e7963ad058 */

void FUN_18000ec1e(undefined8 param_1,longlong param_2)

{
  FUN_18000b86c(**(uint **)(param_2 + 0x48));
  return;
}


/* Address: 0x18000ec38; Evidence: ev_c1ee2a8a5627996c61bc2d8f2c4940c7efa7e3fdb21e6237fc19f10dcf91066e */

void FUN_18000ec38(undefined8 param_1,longlong param_2)

{
  FUN_18000b86c(*(uint *)(param_2 + 0x60));
  return;
}


/* Address: 0x18000ec4f; Evidence: ev_967fa414139de4a1018aacc1a10623fed579add1aa42b387d22ad2003c78cd5e */

void FUN_18000ec4f(void)

{
  __acrt_unlock(8);
  return;
}


/* Address: 0x18000ec68; Evidence: ev_9fa3bf02b0f597d43e8b5d36393f5e582a0f2dd9981cf40398f1ebb303cf84ae */

void FUN_18000ec68(undefined8 param_1,longlong param_2)

{
  FUN_1800098d8(*(longlong *)(param_2 + 0x40));
  return;
}


/* Address: 0x18000ec80; Evidence: ev_f9aeff9696f7a15f7d9b9d4c48d3ff38b2d9913a66a488d663a33e47687f6a91 */

bool FUN_18000ec80(undefined8 *param_1)

{
  return *(int *)*param_1 == -0x3ffffffb;
}

