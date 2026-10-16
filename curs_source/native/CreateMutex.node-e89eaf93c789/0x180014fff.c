
/* Address: 0x180014fff; Evidence: ev_fd84a318c827c5d4c971259c579c8ce5788a748c79315e97f4efc39f470a4e6f */

void FUN_180014fff(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180007158();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

