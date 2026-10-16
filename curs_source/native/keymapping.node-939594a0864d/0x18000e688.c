
/* Address: 0x18000e688; Evidence: ev_a5716a44c1715274811e7df746d1fb3405063d3984f84274f767b313346c1872 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_18000e688(FILE *param_1)

{
  uint *puVar1;
  uint uVar2;
  FILE *pFVar3;
  LPVOID pvVar4;
  longlong *plVar5;
  
  pFVar3 = (FILE *)FUN_18000e63c(param_1);
  if ((char)pFVar3 != '\0') {
    pFVar3 = (FILE *)FUN_1800083b0(1);
    if (param_1 == pFVar3) {
      plVar5 = &DAT_180028948;
    }
    else {
      pFVar3 = (FILE *)FUN_1800083b0(2);
      if (param_1 != pFVar3) goto LAB_18000e742;
      plVar5 = &DAT_180028950;
    }
    _DAT_1800282c0 = _DAT_1800282c0 + 1;
    uVar2 = *(uint *)((longlong)&param_1->_base + 4);
    pFVar3 = (FILE *)(ulonglong)uVar2;
    if ((uVar2 & 0x4c0) == 0) {
      LOCK();
      puVar1 = (uint *)((longlong)&param_1->_base + 4);
      *puVar1 = *puVar1 | 0x282;
      UNLOCK();
      if (*plVar5 == 0) {
        pvVar4 = _malloc_base(0x1000);
        *plVar5 = (longlong)pvVar4;
        pFVar3 = (FILE *)FUN_18000bff0((LPVOID)0x0);
      }
      if (*plVar5 == 0) {
        *(undefined4 *)&param_1->_base = 2;
        *(int **)&param_1->_cnt = &param_1->_file;
        param_1->_ptr = (char *)&param_1->_file;
        param_1->_charbuf = 2;
      }
      else {
        *(longlong *)&param_1->_cnt = *plVar5;
        pFVar3 = (FILE *)*plVar5;
        param_1->_ptr = (char *)pFVar3;
        *(undefined4 *)&param_1->_base = 0x1000;
        param_1->_charbuf = 0x1000;
      }
      return CONCAT71((int7)((ulonglong)pFVar3 >> 8),1);
    }
  }
LAB_18000e742:
  return (ulonglong)pFVar3 & 0xffffffffffffff00;
}

