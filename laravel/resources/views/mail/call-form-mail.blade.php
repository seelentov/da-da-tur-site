<h1>Заявка с формы обратной связи</h1>

<p><strong>Страница:</strong> {{ $data['page'] ?? 'Не указан'}}</p>
<p><strong>Тема:</strong> {{ $data['topic'] ?? 'Не указана' }}</p>
<p><strong>Телефон:</strong> {{ $data['phone'] ?? 'Не указан' }}</p>
<p><strong>Email:</strong> {{ $data['email'] ?? 'Не указан' }}</p>
<p><strong>Имя:</strong> {{ $data['name'] ?? 'Не указано' }}</p>
<p><strong>Сообщение:</strong> {{ $data['message']?? 'Не указано'  }}</p>
<p><strong>Политика конфиденциальности:</strong> {{ $data['policy'] ? 'Принята' : 'Не принята' }}</p>

