
/* Address: 0x180014f40; Evidence: ev_74e4ecb4ec8dcb270e589948e5dcab3434b7b11baec36de7a2a5deba51177d80 */

void FUN_180014f40(PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000815c(param_1,param_2,param_3,param_4);
  if ((((param_1->ExceptionFlags & 0x66) == 0) && (param_1->ExceptionCode == 0xe06d7363)) &&
     ((int)uVar1 == 1)) {
    lVar2 = FUN_180008548();
    *(PEXCEPTION_RECORD *)(lVar2 + 0x20) = param_1;
    lVar2 = FUN_180008548();
    *(longlong *)(lVar2 + 0x28) = param_3;
                    /* WARNING: Subroutine does not return */
    FUN_18000d39c();
  }
  return;
}

