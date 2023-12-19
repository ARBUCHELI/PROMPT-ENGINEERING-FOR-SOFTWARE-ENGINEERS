import random
import string

def generate_test_data(num_samples):
    test_data = []
    for _ in range(num_samples):
        # Generate a random email
        email = generate_random_email()

        # Generate a random password
        password = generate_random_password()

        # Append the email and password to the test data
        test_data.append((email, password))

    return test_data

def generate_random_email():
    domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com']
    username_length = random.randint(5, 12)
    username = ''.join(random.choices(string.ascii_lowercase, k=username_length))
    domain = random.choice(domains)
    return f"{username}@{domain}"

def generate_random_password():
    password_length = random.randint(8, 16)
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choices(characters, k=password_length))
    return password

# Generate 10 test data samples
test_data = generate_test_data(10)

# Print the generated test data
for email, password in test_data:
    print(f"Email: {email}, Password: {password}")