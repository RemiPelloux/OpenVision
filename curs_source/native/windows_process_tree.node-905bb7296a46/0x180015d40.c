
/* Address: 0x180015d40; Evidence: ev_6b234f822006c3acc8bbaabf637c4fa86fe7f46c75f13b3d67d6680974bdcbee */

void FUN_180015d40(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x30) & 2) != 0) {
    *(uint *)(param_2 + 0x30) = *(uint *)(param_2 + 0x30) & 0xfffffffd;
    thunk_FUN_180002f40(*(longlong **)(param_2 + 0x40));
  }
  return;
}

