
/* Address: 0x18000c788; Evidence: ev_ea779dff1fea6ae59a566ca20e139d6d873c39af7549e6a018bf95850608e77b */

undefined8 FUN_18000c788(FILE *param_1,longlong *param_2)

{
  uint *puVar1;
  undefined1 (*pauVar2) [32];
  uint uVar3;
  uint uVar4;
  
  uVar4 = *(uint *)((longlong)&param_1->_base + 4);
  if ((((byte)uVar4 & 3) == 2) && ((uVar4 & 0xc0) != 0)) {
    uVar4 = *(int *)&param_1->_ptr - param_1->_cnt;
    *(undefined4 *)&param_1->_base = 0;
    pauVar2 = *(undefined1 (**) [32])&param_1->_cnt;
    param_1->_ptr = (char *)pauVar2;
    if (0 < (int)uVar4) {
      uVar3 = _fileno(param_1);
      uVar3 = FUN_180011d7c(uVar3,pauVar2,uVar4,param_2);
      if (uVar4 != uVar3) {
        LOCK();
        puVar1 = (uint *)((longlong)&param_1->_base + 4);
        *puVar1 = *puVar1 | 0x10;
        UNLOCK();
        return 0xffffffff;
      }
      if ((*(uint *)((longlong)&param_1->_base + 4) >> 2 & 1) != 0) {
        LOCK();
        puVar1 = (uint *)((longlong)&param_1->_base + 4);
        *puVar1 = *puVar1 & 0xfffffffd;
        UNLOCK();
      }
    }
  }
  return 0;
}

