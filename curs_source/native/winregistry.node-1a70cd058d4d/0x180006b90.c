
/* Address: 0x180006b90; Evidence: ev_9c538cbcea24274a375062e6ea2ee4e01efd8dda9267424d8254021dd47f3040 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001c388) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

