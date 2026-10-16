
/* Address: 0x1800140d4; Evidence: ev_2be6034e49d8c452ccf9687f626e75107196a491b11db6c82fa3db5c21ac7559 */

ulonglong FUN_1800140d4(byte param_1,FILE *param_2,longlong *param_3)

{
  uint *puVar1;
  bool bVar2;
  undefined8 uVar3;
  
  _fileno(param_2);
  if (((ulonglong)param_2->_base & 0x600000000) == 0) {
    *(undefined4 *)((longlong)param_3 + 0x2c) = 9;
  }
  else {
    if ((*(uint *)((longlong)&param_2->_base + 4) >> 0xc & 1) == 0) {
      if (((ulonglong)param_2->_base & 0x100000000) != 0) {
        bVar2 = FUN_18001404c((longlong *)param_2);
        *(undefined4 *)&param_2->_base = 0;
        if (!bVar2) goto LAB_180014106;
        param_2->_ptr = *(char **)&param_2->_cnt;
        LOCK();
        puVar1 = (uint *)((longlong)&param_2->_base + 4);
        *puVar1 = *puVar1 & 0xfffffffe;
        UNLOCK();
      }
      LOCK();
      puVar1 = (uint *)((longlong)&param_2->_base + 4);
      *puVar1 = *puVar1 | 2;
      UNLOCK();
      LOCK();
      puVar1 = (uint *)((longlong)&param_2->_base + 4);
      *puVar1 = *puVar1 & 0xfffffff7;
      UNLOCK();
      *(undefined4 *)&param_2->_base = 0;
      if ((((ulonglong)param_2->_base & 0x4c000000000) == 0) &&
         (uVar3 = FUN_18000e63c(param_2), (char)uVar3 == '\0')) {
        __acrt_stdio_allocate_buffer_nolock(&param_2->_ptr);
      }
      bVar2 = FUN_180013f54(param_1,param_2,param_3);
      if (bVar2) {
        return (ulonglong)param_1;
      }
      goto LAB_180014106;
    }
    *(undefined4 *)((longlong)param_3 + 0x2c) = 0x22;
  }
  *(undefined1 *)(param_3 + 6) = 1;
LAB_180014106:
  LOCK();
  puVar1 = (uint *)((longlong)&param_2->_base + 4);
  *puVar1 = *puVar1 | 0x10;
  UNLOCK();
  return 0xffffffff;
}

